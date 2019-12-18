<template>
  <div>

    <v-card class="mb-2">
      <v-card-text class="pb-0" align="center" justify="center">

        <v-row no-gutters>
          <v-col class="px-3" cols="12" sm="12" md="6">
            <v-autocomplete v-model="selectedTranslation" :items="translations" :filter="filterAutocomplete" label="Wybierz tłumaczenie" outlined></v-autocomplete>
          </v-col>
          <v-col class="px-3" cols="12" sm="12" md="6">
            <v-autocomplete v-model="selectedBook" :items="books" :filter="filterAutocomplete" label="Wybierz księgę" outlined></v-autocomplete>
          </v-col>
        </v-row>

        <h3 class="subtitle-1 primary--text text-center mb-2 unselectable">
          Skroluj do rozdziału:
        </h3>
        <ScrollToButtons :translation="selectedTranslation" :book="selectedBook" @chapterClicked="scrollToChapter" @headingClicked="scrollToHeading"></ScrollToButtons>

        <v-col>
          <v-btn block text color="primary" @click="toggleMoreOptions">
             {{ moreOptionsText }}
            <v-icon right>{{ moreOptionsIcon }}</v-icon>
          </v-btn>
        </v-col>

        <v-expand-transition>
          <div v-if="moreOptions">
            <v-row no-gutters>
              <v-col cols="12" sm="12" md="6">
                  <v-checkbox class="my-0 py-0"  v-model="showVerseNumbers" label="Pokazuj numery wersów" color="primary"></v-checkbox>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                  <v-checkbox class="my-0 py-0"  v-model="verseNumberSelectable" :disabled="!showVerseNumbers" label="Zaznaczaj numery wersów" color="primary"></v-checkbox>
              </v-col>
            </v-row>
          </div>
        </v-expand-transition>

      </v-card-text>
    </v-card>

    <v-card v-for="(versesArrays, indexChapter) in verses" class="mb-2" :key="indexChapter">
      <!-- Bible text -->
      <v-card-text class="text-justify" @mouseup="onBibleSelected()">
        <h2 class="primary--text text-center mb-2 unselectable" :ref="makeChapterId(indexChapter+1)">
          {{ makeChapterName(parseInt(indexChapter)) }}
        </h2>
        <template v-for="(verse, indexVerse) in versesArrays">
          <h3 v-if="typeof headings != 'undefined' && headings[indexChapter].some(heading => heading.after == indexVerse)" class="primary--text text-center my-2 unselectable" :ref="makeHeadingId(indexChapter+1,indexVerse)">
            {{ headings[indexChapter].find(heading => heading.after == indexVerse).title }}
          </h3>
          <span :chapter="(parseInt(indexChapter) + 1)" :verse="(indexVerse + 1)" v-show="showVerseNumbers" class="primary--text verse-number" :class="verseNumberClasses">({{ indexVerse+1 }})</span>
          <span :chapter="(parseInt(indexChapter) + 1)" :verse="(indexVerse + 1)" class="verse-text"> {{ verse }} </span>
        </template>
      </v-card-text>

      <!-- Chapter actions buttons -->
      <v-col class="text-right">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn small text icon color="primary" @click="selectChapter(indexChapter)" v-on="on">
              <v-icon small>mdi-script-text</v-icon>
            </v-btn>
          </template>
          <span>Zaznacz {{ makeChapterName(indexChapter) }}</span>
        </v-tooltip>
      </v-col>
    </v-card>

  </div>
</template>

<script>
import ScrollToButtons from '@/components/ScrollToButtons'
import BibleData from '@/bible/bible-data';
import {getTranslations, getBooks} from '@/bible/bible-provider'
import EventBus from '@/event-bus';
import {windowSelectionObjectToSelectionInfo, forceSelectCurrentSelection} from '@/selection_helpers'
import goTo from 'vuetify/es5/services/goto'

export default {
  components: { ScrollToButtons },
  data() {
    return {
      translations: getTranslations(),
      selectedTranslation: 'bt',
      selectedBook: 'Mk',
      moreOptions: false,
      moreOptionsIcon: "mdi-chevron-down",
      moreOptionsText: "Pokaż wiecej opcji",
      showVerseNumbers: true,
      verseNumberSelectable: false,
      previousBibliaInfoRequests: [],
      currentSelection: null,
    }
  },
  methods: {
    scrollToChapter(chapterNumber) {
      var id = this.makeChapterId(chapterNumber);
      var el = this.$refs[id][0];
      goTo(el, { offset: 56 });   // workaround, when toolbar is active scroll goes too far
    },
    scrollToHeading(chapterNumber, after) {
      var id = this.makeHeadingId(chapterNumber, after);
      var el = this.$refs[id][0];
      goTo(el, { offset: 56 });   // workaround, when toolbar is active scroll goes too far
    },
    toggleMoreOptions() {
      if(this.moreOptions) {
        this.moreOptions = false;
        this.moreOptionsIcon = "mdi-chevron-down";
        this.moreOptionsText = "Pokaż wiecej opcji";
      }
      else {
        this.moreOptions = true;
        this.moreOptionsIcon = "mdi-chevron-up";
        this.moreOptionsText = "Ukryj wiecej opcji";
      }
    },
    makeChapterId(chapterNumber) {
      return "chapter"+chapterNumber;
    },
    makeHeadingId(chapterNumber, after) {
      return "heading"+chapterNumber+"."+after;
    },
    makeChapterName(indexChapter) {
      return "Rozdział " + (indexChapter+1);
    },
    filterAutocomplete(item, queryText, itemText) {
      return itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1;
    },
    selectChapter(indexChapter) {
      var newCurrentSelection = {
        start: { chapter: indexChapter + 1, verse: 1 },
        end:   { chapter: indexChapter + 1, verse: this.chaptersLengths[indexChapter] }
      };
      this.newSelection(newCurrentSelection);
    },
    handleSelectedText() {
    // https://stackoverflow.com/questions/5669448/get-selected-texts-html-in-div
      if (window.getSelection) {
        console.log("tu");
        var selectionInfo = windowSelectionObjectToSelectionInfo(window.getSelection());
        this.newSelection(selectionInfo);
      } else if (document.selection) {
        console.log("tu2");
        console.log(document.selection);
      }
    },
    newSelection(selection) {
      this.currentSelection = selection;
      if(selection != null)
        forceSelectCurrentSelection(this.currentSelection);
      this.emitSelectionChanged(this.currentSelection);
    },
    onBibleSelected() {
      this.handleSelectedText();
    },
    emitSelectionChanged(selection) {
      if(selection != null)
        selection.book = this.selectedBook;
      EventBus.$emit('SELECTION_CHANGED', selection);
    }
  },
  computed: {
    books() {
      return getBooks(this.selectedTranslation);
    },
    verses() {
      return BibleData.allBibleData[this.selectedTranslation][this.selectedBook];
    },
    verseNumberClasses() {
      return {
        'unselectable': !this.verseNumberSelectable
      }
    },
    chaptersLengths() {
      return this.verses.map(chapterVerses => chapterVerses.length );
    },
    headings() {
      return BibleData.headings[this.selectedBook];
    }
  }
}
</script>

<style scoped>

.unselectable {
   -moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
}

::selection {
  color: var(--v-primary-base);
  background: var(--v-secondary-base);
}

</style>

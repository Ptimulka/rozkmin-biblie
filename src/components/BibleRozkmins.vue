<template>
  <v-card class="text-center ml-2" id="rozkminsColumn">


    <div :class="rozkminsScrollableClasses" v-bar>
      <div>
        <v-card-text align="center" justify="center">
          <div>
            <h2 class="primary--text display-2 mb-5" v-if="selection != null">
              {{ selectionToText }}
            </h2>
            <h2 class="primary--text">
              Rozkminy w przygotowaniu
            </h2>
          </div>
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<script>
import EventBus from '@/event-bus';

export default {
  data() {
    return {
      scrollPosition: null,
      selection: null
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },

  },
  computed: {
    rozkminsScrollableClasses() {
      return {
        'scrollable-when-bar': this.scrollPosition < 48,
        'scrollable-full-height': this.scrollPosition >= 48,
        'vuebar-element': true,
        'vb': true,
        'vb-visible': true
      }
    },
    selectionToText() {
      if(this.selection == null) {
        return "";
      }
      var book = this.selection.book;
      var startChapter = this.selection.start.chapter;
      var startVerse = this.selection.start.verse;
      var endChapter = this.selection.end.chapter;
      var endVerse = this.selection.end.verse;

      if(startChapter == endChapter) {
        if(startVerse == endVerse) {
          return book + " " + startChapter + "," + startVerse;
        }
        else {
          return book + " " + startChapter + "," + startVerse + "-" + endVerse;
        }
      }
      else {
        return book + " " + startChapter + "," + startVerse + "-" + endChapter + "," + endVerse;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    var thisBibleRozkmins = this;
    EventBus.$on('SELECTION_CHANGED', function(payLoad) {
      thisBibleRozkmins.selection = payLoad;
    });
  }
}
</script>

<style>

#rozkminsColumn {
  position: sticky;
  top: 12px;
}

.scrollable-when-bar {
  height: calc(100vh - 72px);
}

.scrollable-full-height {
  height: calc(100vh - 24px);
}

.vb > .vb-dragger {
    z-index: 5;
    width: 12px;
    height: 6px;
    right: 0;
}

.vb > .vb-dragger > .vb-dragger-styler {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotate3d(0,0,0,0);
    transform: rotate3d(0,0,0,0);
    -webkit-transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    background-color: var(--v-primary-lighten4);
    margin-left: 5px;
    border-radius: 20px;
    height: 100%;
    display: block;
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: var(--v-primary-lighten2);
}

.vb > .vb-dragger:hover > .vb-dragger-styler {
    background-color: var(--v-primary-base);
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
    background-color: var(--v-primary-base);
}

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: var(--v-primary-base);
}


</style>

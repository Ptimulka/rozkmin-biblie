<template>
  <div>
    <template v-for="chapterNumber in numberOfChapters">
      <v-btn fab x-small outlined class="ma-1" color="primary" @click="scrollToChapter(chapterNumber)" >{{ chapterNumber }}</v-btn>
      <v-btn x-small outlined v-for="heading in headings[chapterNumber-1]" class="ma-1" color="primary">{{ heading.title }}</v-btn>
      <!-- TODO clicki  -->
    </template>
  </div>
</template>

<script>
import BibleData from '@/bible/bible-data';

export default {
  data() {
    return {
      currentSelection: null
    }
  },
  methods: {
    toggleMoreOptions() {
    }
  },
  props: ['translation', 'book'],
  computed: {
    numberOfChapters() {
      return BibleData.allBibleData[this.translation][this.book].length;
    },
    headings() {
      if(this.book in BibleData.headings) {
        return BibleData.headings[this.book];
      }
      else {
        return Array(this.numberOfChapters).fill([]);
      }
    }
  }
}
</script>

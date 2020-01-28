<template>
  <div>
    <template v-for="chapterNumber in numberOfChapters">
      <v-btn x-small outlined class="ma-1" color="primary" @click="chapterClicked(chapterNumber)" :key="chapterNumber">
        {{ chapterNumber }}
      </v-btn>
      <v-btn x-small outlined v-for="heading in headings[chapterNumber-1]" class="ma-1" color="primary" @click="headingClicked(chapterNumber, heading.after)" :key="chapterNumber*100+heading.after">
        {{ heading.title }}
      </v-btn>
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
    chapterClicked(chapterNumber) {
      this.$emit('chapterClicked', chapterNumber);
    },
    headingClicked(chapterNumber, after) {
      this.$emit('headingClicked', chapterNumber, after);
    }
  },
  props: ['translation', 'book'],
  computed: {
    numberOfChapters() {
      if(BibleData.allBibleData[this.translation] == null)
          return 0;
      else
        return BibleData.allBibleData[this.translation][this.book].length;
    },
    headings() {
      if(this.book in BibleData.headings)
        return BibleData.headings[this.book];
      else
        return Array(this.numberOfChapters).fill([]);
    }
  }
}
</script>

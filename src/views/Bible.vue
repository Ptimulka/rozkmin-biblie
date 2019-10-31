<template>
  <div>
    <Navbar hide-bar-on-scroll absolute></Navbar>
    <v-content>
      <v-container>
        <v-row>

          <v-flex xs12 sm6>
            <BibleContent></BibleContent>
          </v-flex>

          <v-flex xs12 sm6>
            <BibleRozkmins></BibleRozkmins>
          </v-flex>

        </v-row>
      </v-container>
    </v-content>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import BibleContent from '@/components/BibleContent'
import BibleRozkmins from '@/components/BibleRozkmins'

export default {
  components: { Navbar, BibleContent, BibleRozkmins },
};
</script>

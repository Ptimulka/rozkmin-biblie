<template>
  <div>
    <Navbar></Navbar>
    <v-content class="pt-0">
      <v-content>
        <v-col class="text-center" cols="12">
          <h1 class="mb-2 display-1 text-center">404 Nie ma takiej strony</h1>
        </v-col>
      </v-content>
    </v-content>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar },
};
</script>

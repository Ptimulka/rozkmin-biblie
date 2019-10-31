<template>
  <!-- to chyba nie dziala te klasy :( -->
  <v-app app>
    <!-- <Navbar></Navbar> -->
      <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'Rozkmina',
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>

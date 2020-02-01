<template>
  <nav>
    <v-navigation-drawer app v-model="drawer" class="primary lighten-2" disable-resize-watcher>
      <v-col align="right">
        <v-btn fab class="white--text" text @click="drawer = !drawer">
          <v-icon class="white--text">mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-action>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar :app="!absolute" :hide-on-scroll="hideBarOnScroll" flat :color="transparentValue" :src="barSrc" dense>
      <template v-slot:img="{ props }">
         <v-img v-bind="props" gradient="to top right, rgba(74, 49, 41,.5), rgba(143, 110, 100,.8)"></v-img>
       </template>

       <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text hidden-md-and-up"></v-app-bar-nav-icon>

        <v-toolbar-title class="text-uppercase white--text">
          <span class="font-weight-light">ROZKMIŃ</span>
          <span class="">ZNAMI</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="link in links" :key="link.icon" class="white--text custom-menu-button" text router :to="link.route">
            <v-icon left class="white--text">{{ link.icon }}</v-icon>
            <span>{{ link.text }}</span>
          </v-btn>
        </v-toolbar-items>
    </v-app-bar>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-home', text: 'Home', route: '/' },
        { icon: 'mdi-book-open-page-variant', text: 'Rozkminiaj Biblię', route: '/bible' },
        { icon: 'mdi-account-group', text: 'O projekcie', route: '/about' },
      ],
    }
  },
  props: {
    barTransparent: Boolean,
    hideBarOnScroll: Boolean,
    absolute: Boolean
  },
  computed: {
    transparentValue() {
      if(this.barTransparent) {
        return "transparent"
      }
      else {
        return ""
      }
    },
    barSrc() {
      if(this.barTransparent) {
        return ""
      }
      else {
        return "app-bar-photo-thin.jpg"
      }
    }
  },
}
</script>

<style scoped>

.custom-menu-button:hover {
  background-color: rgba(196, 179, 173, .7)
 }

</style>

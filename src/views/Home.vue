<template>
  <div>
    <Navbar bar-transparent hide-bar-on-scroll></Navbar>
    <v-content class="pt-0">

      <v-parallax src="app-bar-photo-dark.jpg" height="700">
        <v-row align="center" justify="center">
          <v-col class="text-center white--text" cols="12">
            <img src="black_open_book.png" height="200" class="mb-10">
            <h1 class="white--text mb-2 display-1 text-center">Rozkmiń Biblię!</h1>
            <div class="subheading mb-4 text-center">Strona w budowie!</div>
            <v-btn outlined color="white" class="mt-12 custom-outlined" large>
              ...
              <v-icon right class="white--text">mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-parallax>

    </v-content>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  data() {
    return {
      pluses: [
        "Cytat rozkminianego fragmentu",
        "Wyjaśnienie kontekstu historycznego danego fragmentu",
        "Wyjaśnienie kontekstu kulturowego danego fragmentu",
        "Interpretacja fragmentu",
        "Tłumaczenie na język bliski współczesnemu czytelnikowi",
        "Wypowiedź nawiązującą do fragmentu w zdecydowanej większości",
        "Krótkie świadectwo",
        "Pytania do postawienia sobie",
        "Nawiązania do wypowiedzi świętych, teologów lub innych osób cieszących się poważaniem"
      ],
      minuses: [
        "Krytyką fragmentu",
        "Analizą języka fragmentu",
        "Szczegółową analizą tekstu niezrozumiałą dla zwykłego czytelnika",
        "Hejtem jakiejkolwiek religii, osoby czy zachowania",
        "Szydzeniem z religii, osób czy zachowań",
        "Wypowiedz w niewielkim stopniu nawiązującą do fragmentu",
        "Długim świadectwem, historią życia"
      ]
    }
  },
  components: { Navbar },
};
</script>

<style>
.custom-outlined {
  background-color: rgba(93, 64, 55, 0.8)
}

.v-parallax__content {
  padding: 0px !important;
}

</style>

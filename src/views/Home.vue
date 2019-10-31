<template>
  <div>
    <Navbar bar-transparent hide-bar-on-scroll></Navbar>
    <v-content class="pt-0">

      <v-parallax src="app-bar-photo-dark.jpg" height="700">
        <v-row align="center" justify="center">
          <v-col class="text-center white--text" cols="12">
            <img src="black_open_book.png" height="200" class="mb-10">
            <h1 class="white--text mb-2 display-1 text-center">Rozkmiń Biblię!</h1>
            <div class="subheading mb-4 text-center">Zbiór rozkmin Pisma Świętego w internecie, książkach i filmach!</div>
            <v-btn outlined color="white" class="mt-12 custom-outlined" large>
              Rozkmiń dzisiaj!
              <v-icon right class="white--text">mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-parallax>

      <section>
        <v-col class="my-12" align-center>
          <div class="text-center">
            <h2 class="headline">Jak zacząć rozkminiać?</h2>
            <span class="subheading">
              Zobacz jak zacząć przygodę z Rozkmiń Biblię!
            </span>
          </div>
        </v-col>

        <v-container grid-list-xl>
          <v-row wrap align-center>
            <v-flex xs12 md4>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large color="primary">mdi-magnify</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-center">Znajdź szukany fragment</div>
                </v-card-title>
                <v-card-text>
                  Rozkmiń Biblię pozwala Tobie na szybkie przeglądanie Biblii i wyszukiwanie interesujących Cię fragmentów. Możesz szukać w wielu różnych tłumaczeniach! Każda księga wyświetlana jest w całości na stronie i łatwo po niej nawigować.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large color="primary">mdi-cursor-default-click</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Zaznacz wersety</div>
                </v-card-title>
                <v-card-text>
                  Zaznacz jeden lub kilka wersetów, dłuższy fragment lub cały rozdział. Dodatkowe przyciski umożliwiają zaznaczenie jednego rozdziału lub fragmentu jednym kliknięciem.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card flat class="transparent">
                <v-card-text class="text-center">
                  <v-icon x-large color="primary">mdi-lightbulb-on</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-center">Rozkminiaj!</div>
                </v-card-title>
                <v-card-text>
                  Po wybraniu fragmentu przeglądaj rozkminy. Linki do artykułów w internecie, filmików a także odwołania do książek, w których znajdują się rozkminy, czyli analizy i przemyślenia dotyczące podanego fragmentu.
                </v-card-text>
              </v-card>
            </v-flex>
          </v-row>
        </v-container>

      </section>

      <v-parallax src="with-bible-bright.jpg" height="1200">
        <v-row align="center" justify="center">
          <v-col>
            <div class="text-center">
              <h2 class="display-1 text--primary">Chcesz pomóc?</h2>
              <span class="subheading text--primary">
                Natrafiłeś na rozkminę, której jeszcze nie ma w Rozkmiń Biblię? Dodaj ją sam!
              </span>
            </div>
          </v-col>
        </v-row>

        <!-- TODO zamien na for -->

        <v-row no-gutters justify="center" align="center">
          <v-spacer></v-spacer>
          <v-col class="px-sm-3" cols="12" sm="12" md="4">
            <v-card>
              <v-card-title primary-title class="justify-center">
                <div class="headline text-center">
                  <v-icon class="hidden-md-and-up" size="50" color="primary">mdi-youtube</v-icon>
                  Rozkmina w filmiku
                </div>
              </v-card-title>
              <v-card-text>
                Oglądałeś ostatnio w internecie konferencję lub zwykły komentarz do Ewangelii? A może jakiś youtuber nawiązał w swojej wypowiedzi do pewnego wersetu z Biblii?
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="px-3 hidden-sm-and-down" cols="12" md="3">
            <v-icon  size="100" color="primary">mdi-youtube</v-icon>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row no-gutters justify="center" align="center">
          <v-spacer></v-spacer>
          <v-col class="px-3 hidden-sm-and-down" align="right" cols="12" md="3">
            <v-icon size="100" color="primary">mdi-text-subject</v-icon>
          </v-col>
          <v-col class="px-sm-3" cols="12" sm="12" md="4">
            <v-card>
              <v-card-title primary-title class="justify-center">
                <div class="headline text-center">
                  <v-icon class="hidden-md-and-up" size="50" color="primary">mdi-text-subject</v-icon>
                  Rozkmina w artykule w internecie
                </div>
              </v-card-title>
              <v-card-text>
                Czytałeś ostatnio dobry artykuł w internecie, który wyjaśniał jakąś kwestę związaną z Pismem Świętym lub je zacytował? Może zmusił Cię do myślenia czy rozjaśnił sprawę, która wcześniej nie dawała spokoju?
              </v-card-text>
            </v-card>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row no-gutters justify="center" align="center">
          <v-spacer></v-spacer>
          <v-col class="px-sm-3" cols="12" sm="12" md="4">
            <v-card>
              <v-card-title primary-title class="justify-center">
                <div class="headline text-center">
                  <v-icon class="hidden-md-and-up" size="50" color="primary">mdi-book-open</v-icon>
                  Rozkmina w książce
                </div>
              </v-card-title>
              <v-card-text>
                Czytasz właśnie jakąś religijną książkę? Autor na pewno nieraz odwołuje się do Biblii! Poruszył Cię cały rozdział lub chociażby jedno zdanie?
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="px-3 hidden-sm-and-down" cols="12" md="3">
            <v-icon size="100" color="primary">mdi-book-open</v-icon>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row no-gutters justify="center" align="center">
          <v-spacer></v-spacer>
          <v-col class="px-3 hidden-sm-and-down" align="right" cols="12" md="3">
            <v-icon size="100" color="primary">mdi-movie-open</v-icon>
          </v-col>
          <v-col class="px-sm-3" cols="12" sm="12" md="4">
            <v-card>
              <v-card-title primary-title class="justify-center">
                <div class="headline text-center">
                  <v-icon size="50" class="hidden-md-and-up" color="primary">mdi-movie-open</v-icon>
                  Rozkmina w filmie
                </div>
              </v-card-title>
              <v-card-text>
                Oglądaliście ze znajomymi lub z rodziną wartościowy film? Może zgłębił jakąś trudną sprawę i został w Twojej pamięci na bardzo długo?
              </v-card-text>
            </v-card>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

        <v-row no-gutters justify="center" align="center">
          <v-spacer></v-spacer>
          <v-col class="px-sm-3" cols="12" sm="12" md="4">
            <v-card>
              <v-card-title primary-title class="justify-center">
                <div class="headline text-center">
                  <v-icon size="50" class="hidden-md-and-up" color="primary">mdi-ear-hearing</v-icon>
                  Zasłyszana rozkmina
                </div>
              </v-card-title>
              <v-card-text>
                Usłyszałeś od znajomego ciekawą interpretację Biblii? A może ksiądz na kazaniu czymś Cię zaskoczył? Może koleżanka zmieniła Twoje spojrzenie na jakiś fragment?
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="px-3 hidden-sm-and-down" cols="12" md="3">
            <v-icon size="100" color="primary">mdi-ear-hearing</v-icon>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>

      </v-parallax>


      <section>
        <v-row align="center" justify="center">
          <v-col class="my-12" cols="12" sm="12" md="4">
            <div class="text-center">
              <h2 class="display-1 text--primary">Co to jest ta "rozkmina"?</h2>
              <h3 class="subheading text--primary mt-10">
                Rozkmina to inaczej analiza, przemyślenia, dociekania, rozważanie lub refleksja nad pewną sprawą. W przypadku Pisma Świętego analiza dotyczy wybranego, konkretnego fragmentu Biblii.
              </h3>
            </div>
          </v-col>
        </v-row>


        <!--  TODO - nie obcinaj końcówek,  -->

        <v-container grid-list-xl>
          <v-row wrap align-center>
            <v-flex xs12 md6>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Co charakteryzuje rozkminę biblijną?</div>
                </v-card-title>
                <v-card-text>
                  <v-list>
                    <v-list-item v-for="plus in pluses">
                      <v-list-item-icon>
                        <v-icon large color="green">mdi-plus</v-icon>
                        <v-list-item-title>{{plus}}</v-list-item-title>
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex xs12 md6>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Czym NIE jest rozkmina biblijna?</div>
                </v-card-title>
                <v-card-text>
                  <v-list>
                    <v-list-item v-for="minus in minuses">
                      <v-list-item-icon>
                        <v-icon large color="red">mdi-minus</v-icon>
                        <v-list-item-title>{{minus}}</v-list-item-title>
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-row>
        </v-container>

      </section>

      <v-parallax src="art-blur-christ.jpg" height="700">
        <v-row align="center" justify="center">
          <v-col class="text-center white--text" cols="12">
            <h1 class="white--text mb-2 display-1 text-center">Jak dodać swoją rozkminę?</h1>
            <div class="subheading mb-4 text-center">Jeśli chcesz dodać rozkminę wykonaj następujące kroki:</div>
            <v-btn outlined color="white" class="mt-12 custom-outlined" large>
              TODO
              <v-icon right class="white--text">mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-parallax>

      <section>
        <v-col class="my-12" align-center>
          <div class="text-center">
            <h2 class="headline">Rozkminy znanych osób i portali</h2>
            <span class="subheading">
              TODO
            </span>
          </div>
        </v-col>
      </section>




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

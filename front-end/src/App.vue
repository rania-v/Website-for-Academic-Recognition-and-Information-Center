<template>
  <v-app>
    <v-app-bar app :color=base_color dark height="120px">
      <v-row>
        <v-col cols="3" align-self="center">
          <router-link to="/">
            <v-img v-bind:src=logo ></v-img>
          </router-link>
        </v-col>
        <v-col>
          <v-row>
          <v-spacer></v-spacer>
            <v-col cols="6" align-self="center" align="center">
              <v-btn rounded small class="grey lighten-1 ma-2">Sign Up</v-btn>
              <v-btn rounded small class="ma-2">Sign IN</v-btn>
            </v-col>
            <v-col align-self="center" align="center">
              <v-btn rounded x-small :text="eng" depressed :class="{'ma-2 deep-orange': !eng}" v-on:click="eng=false">Ελληνικά</v-btn>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col align-self="center" align="center">
              <v-btn rounded x-small :text="!eng" depressed :class="{'ma-2 deep-orange': eng}" v-on:click="eng=true">English</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col  class="ma-0 pa-0 cyan">
              <v-tabs  class="cyan ma-0 pb-0 white--text">
                <v-tabs-slider color="cyan darken-3"></v-tabs-slider>
                  <v-tab v-for="item in Sections" :key="item.route" class="cyan" :to="item.route">{{item.name}}</v-tab>
              </v-tabs>
            </v-col>
          </v-row>
        </v-col>
          
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: function(){
    return {
      logo: require("./assets/logo_doatap.png"),
      base_color: "cyan",
      eng: false,
    Sections: [ {name: "Αρχική", route: "/"},
                {name: "Αναγνώριση", route: "/Anagnwrish"},
                { name: "Αίτηση", route: "/Aithsh"},
                { name: "Ενημέρωση", route: "/Enhmerwsh"},
                { name: "Επικοινωνία", route: "/Epikoinwnia"}]
    }
  }
};
</script>

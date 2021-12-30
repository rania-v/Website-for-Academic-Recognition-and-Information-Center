<template>
  <v-app>
    <v-app-bar app :color=base_color dark height="100px">
      <v-row>
        <v-col cols="3" align-self="center">
          <router-link to="/">
            <v-img v-bind:src=logo ></v-img>
          </router-link>
        </v-col>
        <v-col>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="8" align-self="center" align="right">
              <v-btn rounded small class="grey lighten-1 ma-2" v-on:click="sign_up = true">Sign Up</v-btn>
              <v-btn rounded small class="ma-2" v-on:click="sign_in = true">Sign In</v-btn>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="2" align-self="center" align="center">
              <v-btn rounded x-small :text="eng" depressed :class="{'ma-0 blue lighten-2': !eng}" v-on:click="eng=false">Ελληνικά</v-btn>
              <v-btn rounded x-small :text="!eng" depressed :class="{'ma-0 blue lighten-2': eng}" v-on:click="eng=true">English</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col  class="ma-0 pa-0">
              <v-tabs height="30px" class="indigo  ma-0 pb-0 white--text">
                <v-tabs-slider color="indigo darken-3"></v-tabs-slider>
                  <v-tab v-for="item in Sections" :key="item.route" class="indigo darken-2" :to="item.route">{{item.name}}</v-tab>
              </v-tabs>
            </v-col>
          </v-row>
        </v-col>
          
      </v-row>
    </v-app-bar>

    <v-main>
          <!-- <v-parallax src="./assets/back.jpg" height="auto"> -->
      <v-dialog width="50%" v-model="sign_in">
        <SignIn />
      </v-dialog>
      <v-dialog width="50%" v-model="sign_up">
        <SignUp/>
      </v-dialog>
      <router-view/>
<!-- </v-parallax> -->
    </v-main>
  </v-app>
</template>

<script>

import SignIn from "./components/SignIn.vue"
import SignUp from "./components/SignUp.vue"

export default {
  name: 'App',
  components: {
    SignIn,
    SignUp
  },
  data: function(){
    return {
      sign_in: false,
      sign_up: false,
      logo: require("./assets/logo_doatap.png"),
      base_color: "indigo darken-2",
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

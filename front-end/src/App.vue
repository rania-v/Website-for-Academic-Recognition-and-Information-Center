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
              <v-div v-if="!connected">
                <v-btn rounded x-small text class="purple lighten-2 ma-2" v-on:click="sign_up = true">Δημιουργία Λογαρισμού</v-btn>
                <v-btn rounded small class="ma-2 purple darken-2" v-on:click="sign_in = true">Σύνδεση</v-btn>
              </v-div>
              <div v-if="connected">
                <router-link to="/user-profile/personal-info" class="white--text" style="text-decoration: none;">
                  <v-icon small class="mr-2">fas fa-user</v-icon>
                  User Name
                </router-link>
                <v-menu bottom left offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn dark icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item link to="/user-profile/personal-info">Προσωπικά Στοιχεία</v-list-item>
                    <v-list-item link to="oi-aithseis-mou">Λογαριασαμός</v-list-item>
                    <v-list-item link to="ta-dikaiologhtika-mou">Τα Δικαιολογητικά μου</v-list-item>
                    <v-list-item link to="logariasmos">Οι Αιτήσεις μου</v-list-item>
                    <v-list-item link @click="log_off=true" class="red--text text--darken-2">Αποσύνδεση</v-list-item>
                  </v-list>
                </v-menu>
              </div>
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
                <v-tabs-slider color="lime"></v-tabs-slider>
                  <v-tab v-for="item in Sections" :key="item.route" class="indigo darken-2" :to="item.route">{{item.name}}</v-tab>
              </v-tabs>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-dialog v-model="log_off" width="40%">
        <v-card>
          <v-card-title class="red--text text--darken-2">Αποσύνδεση</v-card-title>
          <v-card-text>
            Είστε σίγουροι ότι θέλετε να αποσυνδεθείτε από τον λογαρισμό σας?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="red darken-2 white--text" @click="connected=false">Αποσύνδεση</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
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

<style>
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(58, 56, 155);
  border-radius: 10px;
}
</style>

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
      log_off: false,
      usr_menu: false,
      connected: true,
      sign_in: false,
      sign_up: false,
      logo: require("./assets/logo_doatap.png"),
      base_color: "indigo darken-2",
      eng: false,
      Sections: [ 
        {name: "Αρχική", route: "/"},
        {name: "Αναγνώριση", route: "/Anagnwrish"},
        { name: "Αίτηση", route: "/Aithsh"},
        { name: "Ενημέρωση", route: "/Enhmerwsh"},
        {name: "FAQ", route: "/FAQ"},
        { name: "Επικοινωνία", route: "/Epikoinwnia"}
      ],

    }
  }
};
</script>

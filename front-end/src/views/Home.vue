<template>
  <v-container fluid>
    <v-container fluid class="d-flex" max-height="20%">
      <v-row>
        <v-col cols="3">
          <v-card height="100%" class="pa-3 d-flex align-center rounded-xl" flat color="indigo lighten-1" dark>
            <v-col>
              <v-select :items='items' v-model="item_country" item-text="country" label="Χώρα"></v-select>
              <v-select :items='items' v-model="item_country" item-text="country" label="Πόλη"></v-select>
              <v-select :items='items.uni' item-text="item_country.uni" label="Πανεπιστήμιο"></v-select>
              <v-select :items='items.degree' label="Τίτλος Σπουδών"></v-select>
              <v-col class="d-flex justify-center">
                <v-btn outlined rounded style="height:auto;">
                  <span class="text-wrap" style="width: min-content; margin: auto;">
                    Δες Αν Αναγνωρίζεται το Πτυχίο σου!
                  </span>
                </v-btn>
              </v-col>
              <v-img  height="20%" contain src="../assets/grad_or.svg"></v-img>
              <!-- <v-img height="20%" contain src="../assets/scholarship.png"></v-img> -->
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card height="100%" class="d-flex align-center rounded-xl" flat color="indigo lighten-1" dark>
            <v-col>
              <v-card-title style="font-family:sans-serif; word-break: break-word;">Δες αν μπορείς να εκδώσεις πιστοποιητικό αναγνώρισης ή επαλήθευσης γνησιότητας αυτόματα χωρίς να κάνεις Αίτηση!</v-card-title>
                    <v-divider></v-divider>
              <v-col class="d-flex justify-center">
                <v-btn outlined rounded>Έλεγχος</v-btn>
              </v-col>
              <v-img height="auto" contain src="../assets/cert_b.svg"></v-img>
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="6" width="auto" class="d-flex justify-center">
            <v-parallax src="../assets/back.jpg">
            <!-- <v-col > -->
              <v-card-actions class="pa-0 ma-0" width="100%">
                <v-spacer></v-spacer>
                <v-card-text v-if="signup" class="white--text text-right">
                  Δεν έχεις λογαριασμό?
                </v-card-text>
                <v-card-text v-if="signin" class="white--text text-right">
                  Είσαι ήδη εγγεγραμμένος χρήστης?
                </v-card-text>
                <v-btn v-if="signup" @click="signin=true, signup=false" text rounded dark small color="indigo darken-4">Δημιουργία λογαριασμού</v-btn>
                <v-btn v-if="signin" @click="signin=false, signup=true" text rounded dark small color="indigo darken-4">Σύνδεση σε λογαριασμό</v-btn>
              </v-card-actions>
              <!-- <v-card-text  class="pt-0"> -->
                <SignUp :signin="signin" v-if="signin"/>
                <SignIn :signup="signup" v-if="signup"/>
              <!-- </v-card-text> -->
            <!-- </v-col> -->
            </v-parallax>
        </v-col>
      </v-row>
    </v-container>

    <!-- --------------2 options------------------- -->
    
    <v-card class="pl-3 pr-3" flat color="indigo lighten-1" dark>
      <v-card-text>
        <v-row>
          <v-col>
            <v-select :items='items' v-model="item_country" item-text="country" label="Χώρα-Πόλη"></v-select>
          </v-col>
          <v-col>
            <v-select :items='items.uni' item-text="item_country.uni" label="Πανεπιστήμιο"></v-select>
          </v-col>
          <v-col>
            <v-select :items='items.degree' label="Τίτλος Σπουδών"></v-select>
          </v-col>
          <v-col align-self="center" class="d-flex justify-center">
            <v-btn outlined rounded>Δες Αν Αναγνωρίζεται το Πτυχίο σου!</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="8">
          <v-card-title style="font-family:sans-serif; word-break: break-word;">Δες αν μπορείς να εκδώσεις πσιτοποιητικό αναγνώρισης ή επαλήθευσης γνησιότητας αυτόματα χωρίς να κάνεις Αίτηση!</v-card-title>
        </v-col>
        <v-col align-self="center" class="d-flex justify-center">
          <v-btn outlined rounded>Έλεγχος</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>

import SignIn from "../components/SignIn.vue"
import SignUp from "../components/SignUp.vue"

  export default {
    name: 'Home',
      components: {
    SignIn,
    SignUp
  },
    data : function(){
      return{
        signin:false,
        signup:true,
        item_country: null,
        items: [
          {country: 'A', city:"Ac", uni:["Au", "Au2"], degree:"Ad"},
          {country: "B", city:"Bc", uni:["Bu", "Bu2"], degree:"Bd"}
        ]
      }
    }
  }
</script>

<template>
  <v-container>
    <v-card class="pl-3 pr-3" flat color="cyan" dark>
      <v-select :items='country'></v-select>
      <v-card-title>Δες Αν Αναγνωρίζεται το Πτυχίο σου!</v-card-title>
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

  export default {
    name: 'Home',
    data : function(){
      return{
        country: {
          
        }
      }
    }
  }
</script>

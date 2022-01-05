<template>
<v-container fluid>

    <v-card elevation="15" fluid>
        <v-card-title class="indigo--text justify-center">Σύνδεση</v-card-title>
        <v-card-text class="text-center">
            όλα τα παρακάτω στοιχεία είναι απαραίτητα  
            <v-form v-model="valid" ref="form">
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-text-field :color="color" v-model="first_name" label="e-mail" :rules="required_rule" required></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-text-field :color="color" v-model="mail" label="Κωδικός" :rules="required_rule" required validate-on-blur></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>
            </v-form>
            <!-- <v-row>
            <v-spacer></v-spacer>
                <v-col cols="8" align="center">
                    Δεν έχεις λογαρισμό?
                    <v-btn class="indigo--text" dark text @click="$emit('signin' ,true)" small>Δημιουργία Λογαρισμού</v-btn>
                </v-col>
            <v-spacer></v-spacer>
            </v-row> -->
        </v-card-text>
        <v-card-actions>
            <!-- <v-spacer></v-spacer> -->
            <v-btn class="indigo--text" dark text @click="reset">Clear</v-btn>
            <v-spacer></v-spacer>
            <!-- <v-btn :class="color" dark depressed  @click="validate">Sign In</v-btn> -->
            <v-btn :class="color" dark depressed  to="/user-profile">Sign In</v-btn>
        </v-card-actions>
    </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'SignIn',
    props: ['signin'],
    data : function(){
      return{
        color: 'indigo',
        valid:true,
        picker: false,
        first_name: null,
        last_name: null,
        mail: null,
        birthdate: null,
        items_gender: ['Άντρας', 'Γυναίκα', 'Άλλο'],
        gender: null,
        show_pass1: false,
        show_pass2: false,
        password: null,
        conf_pass: null,
        emailRules: [
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        required_rule: [
            v => !!v || 'Απαραίτητο πεδίο',
        ],
        mail_rules: [
            v => !!v || 'Απαραίτητο πεδίο',

        ],
        conf_mail: [
            v => !!v || 'Απαραίτητο πεδίο',
            this.conf_pass == this.password
        ]
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset() {
          this.$refs.form.reset()

      }
    }
}
</script>

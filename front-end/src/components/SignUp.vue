<template>
    <v-card elevation="15">
        <v-card-title class="indigo--text justify-center">Δημιουργία Λογαρισμού</v-card-title>
        <v-card-text class="text-center pb-0">
            όλα τα παρακάτω στοιχεία είναι απαραίτητα
            <v-form v-model="valid" ref="form" id="reg-form" @submit="registerUser()" >
                <v-row class="ma-0">
                    <v-col>
                        <v-text-field dense :color="color" v-model="first_name" label="Όνομα" :rules="required_rule" required></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field dense :color="color" v-model="last_name" label="Επώνυμο" :rules="required_rule" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="ma-0">
                    <v-col>
                        <v-text-field dense :color="color" v-model="mail" label="e-mail" :rules="emailRules" required validate-on-blur></v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="center" class="ma-0">
                    <v-col>
                        <v-text-field dense :color="color" v-model="birthdate" readonly persistent-hint hint="Επιλέξτε πρώτα χρονολογία, μετά μήνα και τέλος ημέρα γέννησης" label="Ημερομηνία Γέννησης" v-on:click="picker=true"></v-text-field>
                    </v-col>
                    <v-dialog v-model="picker" width="25%">
                        <v-date-picker v-model="birthdate" min="1950-01-01" max="2020-01-01"></v-date-picker>
                    </v-dialog>
                    <v-col>
                        <v-select dense :color="color" v-model="gender" :items="items_gender" label="Φύλο"></v-select>
                    </v-col>
                </v-row>
                <v-row class="ma-0">
                    <v-col>
                        <v-text-field dense :color="color" label="Κωδικός"  :rules="required_rule" required v-model="password" :type="show_pass1 ? 'text' : 'password'" :append-icon="show_pass1 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show_pass1=!show_pass1"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field dense :color="color" v-model="conf_pass" label="Επιβεβαίωση Κωδικού" :rules="conf_mail" required :type="show_pass2 ? 'text' : 'password'" :append-icon="show_pass2 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show_pass2=!show_pass2"></v-text-field>
                    </v-col>
                </v-row>
            </v-form>
            <!-- <v-row>
            <v-spacer></v-spacer>
                <v-col cols="8" align="center">
                    Έχεις ήδη λογαρισμό?
                    <v-btn class="indigo--text" dark text @click="reset" small>Σύνδεση</v-btn>
                </v-col>
            <v-spacer></v-spacer>
            </v-row> -->
        </v-card-text>
        <v-card-actions class="ma-0 pt-0">
            <!-- <v-spacer></v-spacer> -->
            <v-btn class="indigo--text" dark text @click="reset">Clear</v-btn>
            <v-spacer></v-spacer>
            <v-btn :class="color" dark depressed  @click="validate">Sign In</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'SignUp',
    data : function(){
      return{
        color: 'indigo',
        valid:true,
        first_name: null,
        last_name:null,
        mail: null,
        birthdate: null,
        show_pass1: false,
        show_pass2: false,
        password: null,
        conf_pass: null,
        required_rule: [
            v => !!v || 'Απαραίτητο πεδίο',
        ],
      }
    },
    methods: {
        validate () {
            this.$refs.form.validate()
            // this.$refs.form.submit()
        },
        reset() {
            this.$refs.form.reset()

        },
        async registerUser(event) {
            const mail = this.mail.value
            const password = this.password.value
            event.preventDefault()
            const result = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                boody: JSON.stringify({
                    mail,
                    password
                })
            }).then(res => res.json())
            this.first_name = 'OK'
            console.log(result)
        }
    },
    
}
</script>
<template>
<v-container>

    <v-card elevation="15" v-if="!created">
        <v-card-title class="indigo--text justify-center">Δημιουργία Λογαρισμού</v-card-title>
        <v-card-text class="text-center pb-0">
            όλα τα παρακάτω στοιχεία είναι απαραίτητα
            <v-form v-model="valid" ref="form" id="reg-form" >
                <v-row class="ma-0" width="100%">
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
                    <v-text-field  label="Ημερομηνία Γέννησης" type="date" format="DD/MM/YYYY"></v-text-field>
                        <!-- <v-text-field dense :color="color" v-model="birthdate"  :rules="required_rule" readonly persistent-hint hint="Επιλέξτε πρώτα χρονολογία, μετά μήνα και τέλος ημέρα γέννησης" label="Ημερομηνία Γέννησης" v-on:click="picker=true"></v-text-field> -->
                    </v-col>
                    <!-- <v-dialog v-model="picker" width="25%">
                        <v-date-picker v-model="birthdate" min="1950-01-01" max="2020-01-01"></v-date-picker>
                    </v-dialog> -->
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
            {{valid}}
            <v-btn :class="color" depressed  v-on:click="registerUser" :disabled="!valid" >Sign Un</v-btn>
        </v-card-actions>
    </v-card>
    <v-alert v-if="created" type="success">
        Νέος Χρήστης Δημιουργήθηκε με επιτυχία
    </v-alert>
</v-container>
</template>

<script>
import UserServices from '../UserService'

export default {
    name: 'SignUp',
    data : function(){
      return{
          created: false,
        color: 'indigo',
        valid: false,
        first_name: '',
        last_name:'',
        mail: '',
        birthdate: '',
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
        reset() {
            this.$refs.form.reset()

        },
        async registerUser() {
            // if( this.conf_pass == '' || this.first_name=='' || this.last_name=='' || this.mail=='' || this.birthdate=='') {
            //     this.valid = false;
            //     return 
            // }else if(this.password != this.conf_pass) {
            //     this.valid = false;
            //     return
            // } else {
                try {
                    await UserServices.createUser(this.last_name, this.password, this.mail);
                    this.created = true;
                }catch(err) {
                    this.error = err.message;
                }
            // }
            this.conf_pass=''
            this.first_name=''
            this.valid=false;
        },      
    },
    
}
</script>
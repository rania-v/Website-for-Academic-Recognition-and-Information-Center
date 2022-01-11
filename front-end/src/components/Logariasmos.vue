<template>
    <v-container fluid>
        <v-card flat>
            <v-card-title class="indigo--text">Λογαριασμός</v-card-title>
            <v-card-text class="mt-5">
                <v-row>
                    <v-col cols="6">
                        <strong>E-mail</strong>
                        <v-text-field dense v-model="usr.mail"></v-text-field>
                    </v-col>
                    <v-col cols="4" class="d-flex align-center">
                        <v-btn v-if="!ch_mail" @click="ch_mail=true" small outlined color="blue darken-2" min-width="100%">Αλλαγή e-mail</v-btn>
                        <v-btn v-if="ch_mail" small elevation="0" color="green darken-2 white--text" min-width="100%" @click="ch_mail=false, save_mail=true">Αποθήκευση νέου Κωδικού</v-btn>
                    </v-col>
                    <v-alert v-if="save_mail" type="success" class=" text--darken-2" dense text>
                        Το e-mail άλλαξε επιτυχώς
                    </v-alert>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <strong>Κωδικός</strong>
                        <v-text-field v-if="!ch_pass" dense v-model="usr.password" type="password"></v-text-field>
                        <div v-if="ch_pass">
                            <v-text-field dense v-model="new_pass" type="password" label="Νέος Κωδικός"></v-text-field>
                            <v-text-field dense v-model="ps_conf" :rules="[ps_conf == new_pass]" type="password" label="Επιβεβαίωση Κωδικόυ"></v-text-field>
                        </div>
                    </v-col>
                    <v-col cols="4"  class="d-flex align-center">
                        <v-btn v-if="!ch_pass" small outlined color="blue darken-2" min-width="100%" @click="ch_pass=true">Αλλαγή Κωδικού</v-btn>
                        <v-btn v-if="ch_pass" small elevation="0" color="green darken-2 white--text" min-width="100%" @click="ch_pass=false, save_pass=true">Αποθήκευση νέου Κωδικού</v-btn>
                    </v-col>
                    <v-alert v-if="save_pass && !ch_pass" type="success" class=" text--darken-2" dense text>
                        Ο κωδικός πρόσβασης άλλαξε επιτυχώς
                    </v-alert>
                </v-row>
                <v-row>
                    <v-divider></v-divider>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-subtitle><strong> Ειδοποιήσεις</strong></v-subtitle>
                        <v-checkbox dense label="Επιθυμώ να λαμβάνω ειδοποιήσεις με SMS"/>
                        <v-checkbox dense label="Επιθυμώ να λαμβάνω ειδοποιήσεις με e-mail"/>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>

export default ({
    name: 'Logariasmos',
    data: function() {
        return {
            ch_mail: false,
            save_pass: false,
            new_pas: null,
            np_conf: null,
            ch_pass: false,
            usr: {
                mail: 'mplampla@eam.com',
                password: '12345678'
            }
        }
    },
})
</script>

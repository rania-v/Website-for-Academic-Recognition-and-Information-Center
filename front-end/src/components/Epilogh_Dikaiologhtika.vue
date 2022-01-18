<template>
    <v-container>
        <v-row>
            <v-spacer></v-spacer>
            <v-col>
                <v-card-subtitle class="indigo--text">Γενικά Έγγραφα</v-card-subtitle>
            </v-col>
            <v-col cols="2">
                <v-card-subtitle class="ma-0 pa-0">Επιλογή από τα 'Δικαιολογητικά Μου'</v-card-subtitle>
            </v-col>
        </v-row>
        <v-row v-for="i in gen_dik" :key="i">
            <v-col cols="10">
                <v-file-input :label="i.name"></v-file-input>
            </v-col>
            <v-col cols="2" class="d-flex">
            <v-spacer></v-spacer>
                <v-btn class="indigo white--text" fab x-small><v-icon x-small>fas fa-plus</v-icon> </v-btn> 
            <v-spacer></v-spacer>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card-subtitle class="indigo--text">Έγγραφα Βασικού Πτυχίου</v-card-subtitle>
                <v-file-input label="Βασικό Πτυχίο"></v-file-input>
                <v-file-input label="Μεταπτυχιακό"></v-file-input>
                <v-file-input label="Πιστοποίηση Πανεπιστημίου"></v-file-input>
            </v-col>
            <v-col>
            <v-card-subtitle class="indigo--text">Έγγραφα Μεταπτυχιακού</v-card-subtitle>
            <v-file-input label="Εργασία Μεταπτυχιακού"></v-file-input>
            <v-file-input label="Πιστοποίηση Μαθημάτων"></v-file-input>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default ({
    name: 'EpiloghDik',
    data: function() {
        return {
            gen_dik: [
                {name:'Παράβολο', selected: false},
                {name:'Ταυτότητα / Διαβατήριο', selected: false},
                {name:'Υπεύθυνση Δήλωση', selected: false},
                {name:'Έντυπο Συγκατάθεσης', selected: false},
            ]
        }
    },
})
</script>

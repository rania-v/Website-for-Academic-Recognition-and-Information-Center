<template>
    <v-container fluid>
        <!-- <v-card color="red" fluid> -->
        <!-- </v-card> -->
        <v-card-text class="pa-0">
            <strong class="indigo--text">
                {{err[err_id].text}}
            </strong>
            <div v-if="err_id==0">
                <v-list>
                    <v-list-item v-for="i in err[err_id].dik" :key="i.name">
                        <v-list-item-content>
                            <v-list-item-title class="d-flex">
                                {{i.name}}
                                <v-spacer></v-spacer>
                                <v-btn x-small @click="i.add_dik=true" text color="blue darken-2" v-if="!i.add_dik">Προσθήκη</v-btn>
                                <!-- <v-btn x-small @click="i.add_dik=true" text color="blue darken-2" v-if="i.add_dik">Υποβολή</v-btn> -->
                            </v-list-item-title>
                            <v-file-input dense v-if="i.add_dik" :label="i.name"></v-file-input>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </div>
            <div v-if="err_id==1">
                <v-card-subtitle>Επιλέξτε νέο αρχείο/δικαιολογητικό για να υποβάλετε εκ νέου</v-card-subtitle>
                <v-list>
                    <v-list-item v-for="i in err[err_id].dik" :key="i.name">
                        <v-list-item-content>
                            <v-list-item-title class="d-flex">
                                {{i.name}}
                                <v-spacer></v-spacer>
                                <v-btn x-small @click="i.add_dik=true" text color="blue darken-2" v-if="!i.add_dik">Προσθήκη</v-btn>
                                <!-- <v-btn x-small @click="i.add_dik=true" text color="blue darken-2" v-if="i.add_dik">Υποβολή</v-btn> -->
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{i.dik_commnet}}
                            </v-list-item-subtitle>
                            <v-file-input v-if="i.add_dik" :label="i.name"></v-file-input>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </div>
            <div v-if="err_id==2">
                <v-card-subtitle>Προτεινόμενα Μαθήματα με αντιστοιχία</v-card-subtitle>
                
            </div>


            <div v-if="err_id==7">
                <v-card-subtitle>
                    Δεν υπάρχει δυνατότητα επανυποβολής της αίτησης<br>
                    Αν επιθυμείτε μπορείτε να υποβάλετε νέα αίτηση
                </v-card-subtitle>  
            </div>
        </v-card-text>
    </v-container>
</template>

<script>

export default ({
    name: 'RejectionReasons',
    props:[
        'err_id'
    ],
    data: function() {
        return {
            err: [
                {no: 0, text: 'Από την υποβεβλημένη αίτηση λέιπουν τα παρακάτω δικαιολογητικά', comments: 'lalala',
                    dik: [
                       { name:"Δικαιολογητικό 1", add_dik: false},
                       { name:"Δικαιολογητικό 2", add_dik: false},
                       { name:"Δικαιολογητικό 3", add_dik: false},
                    ]
                },
                {no: 1, text: 'Υποβλήθηκε λάθος δικαιολογητικο', comments: '',
                    dik: [
                        { name:"Δικαιολογητικό 1", add_dik: false, dik_commnet: 'Θολή Φωτογραφία'},
                        { name:"Δικαιολογητικό 2", add_dik: false, dik_commnet: 'Λάθος αρχείο'},
                        { name:"Δικαιολογητικό 3", add_dik: false, dik_commnet: 'Θολή Φωτογραφία'},
                        ]
                },
                {no: 2, text: '', comments: 'lalala'},
                {no: 3, text: '', comments: 'lalala'},
                {no: 4, text: '', comments: 'lalala'},
                {no: 5, text: '', comments: 'lalala'},
                {no: 6, text: '', comments: 'lalala'},
                {no: 7, text: '', comments: 'lalala'},
            ]
        }
    },
})
</script>

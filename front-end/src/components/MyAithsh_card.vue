<template>
    <v-container  v-on:click="open=true">
        <v-card-title style="word-break:break-word;" class="font-weight-thin">Αίτηση {{appl.id}}</v-card-title>
        <v-card-subtitle :class="appl.status=='Εγκρίθηκε'?'green--text text--darken-3' : 'red--text text--darken-3'">
            <v-icon v-if="appl.status=='Εγκρίθηκε'" color="green darken-3" small>far fa-check-circle</v-icon>
            <v-icon v-if="appl.status=='Απορρίφθηκε'" color="red darken-3" small>far fa-times-circle</v-icon>
            <strong> {{appl.status}} </strong>
        </v-card-subtitle>
    <v-dialog v-model="open" width="50%">
       <v-card>
            <v-card-title>Αίτηση {{appl.id}}</v-card-title>
            <v-card-text>
                {{appl.status}} <br>
                <v-timeline align-top dense>
                    <v-timeline-item :icon="i.icon" small fill-dot color="indigo lighten-2" v-for="i in appl.history" :key="i.id" style="font-size: 80%" class="align-center">
                        <v-row>
                            <v-col><strong>{{i.status}} </strong> </v-col>
                            <v-col> {{i.date}}</v-col>
                        </v-row>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
            <v-card-actions v-if="appl.status=='Εγκρίθηκε'">
                <v-spacer></v-spacer>
                Κατεβάστε το αρχείο της έγκρισης
                <v-btn fab class="ma-2" small color="green"><v-icon small color="white">fas fa-file-download</v-icon> </v-btn>
            </v-card-actions>
            <v-card-text v-if="appl.status!='Εγκρίθηκε'">
                Λόγοι Απόρριψης
                <v-row>
                    <v-col>
                        <v-list>
                            <v-list-item v-for="i in rejection_reasons" :key="i.id" class="mt-0 mb-0" dense style="font-size: 80%" link v-on:click="selected=i.id">
                                {{i.name}}
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col>
                        {{selected}}

                        <RejectionReasons :err_id="selected"/>
                    </v-col>
                </v-row>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue white--text" :disabled="!resubmit">Επανυποβολή</v-btn>
                </v-card-actions>
            </v-card-text>
        </v-card>
    </v-dialog>
    </v-container>
</template>

<script>

import RejectionReasons from '../components/Rejection_reasons.vue'

export default ({
    name: 'MyAithsh_Card',
    components: [
        RejectionReasons,
    ],
    props: [
       'appl'
    ],
    data: function() {
        return {
            selected: 0,
            resubmit: false,
            open: false,
            rejection_reasons: [
               {id:'0', name:'Ελλειπής αριθμός δικαιολογητικών', route: '/user-profile/oi-aithseis-mou/rejection'},
               {id:'1', name:'Λάθος δικαιολογητικό', route: '/user-profile/oi-aithseis-mou/rejection'},
               {id:'2', name:'Δεν υπάρχει αντιστοιχία μαθημάτων'},
               {id:'3', name:'Έλλειψη εκαπιδευτικών μονάδων'},
               {id:'4', name:'Μη αντιστοιχία Πανεπιστημιακών τμημάτων'},
               {id:'5', name:'Μη αναγνωρίσιμο ίδρυμα'},
               {id:'6', name:'Μη αντιστοιχία προσωπικών δεδομένων'},
               {id:'7', name:'Εκπρόθεσμη υποβολή αίτησης επανεξέτασης'},
           ],

        }
    },
})
</script>

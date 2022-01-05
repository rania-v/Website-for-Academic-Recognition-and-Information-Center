<template>
    <v-container fluid>
        <v-card flat>
            <v-card-title class="indigo--text">Οι Αιτήσεις μου
                <v-spacer></v-spacer>
                <v-btn fab color="indigo" class="white--text" small><v-icon small>mdi-pencil</v-icon></v-btn>
            </v-card-title>
            <v-tabs grow color="indigo">
                <v-tab v-for="i in tabs" :key="i">{{i}}</v-tab>
            </v-tabs>
            <v-card-text>
                <v-row>
                    <v-col v-for="n in appl" :key="n" class="d-flex child-flex" cols="4">
                        <v-card v-on:click="open_application=true, selected = n">
                            <MyAithshCard :id="n.id" :status="n.status"/>
                        </v-card>
                    </v-col>
                </v-row>
            <v-dialog v-model="open_application" v-if="selected!=null" width="50%">
                <v-card>
                    <v-card-title>Αίτηση {{selected.id}}</v-card-title>
                    <!-- <v-card-subtitle>{{selected.status}}</v-card-subtitle> -->
                    <v-card-text>
                        {{selected.status}} <br>
                        <v-timeline align-top dense>
                            <v-timeline-item :icon="i.icon" small fill-dot color="indigo lighten-2" v-for="i in selected.history" :key="i.id" style="font-size: 80%" class="align-center">
                                <v-row>
                                    <v-col><strong>{{i.status}} </strong> </v-col>
                                    <v-col> {{i.date}}</v-col>
                                </v-row>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                    <v-card-actions v-if="selected.status=='Εγκρίθηκε'">
                        <v-spacer></v-spacer>
                        Κατεβάστε το αρχείο της έγκρισης
                        <v-btn fab class="ma-2" small color="green"><v-icon small color="white">fas fa-file-download</v-icon> </v-btn>
                    </v-card-actions>
                    <v-card-text v-if="selected.status!='Εγκρίθηκε'">
                        Λόγοι Απόρριψης <br>
                        
                    </v-card-text>
                </v-card>
            </v-dialog>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import MyAithshCard from '../components/MyAithsh_card.vue'
export default ({
    name:'MyAithseis',
    components: {
        MyAithshCard
    },
    data: function() {
        return {
            open_application: false,
            tabs:['Ολοκληρωμένες', 'Υποβεβλημένες', 'Αποθηκευμένες'],
            appl: [
                {id: '12345', status: 'Εγκρίθηκε', papers:null, history:[
                    {id:'1', status:'Υποβολή', date:'01/01/21', icon:'fas fa-arrow-circle-right'},
                    {id:'2', status:'Υπο Επεξεργασία', date:'01/01/21', icon:'fas fa-cog'},
                    {id:'1', status:'Έγκριση', date:'01/01/21', icon:'fas fa-check-circle'},
                    ],
                },
                {id: '12345', status: 'Απορρίφθηκε'},
                {id: '12345', status: 'Εγκρίθηκε'},
                {id: '12345', status: 'Απορρίφθηκε'},
                {id: '12345', status: 'Απορρίφθηκε'},
            ],
            selected: null
        }
    },
})
</script>

<template>
    <v-container fluid>
        <v-card flat>
            <v-card-title class="indigo--text">Οι Αιτήσεις μου</v-card-title>
            <v-tabs grow color="indigo" v-model="selected_tab">
                <v-tab v-for="i in tabs" :key="i">{{i}}</v-tab>
            </v-tabs>
            <v-card-text>
                <v-row  v-if="selected_tab=='0'">
                    <v-col v-for="n in appl" :key="n" class="d-flex child-flex" cols="4">
                        <v-card>
                            <MyAithshCard :appl="n"/>
                            
                        </v-card>
                    </v-col>
                </v-row>
                <v-alert type="info" dense text v-if="selected_tab=='1'" class="text--darken-2"> Οι υποβεβλημένες αιτήσεις δεν μπορούν να δεχτούν επεξεργασία</v-alert>
                <v-row  v-if="selected_tab=='1'">
                    <v-col v-for="n in sub_appl" :key="n" class="d-flex child-flex" cols="4">
                        <v-card>
                            <SubmitedAithshCard :appl="n"/>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
            
        </v-card>
    </v-container>
</template>

<script>
import MyAithshCard from '../components/MyAithsh_card.vue'
import SubmitedAithshCard from '../components/Submited_Aithsh_card.vue'

export default ({
    name:'MyAithseis',
    components: {
        MyAithshCard,
        SubmitedAithshCard,
    },
    data: function() {
        return {
            new_appl: false,
            selected_tab: 'Ολοκληρωμένες',
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
                {id: '12345', status: 'Εγκρίθηκε', papers:null, history:[
                    {id:'1', status:'Υποβολή', date:'01/01/21', icon:'fas fa-arrow-circle-right'},
                    {id:'2', status:'Υπο Επεξεργασία', date:'01/01/21', icon:'fas fa-cog'},
                    {id:'3', status:'Απόρριψη', date:'01/01/21', icon:'fas fa-times-circle'},
                    {id:'4', status:'Αίτηση Επανεξέτασης', date:'01/01/21', icon:'fas fa-redo-alt'},
                    {id:'5', status:'Υπο Επεξεργασία', date:'01/01/21', icon:'fas fa-cog'},
                    {id:'6', status:'Έγκρισης', date:'01/01/21', icon:'fas fa-check-circle'},
                    ],
                },
                {id: '12345', status: 'Απορρίφθηκε'},
                {id: '12345', status: 'Απορρίφθηκε'},
            ],
            sub_appl: [
                {id: '-00000', status: 'Εγκρίθηκε', papers:null, history:[
                    {id:'1', status:'Υποβολή', date:'01/01/21', icon:'fas fa-arrow-circle-right'},
                    {id:'2', status:'Υπο Επεξεργασία', date:'01/01/21', icon:'fas fa-cog'},
                    {id:'3', status:'Απόρριψη', date:'01/01/21', icon:'fas fa-check-circle'},
                    {id:'4', status:'Αίτηση Επανεξέτασης', date:'01/01/21', icon:'fas fa-check-circle'},
                    {id:'5', status:'Υπο Επεξεργασία', date:'01/01/21', icon:'fas fa-cog'},
                    {id:'6', status:'Έγκρισης', date:'01/01/21', icon:'fas fa-check-circle'},
                    ],
                },
                {id: '00000', status: 'Απορρίφθηκε'}
            ],
            selected: null
        }
    },
})
</script>

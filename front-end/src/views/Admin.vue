<template>
    <v-countainer>
        <v-row class="ma-3">
            <v-col cols='9'>
                <v-card>
                    <v-data-table :headers="cat" :items="applications" show-select v-model="selected">
                        <!-- <template  v-slot:item="{}"> -->
                        <template  v-slot:item.open="{}">
                            <v-btn  x-small text class=""> <v-icon x-small class="indigo--text">fas fa-external-link-alt</v-icon> </v-btn>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
            <v-col cols="3" style="position:fixed; bottom:0; right:0;">
                <!-- {{selected}} -->
                <v-btn class="float-right ma-2 green darken-3 white--text" style="font-size:1.2vw" rounded width="100%" outlined :disabled="selected.length === 0">Έγκριση Επιλεγμένων</v-btn>
                <v-btn class="float-right ma-2  red--text" style="font-size:1.2vw" rounded width="100%" outlined :disabled="selected.length === 0">Απόρριψη Επιλεγμένων</v-btn>
            </v-col>
        </v-row>
    </v-countainer>
</template>

<script>

import ApplicationService from '../ApplicationService'

export default ({
    name: 'Admin',
    data: function() {
        return {
            selected: [],
            cat: [
                {text: 'Αριθμός Αίτησης', icon: 'fas fa-hashtag', value:'_id', class:"indigo white--text"},
                {text: 'Ημερομηνία Υποβολής', icon: 'far fa-calendar-alt', value:'createdAt', class:"indigo white--text"},
                {text: 'Κωδικός Χρήστη/ΑΦΜ', icon:'far fa-user', value: 'application.user_afm', class:"indigo white--text"},
                {text: 'Κατηγορία Αίτησης', icon:'far fa-clipboard', value: 'application.genika.type', class:"indigo white--text"},
                {text: 'Προεπισκόπηση', icon:'far fa-clipboard', value: 'open', sortable: false, align: 'center', class:"indigo white--text"},
            ],
            applications: [],
        }
    },
    methods: {

    },
    async created() {
        try {
            this.applications = await ApplicationService.getSubmitedApplications()
            console.log(this.applications)
        }catch(err) {
            this.error = err.message;
        }
    }
})
</script>

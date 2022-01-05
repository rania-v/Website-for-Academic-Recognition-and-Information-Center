<template>
    <v-card flat>
        <v-card-title class="justify-center indigo--text">Φόρμα Επικοινωνίας</v-card-title>
        <v-card-subtitle class="text-center">Όλα τα παρακάτω πεδία είναι απαραίτητα</v-card-subtitle>
        <v-card-text>
        <v-form>
            <v-row class="ma-0 pt-0">
                <v-col class="ma-0 pb-0">
                    <v-row class="ma-0">
                            <v-text-field color="pink lighten-4" dense solo label="Ονοματεπώνυμο" prepend-icon="far fa-user"></v-text-field>
                    </v-row>
                    <v-row class="ma-0">
                        <!-- <v-col> -->
                            <v-text-field color="pink lighten-4" dense solo label="E-mail επικοινωνίας" prepend-icon="fas fa-at"></v-text-field>
                        <!-- </v-col> -->
                    </v-row>
                    <v-row class="ma-0">
                        <!-- <v-col> -->
                            <v-text-field color="pink lighten-4" dense solo label="Τηλέφωνο επικοινωνίας" prepend-icon="fas fa-phone-alt"></v-text-field>
                        <!-- </v-col> -->
                    </v-row>
                </v-col>
                <v-col class="ma-0 pb-0">
                    <v-row class="ma-0">
                        <!-- <v-col> -->
                            <v-text-field color="pink lighten-4" dense solo label="Θέμα μηνύματος" prepend-icon="fas fa-grip-lines"></v-text-field>
                        <!-- </v-col> -->
                    </v-row>
                    <v-textarea rows="9" row-height="10" solo clearable background-color="indigo lighten-4" color="indigo darken-3" filled auto-grow label="Μήνυμα"></v-textarea>
                </v-col>
            </v-row>
            <v-row class="ma-0 pd-0">
                <v-col class="ma-0 pa-0">
                    <v-select :items="d_ep" color="pink lighten-4" solo dense label="Επιλέξτε Διεύθυνση Επικοινωνίας" prepend-icon="fas fa-grip-lines"></v-select>
                </v-col>
            </v-row>
            <v-row class="pa-0">
                <v-spacer></v-spacer>
                <v-btn  color="indigo" dark to="/thank-you-for-contacting-us"><v-icon x-small left>fas fa-paper-plane</v-icon>Αποστολή</v-btn>
                <v-spacer></v-spacer>
            </v-row>
        </v-form>
        </v-card-text>
    </v-card>
</template>

<script>

export default({
    name: 'Forma_Epikoinwnias',
    data: function() {
        return {
            d_ep: [
                'Διεύθυνση Ενημέρωσης',
                'Διεύθυνση Αναγνώρισης Ακαδημαϊκών Τίτλων',
                'Διεύθυνση Διοικητικών & Οικονομικών Υπηρεσιών',
            ],
        }
    },
    async created() {
        // try {
        // } catch(err) {

        // }
    }
})
</script>

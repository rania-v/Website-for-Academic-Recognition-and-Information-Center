<template>
    <v-container fluid>
        <v-card flat>
            <v-card-title class="indigo--text">Προσωπικά Στοιχεία
                <v-spacer></v-spacer>
                <v-btn v-if="edit" fab color="indigo" class="white--text" small><v-icon small>mdi-pencil</v-icon></v-btn>
            </v-card-title>
            <v-card-text class="d-flex">
                <v-spacer></v-spacer>
                <v-col cols='3'>
                    <v-text-field label="Όνομα" style="font-size:90%"></v-text-field>
                    <v-text-field label="Επώνυμο"></v-text-field>
                    <v-text-field label="Πατρώνυμο"></v-text-field>
                    <v-text-field label="Μητρώνυμο"></v-text-field>
                </v-col>
                <v-spacer></v-spacer>
                <!-- <v-divider vertical></v-divider> -->
                <v-spacer></v-spacer>
                <v-col cols='3'>
                    <v-select label="Φύλλο"></v-select>
                    <v-autocomplete label="Χώρα Γέννησης" v-model="user.birth_country" :items="countries" item-value="country" item-text="country" clearable></v-autocomplete>
                    <v-autocomplete label="Πόλη Γέννησης" v-model="user.birth_city" :items="countries" item-text="city" item-value="city"></v-autocomplete>
                    <v-text-field dense :color="color" v-model="user.birthdate" readonly persistent-hint hint="Επιλέξτε πρώτα χρονολογία, μετά μήνα και τέλος ημέρα γέννησης" label="Ημερομηνία Γέννησης" v-on:click="picker=true"></v-text-field>
                    <v-dialog v-model="picker" width="25%">
                        <v-date-picker v-model="user.birthdate" min="1950-01-01" max="2020-01-01"></v-date-picker>
                    </v-dialog>
                </v-col>
                <v-spacer></v-spacer>
                <!-- <v-divider vertical></v-divider> -->
                <v-spacer></v-spacer>
                <v-col cols='3'>
                    <v-autocomplete label="Χώρα διαμονής"></v-autocomplete>
                    <v-text-field label="Διεύθυνση Κατοικίας"></v-text-field>
                    <v-text-field label="Τ.Κ."></v-text-field>

                    <v-text-field label="ΑΦΜ"></v-text-field>
                </v-col>
                <v-spacer></v-spacer>
            </v-card-text>
                        <v-card-title class="indigo--text">Στοιχεία Επικοινωνίας</v-card-title>
                        <v-card-text>

                <v-col cols="4">
                    <v-text-field label="Τηλέφωνο"></v-text-field>
                    <v-text-field label="E-mail"></v-text-field>
                </v-col>
                        </v-card-text>

        </v-card>
    </v-container>
</template>

<script>

export default ({
    name:'UserPersonal',
    props:['edit'],
    data: function() {
        return {
            picker: false,
            user: {
                name: 'lalala',
                email: 'lallla@gmail.com',
                birth_country: null,
            },
            countries:[
                {country:'China', cities:["China 1", "China 2", "China 3", "China 4"]},
                {country:"India", cities: ["India 1", "India 2", "India 3", "India 4"]},
                {country:"Japan", cities: ["Japan 1", "Japan 2", "Japan 3", "Japan 4"]},
                {country:"Singapore", cities: ["Singapore 1"]},
                {country:"Malaysia", cities: ["Malaysia 1", "Malaysia 2", "Malaysia 3", "Malaysia 4"]},
                {country:"Germany", cities: ["Germany 1", "Germany 2", "Germany 3", "Germany 4", "Germany 5", "Germany 6"]},
                {country:"UK", cities: ["UK 1", "UK 2", "UK 3", "UK 4"]},
                {country:"France", cities: ["France 1", "France 2", "France 3", "France 4"]}
            ]
        }
    },
    methods: {
        getCities() {
            const cities = this.countries.find(x => x.country === this.user.birth_country).foo;
            return cities
            // return 
        }
    }
})
</script>

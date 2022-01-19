<template>
    <v-container fluid>
        <v-card flat>
            <v-card-title class="indigo--text">Προσωπικά Στοιχεία
                <v-spacer></v-spacer>
                <v-btn v-if="edit" fab color="indigo" class="white--text" small v-on:click="save=true, edit=false"><v-icon small>mdi-pencil</v-icon></v-btn>
                <v-btn v-if="save" fab color="indigo" class="white--text" small v-on:click="updateUser"><v-icon small>fas fa-save</v-icon></v-btn>
            </v-card-title>
            <v-card-text class="d-flex">
                <v-spacer></v-spacer>
                <v-col cols='3'>
                    <v-text-field label="Όνομα" v-model="user.name" style="font-size:90%" :disabled="edit"></v-text-field>
                    <v-text-field label="Επώνυμο"></v-text-field>
                    <v-text-field label="Πατρώνυμο" v-model="user.personal.patronym" :disabled="edit"></v-text-field>
                    <v-text-field label="Μητρώνυμο" v-model="user.personal.mothers_name" :disabled="edit"></v-text-field>
                </v-col>
                <v-spacer></v-spacer>
                <!-- <v-divider vertical></v-divider> -->
                <v-spacer></v-spacer>
                <v-col cols='3'>
                    <v-select label="Φύλλο" v-model="user.personal.gender" :items="gender" :disabled="edit"></v-select>
                    <v-autocomplete :disabled="edit" label="Χώρα Γέννησης" v-model="user.personal.birth_country" :items="countries" item-value="country" item-text="country" clearable></v-autocomplete>
                    <v-autocomplete :disabled="edit" label="Πόλη Γέννησης" v-model="user.personal.birth_city" :items="countries" item-text="city" item-value="city"></v-autocomplete>
                    <v-text-field :disabled="edit" dense :color="color" v-model="user.personal.birthdate" readonly persistent-hint hint="Επιλέξτε πρώτα χρονολογία, μετά μήνα και τέλος ημέρα γέννησης" label="Ημερομηνία Γέννησης" v-on:click="picker=true"></v-text-field>
                    <v-dialog v-model="picker" width="25%">
                        <v-date-picker v-model="user.personal.birthdate" min="1950-01-01" max="2020-01-01"></v-date-picker>
                    </v-dialog>
                </v-col>
                <v-spacer></v-spacer>
                <!-- <v-divider vertical></v-divider> -->
                <v-spacer></v-spacer>
                <v-col cols='3'>
                    <v-autocomplete :disabled="edit" label="Χώρα διαμονής" v-model="user.personal.residence_country"></v-autocomplete>
                    <v-text-field :disabled="edit" label="Διεύθυνση Κατοικίας" v-model="user.personal.res_addr"></v-text-field>
                    <v-text-field :disabled="edit" label="Τ.Κ." v-model="user.personal.tk"></v-text-field>

                    <v-text-field :disabled="edit" label="ΑΦΜ" v-model="user.personal.afm"></v-text-field>
                </v-col>
                <v-spacer></v-spacer>
            </v-card-text>
                        <v-card-title class="indigo--text">Στοιχεία Επικοινωνίας</v-card-title>
                        <v-card-text>
                <v-row>
                    <v-col cols="4">
                        <v-text-field :disabled="edit" label="Τηλέφωνο"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-text-field :disabled="edit" label="E-mail"></v-text-field>
                    </v-col>
                </v-row>
                        </v-card-text>

        </v-card>
    </v-container>
</template>

<script>
import UserService from '../UserService'

export default ({
    name:'UserPersonal',
    props:['edit'],
    data: function() {
        return {
            gender: [
                'Άνδρας', 'Γυναίκα', 'Άλλο'
            ],
            save: false,
            picker: false,
            // user: null,
            user: {
                id: null,
                name: null,
                personal: {
                    birthdate: null,
                    patronym: null,
                    mothers_name: null,
                    gender: null,
                    birth_country: null,
                    birth_city: null,
                    residence_country: null,
                    res_addr: null,
                    tk: null,
                    afm: null
                }
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
        },
        async updateUser() {
            this.save=false
            this.edit=true
            try {
                console.log(this.user.name);
                await UserService.updateUser(
                    // this.user.id,
                    "61e8507b58e003424f00bc67",
                    this.user.name,
                    this.user.birthdate,
                    this.user.personal.patronym,
                    this.user.mothers_name,
                    this.user.gender,
                    this.user.birth_city,
                    this.user.birth_city,
                    this.user.residence_country,
                    this.user.res_addr,
                    this.user.tk,
                    this.user.afm
                );
            }catch(err) {
                this.error = err.message;
            }
        } 
    },
    async created() {
            try {
                const id = "61e8507b58e003424f00bc67"
                this.user = await UserService.getUser(id);
                console.log(this.user)
            }catch(err) {
                this.error = err.message;
            }
        },    
    
})
</script>

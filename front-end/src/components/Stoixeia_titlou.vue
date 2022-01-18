<template>
    <v-container fluid>
        <v-card-text>
            <v-row >
                <v-col>
                    <v-radio-group v-model="typos_sp" mandatory label="Τύπος Φοίτησης">
                        <v-radio label="Συμβατικός" value="1" style="font-size: 90%"></v-radio>
                        <v-radio label="Εξ Αποστάσεως αποκλειστικά στο εξωτερικό" value="2"></v-radio>
                        <v-radio label="Εξ Αποστάσεως, με μέρος να έγινε στην Ελλάδα" value="3"></v-radio>
                    </v-radio-group>
                </v-col>
                <v-col v-if="typos_sp==3">
                    <v-list>
                        <v-subheader height="auto">Δηλώστε Πόλη και Ίδρυμα της Ελλάδας που έγινε μέρος της διδασκαλίας</v-subheader>
                        <v-list-item>
                            <v-text-field dense label="Πόλη"></v-text-field>
                        </v-list-item>
                        <v-list-item>
                            <v-text-field dense label="Ίδρυμα"></v-text-field>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-subtitle>
                Συμπληρώστε τα στοιχεία του τίτλου σπουδών προς αναγνώριση
            </v-card-subtitle>
            <v-row>
                <v-col>
                    <v-autocomplete label="Πανεπιστήμιο" :items="unis"/>
                    <v-autocomplete label="Τίτλος Σπουδών" :items="titloi"/>
                    <v-text-field  label="Πιστωτικές Μονάδες" :rules="pist_mon_rules" type="number"></v-text-field>
                </v-col>
                <!-- <v-col>
                    <v-text-field dense label="Χώρα Σπουδών"></v-text-field>
                </v-col> -->
                <v-col>
                    <v-text-field  label="Ημερομηνία Εγγραφής" type="date" format="DD/MM/YYYY"></v-text-field>
                    <v-text-field  label="Ημερομηνία Αποφοίτησης" :rules="pist_mon_rules" type="date"></v-text-field>
                    <v-text-field  label="Προβλεπόμενα Έτη Σπουδών" :rules="eth_rules" type="number"></v-text-field>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row v-for="i in extra_unis_array" :key="i">
                <v-col>
                    <v-autocomplete label="Πανεπιστήμιο" :items="unis" v-model="i.uni"/>
                </v-col>
                <v-col>
                    <v-text-field  label="Πιστωτικές Μονάδες" :rules="pist_mon_rules" type="number" v-model="i.credits"></v-text-field>
                </v-col>
                <v-col class="d-flex align-center">
                    <v-btn x-small depressed class="red darken-2 white--text" v-on:click="removeExtraUni(i)">Διαγραφή Πανεπιστημίου</v-btn>
                </v-col>
            </v-row>
            <v-card-actions>
                {{extra_unis}}
                {{extra_unis_array}}
                <v-btn v-on:click="addExtra" depressed><v-icon small class="mr-1">fas fa-plus</v-icon> Προσθήκη Πανεπιστημίου/Ιδρύματος</v-btn>
            </v-card-actions>
            <v-divider></v-divider>
            
            <v-card-subtitle>
                Επιλογή του προγράμματος σπουδών Ελληνικού Πανεπιστημίου ή ΤΕΙ με το οποίο θα γίνει η αντιστοιχία του κρινόμενου τίτλου.
            </v-card-subtitle>
            <v-row>
                <v-col>
                    <v-autocomplete label="Τμήμα Πανεπιστημίου" :items="unis"/>
                </v-col>
                <v-col>
                    <v-autocomplete label="Τμήμα ΤΕΙ" :items="unis"/>
                </v-col>
            </v-row>
        </v-card-text>
    </v-container>
</template>

<script>
export default ({
    name: 'StoixeiaTitlou',
    data: function() {
        return {
            date_1: null,
            date_2: null,
            typos_sp: 1,
            pist_mon_rules: [
                v => !!v || 'Required',
                v => v >= 0 || 'Αριθμός μεγαλύτερος ίσος από 0',
                v => v <= 1000 || 'Αριθμός μέχρι 1000',
            ],
            eth_rules: [
                v => !!v || 'Required',
                v => v > 0 || 'Αριθμός μεγαλύτερος από 0',
                v => v <= 6 || 'Αριθμός μέχρι 6',
            ],
            unis: [
                'Uni 1', 'Uni 2', 'Uni 3', 'Uni 4', 'Uni 5', 'Uni 6', 'Uni 7'
            ],
            titloi: [
                'Τίτλος 1', 'Τίτλος 2', 'Τίτλος 3', 'Τίτλος 4', 'Τίτλος 5', 'Τίτλος 6', 'Τίτλος 7'
            ],
            extra_unis: 0,
            extra_unis_array: [],
            show: null
        }
    },
    methods: {
        addExtra() {
            let newuni = {uni: null, creadits: null};
            let last = this.extra_unis_array.length;
            if(last != 0) {
                if(this.extra_unis_array[last].uni == null)
                    return
                if(this.extra_unis_array[last].creadits == null)
                    return
            }   
            this.extra_unis_array.push(newuni);
            // this.extra_unis ++;
        },
        removeExtraUni(i) {
            this.extra_unis_array.splice(i);
            // this.extra_unis --;
        }
    }
})
</script>

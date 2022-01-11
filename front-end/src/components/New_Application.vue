<template>
    <v-card>
        <v-card-title>Νέα Αίτηση</v-card-title>
        <v-stepper alt-labels v-model="stepper">
            <v-stepper-header>
                <v-stepper-step step="1" editable>Είδος Αίτησης</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2" editable>Τίτλος Σπουδών</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3" editable>Συνεκτίμηση Τίτλου</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="4" editable>Προσωπικά Στοιχεία</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="5" editable>Δικαιολογητικά</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="6" editable>Υποβολή</v-stepper-step>
            </v-stepper-header>
            <v-stepper-content step="1">
                <v-row>
                    <v-col class="d-flex align-center">
                        <v-select :items="appl_type" label="Είδος Αίτησης"></v-select>
                    </v-col>
                    <v-col class="d-flex align-center">
                        <v-select :items="studies_level" v-model="level" label="Επίπεδο Σπουδών"></v-select>
                    </v-col>
                </v-row>
                <v-card v-if="level=='Βασικό Πτυχίο'" flat>
                    <v-row>

                    <v-col class="d-flex align-center flex-column">
                        <v-row>
                            <v-col class="pr-0 mr-0">
                                <v-radio-group v-model="isotimia" mandatory label="Ισοτιμία/Αντιστοιχία Πτυχίου">
                                    <v-radio label=" Ισοτιμία και Αντιστοιχία Πτυχίου" value="1"></v-radio>
                                    <v-radio label=" Ισοτιμία Πτυχίου" value="2"></v-radio>
                                </v-radio-group>
                            </v-col>
                            <v-col cols="3" class="pl-0 ml-0 mt-4">
                                <v-btn icon class="mb-1" elevation="0" color="blue lighten-3 white--text" fab x-small v-on:click="alert_isotimia=!alert_isotimia"><v-icon>fas fa-info-circle</v-icon> </v-btn>
                            </v-col>
                        </v-row>
                        <v-alert :value="alert_isotimia" type="info"  text style="font-size: 80%" class="ma-0 text--darken-2">
                            <strong>Ισοτιμία:</strong>  Αναγνώριση τομέα ανώτατης εκπαίδευσης (Πανεπιστήμιο ή ΤΕΙ) του κρινόμενου τίτλου. <br>
                            <strong> Αντιστοιχία:</strong> Αντιστοίχιση του κρινόμενου τίτλου με συγκεκριμένο πρόγραμμα σπουδών Ελληνικού Πανεπιστημίου ή ΤΕΙ.
                        </v-alert>
                    </v-col>
                    <v-col class="d-flex align-center flex-column">
                        <!-- <v-radio-group v-model="isotimia" mandatory label="με φορέα ανώτατης εκπαίδευσης"> -->
                            <v-list>
                                <v-subheader>με φορέα ανώτατης εκπαίδευσης</v-subheader>
                                <v-list-item v-for="i in foreis" :key="i.id">
                                    <v-checkbox dense  :label="i.id" :value="i.value"></v-checkbox>
                                </v-list-item>
                            </v-list>
                        <!-- </v-radio-group> -->
                    </v-col>
                    <v-col class="d-flex align-center flex-column">
                         <v-row>
                            <v-col class="pr-0 mr-0">
                                <!-- <v-radio-group v-model="isotimia" mandatory class="ma-0"> -->
                                    <v-list>
                                        <v-list-item>
                                            <v-checkbox dense label="Με συνεκτίμηση Μεταπτυχιακόυ τίτλου"></v-checkbox>
                                            <v-btn icon class="mb-1" elevation="0" color="blue lighten-3 white--text" fab x-small v-on:click="alert_foreas=!alert_foreas"><v-icon>fas fa-info-circle</v-icon> </v-btn>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-checkbox dense label="Με Βαθμολογική Αντιστοιχία"></v-checkbox>
                                        </v-list-item>
                                    </v-list>
                                <!-- </v-radio-group> -->
                            </v-col>
                        </v-row>
                        <v-alert :value="alert_foreas" type="info"  text style="font-size: 80%" class="ma-0 text--darken-2">
                            Εάν ο κρινόμενος τίτλος είναι τριετούς διάρκειας,
                            απαιτείται η συνεκτίμηση μεταπτυχιακού τίτλου για την Ισοτιμία/Ισοτιμία
                            και Αντιστοιχία με πτυχίο Πανεπιστημίου
                        </v-alert>
                    </v-col>
                    </v-row>
                </v-card>

                <!-- <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-on:click="stepper++">Επόμενο</v-btn>
                </v-card-actions> -->
            </v-stepper-content>
            <v-stepper-content step="2">
                <StoixeiaTitlou :edit="false"/>
            </v-stepper-content>
            <v-stepper-content step="4">
                <UserPersonal :edit="false"/>
            </v-stepper-content>
                 <v-card-actions>
                    <v-btn v-on:click="stepper--" v-if="stepper!=1" class="blue lighten-1 white--text">Προηγούμενο</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn v-on:click="stepper++" v-if="stepper!=5" class="blue lighten-1 white--text">Επόμενο</v-btn>
                    <v-btn v-on:click="stepper++" v-if="stepper==5" class="green lighten-1 white--text">Υποβολή</v-btn>
                </v-card-actions>
        </v-stepper>
    </v-card>
</template>

<script>

import UserPersonal from '../components/User_personal.vue'
import StoixeiaTitlou from '../components/Stoixeia_titlou.vue'

export default ({
    name: 'NweApplicaton',
    components: {
        UserPersonal,
        StoixeiaTitlou
    },
    data: function() {
        return {
            level: null,
            stepper: 1,
            alert_isotimia: false,
            alert_foreas: false,
            appl_type:['Αναγνώριση Τίτλου', 'Εξέταση Ομοταγούς Υδρύματος', 'Βαθμολογική Αντιστοιχία'],
            studies_level: ['Βασικό Πτυχίο', 'Μεταπτυχιακό', 'Διδακτορικό'],
            isotimia: '1',
            foreis: [
                {id: 'Πανεπιστήμιο',value: '1'},
                {id: 'ΤΕΙ',value: '2'},
            ],
        }
    },
})
</script>

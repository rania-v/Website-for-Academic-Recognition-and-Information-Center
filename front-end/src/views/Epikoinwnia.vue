<template>
    <v-parallax src="../assets/back.jpg" height="100%">
    <v-container>
        <v-card elevation="0" color="white">
            <v-card-text class="text-center">
                <v-alert type="info" border="left" color="purple darken-1" dense text>
                 Για θέματα σχετικά με την πορεία και την κατάσταση των αιτήσεών σας μπορείτε να ενημερωθείτε γρήγορα και άμεσα
                 <v-btn text rounded dark small color="blue lighten-1">με σύνδεση στον λογαρισμό σας</v-btn>
                    ή με τον αριθμό της αίτησης σας
                    <v-btn text rounded dark small color="blue lighten-1">Εδώ</v-btn>
                    <br>Αν οι αποροίες σας δεν έχουν απαντηθεί στην σελίδα
                    <v-btn text rounded dark small color="blue lighten-1">FAQ</v-btn>
                </v-alert>
                
            </v-card-text>
            <v-card-title class="pa-1 indigo--text justify-center">Μορείτε να επικοινωνίσετε μαζί μας</v-card-title>
            <v-card-actions>
                <v-icon></v-icon>
                <v-spacer></v-spacer>
                <v-row>
                    <v-col>
                        <v-btn height="100%" width="100%" :color="contact=='tel' ? 'indigo' : 'blue lighten-3'" elevation="0" dark @click="contact='tel'">
                            <v-col>
                                <v-icon>fas fa-phone-alt</v-icon><br><br>
                                Τηλεφωνικά
                            </v-col>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn height="100%" width="100%" :color="contact=='mail' ? 'indigo' : 'blue lighten-3'" elevation="0" dark @click="contact='mail'">
                            <v-col>
                                <v-icon>fas fa-envelope-open-text</v-icon><br><br>
                                με e-mail
                            </v-col>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn height="100%" width="100%" :color="contact=='location' ? 'indigo' : 'blue lighten-3'" elevation="0" dark @click="contact='location'">
                            <v-col>
                                <v-icon>fas fa-map-marked-alt</v-icon><br><br>
                                στα γρεφεία μας
                            </v-col>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-spacer></v-spacer>
            </v-card-actions>
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="7">
                    <v-card outlined >
                        <v-card-title class="justify-center indigo--text">Φόρμα Επικοινωνίας</v-card-title>
                        <v-card-subtitle class="text-center">Όλα τα παρακάτω πεδία είναι απαραίτητα</v-card-subtitle>
                        <v-card-text>
                        <v-form>
                            <v-row class="ma-0 pt-0">
                                <v-col class="ma-0 pb-0">
                                    <v-row class="ma-0">
                                            <v-text-field color="pink lighten-4" dense outlined label="Ονοματεπώνυμο" prepend-icon="far fa-user"></v-text-field>
                                    </v-row>
                                    <v-row class="ma-0">
                                        <!-- <v-col> -->
                                            <v-text-field color="pink lighten-4" dense outlined label="E-mail επικοινωνίας" prepend-icon="fas fa-at"></v-text-field>
                                        <!-- </v-col> -->
                                    </v-row>
                                    <v-row class="ma-0">
                                        <!-- <v-col> -->
                                            <v-text-field color="pink lighten-4" dense outlined label="Τηλέφωνο επικοινωνίας" prepend-icon="fas fa-phone-alt"></v-text-field>
                                        <!-- </v-col> -->
                                    </v-row>
                                </v-col>
                                <v-col class="ma-0 pb-0">
                                    <v-row class="ma-0">
                                        <!-- <v-col> -->
                                            <v-text-field color="pink lighten-4" dense outlined label="Θέμα μηνύματος" prepend-icon="fas fa-grip-lines"></v-text-field>
                                        <!-- </v-col> -->
                                    </v-row>
                                    <v-textarea rows="8" row-height="10" clearable background-color="indigo lighten-4" color="indigo darken-3" filled auto-grow label="Μήνυμα"></v-textarea>
                                </v-col>
                            </v-row>
                            <v-row class="ma-0">
                                <v-col class="ma-0 ">
                                    <v-select outlined dense label="Επιλέξτε Διεύθυνση Επικοινωνίας" prepend-icon="fas fa-grip-lines"></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-btn small color="indigo" dark><v-icon x-small left>fas fa-paper-plane</v-icon> Αποστολή</v-btn>
                                 <v-spacer></v-spacer>
                            </v-row>
                        </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-card>
    </v-container>
    </v-parallax>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
export default({
    name: 'Epikoinwnia',
    data: function() {
        return {
            contact: 'location',
        }
    }
})
</script>

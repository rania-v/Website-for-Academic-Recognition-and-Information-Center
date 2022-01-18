<template>
    <!-- <v-parallax src="../assets/back.jpg" height="100%"> -->
    <v-container fluid height="100%">
        <!-- <v-card elevation="0" color="white"> -->
            <!-- <v-card-text class="text-center pb-0"> -->
                <v-alert type="info" border="left" color="indigo darken-1" dense text class="text-center mb-0">
                 Για θέματα σχετικά με την πορεία και την κατάσταση των αιτήσεών σας μπορείτε να ενημερωθείτε γρήγορα και άμεσα
                 <v-btn text rounded dark small color="blue lighten-1">με σύνδεση στον λογαρισμό σας</v-btn>
                    ή με τον αριθμό της αίτησης σας
                    <v-btn text rounded dark small color="blue lighten-1">Εδώ</v-btn>
                    <br>Αν οι αποροίες σας δεν έχουν απαντηθεί στην σελίδα
                    <v-btn text rounded dark small color="blue lighten-1" :to="'/FAQ'">FAQ</v-btn>
                </v-alert>
            <!-- </v-card-text> -->
            <v-card-actions>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col cols="2">
                        <v-btn v-on:click="select = 'thl'" height="30%" width="100%" class="ma-2" :color="contact=='tel' ? 'pink darken-3' : 'white indigo--text'" elevation="0" dark @click="contact='tel'">
                            <v-col>
                                <v-icon>fas fa-phone-alt</v-icon><br><br>
                                Τηλέφωνο
                            </v-col>
                        </v-btn>
                        <v-btn v-on:click="select = 'forma'" height="30%" width="100%" class="ma-2" :color="contact=='mail' ? 'pink darken-3' : 'white indigo--text'" elevation="0" dark @click="contact='mail'">
                            <v-col>
                                <v-icon>fas fa-envelope-open-text</v-icon><br><br>
                                e-mail
                            </v-col>
                        </v-btn>
                        <v-btn v-on:click="select = 'loc'" height="30%" width="100%" class="ma-2" :color="contact=='location' ? 'pink darken-3' : 'white indigo--text'" elevation="0" dark @click="contact='location'">
                            <v-col>
                                <v-icon>fas fa-map-marked-alt</v-icon><br><br>
                                τα γρεφεία μας
                            </v-col>
                        </v-btn>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="9" max-height="50%">
                        <Forma_Epikoinwnias v-if="select=='forma'"/>
                        <Location v-if="select=='loc'"/>
                        <Thlefwno v-if="select=='thl'"/>
                    </v-col>
                </v-row>
            </v-card-actions>

            <!-- second take -->
            <!-- <v-navigation-drawer permanent v-model="nv_dr">
                <v-list>
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>fas fa-phone-alt</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>Τηλεφωνικά</v-list-item-content>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>fas fa-envelope-open-text</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>με e-mail</v-list-item-content>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>fas fa-map-marked-alt</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>στα γραφεία μας</v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer> -->
            
        <!-- </v-card> -->
    </v-container>
    <!-- </v-parallax> -->
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import Forma_Epikoinwnias from '../components/Forma_epikoinwnias.vue'
import Location from '../components/Location.vue'
import Thlefwno from '../components/Thlefwno.vue'

export default({
    name: 'Epikoinwnia',
    components: {
        Forma_Epikoinwnias,
        Location,
        Thlefwno
    },
    data: function() {
        return {
            nv_dr:null,
            select: 'thl',
            contact: 'location',
            
        }
    }
})
</script>

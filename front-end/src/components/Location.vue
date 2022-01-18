<template>
    <v-card flat>
        <v-card-actions>
            <!-- <v-spacer></v-spacer> -->
                <v-btn v-on:click="map = 'athens'" rounded outlined color="indigo darken-4" :class="map=='athens' ? 'indigo lighten-3 white--text' : none">Αθήνα</v-btn>
                <v-btn v-on:click="map = 'thess'" outlined color="indigo darken-4" rounded :class="map=='thess' ? 'indigo lighten-3 white--text' : none">Θεσσαλονίκη</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
        <v-card-text class="d-flex">
            <v-col cols="7">
                <iframe v-if="map=='athens'" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.634022361994!2d23.719923015057965!3d37.98566940777124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd2f5bd56263%3A0x28c44f8caa298720!2zzpTOn86RzqTOkc6g!5e0!3m2!1sel!2sgr!4v1640953120353!5m2!1sel!2sgr" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                <iframe v-if="map=='thess'" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.5096727811015!2d22.942106515134803!3d40.64069414991225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839af21cec64b%3A0xdbc815c9573bac04!2zzqXPhs-Fz4DOv8-Fz4HOs861zq_OvyDOnM6xzrrOtc60zr_Ovc6vzrHPgiAtIM6Yz4HOrM66zrfPgiAozpTOuc6_zrnOus63z4TOrs-BzrnOvyk!5e0!3m2!1sel!2sgr!4v1640952173788!5m2!1sel!2sgr" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </v-col>
            <v-col>
                <v-alert max-height="40%" text small color="blue" style="text-overflow: ellipsis;">
                    <v-icon x-small color="indigo" class="pa-1">fas fa-exclamation-triangle</v-icon>
                    Προσέλευση στα γρεφεία προτείνεται μόνο σε περιπτώσεις παραλαβής εγγράφων λόγω κορονοιού
                </v-alert>
                <v-divider></v-divider>
                <v-card-text style="font-size: 150%">
                    Ώρες εξυπηρέτησης:<br/>
                    Δευτέρα με Παρακσευή<br/>
                    από τις 9:00 έως τις 12:00
                </v-card-text>
            </v-col>
        </v-card-text>
    </v-card>
</template>

<script>

export default({
    name: 'Location',
    data: function() {
        return {
            map:'athens',
        }
    },
})
</script>

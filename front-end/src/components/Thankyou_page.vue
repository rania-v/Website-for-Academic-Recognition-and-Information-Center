<template>
    <v-container fluid>
        <!-- <v-card> -->
            <v-card-title class="justify-center">
                <v-img src="../assets/thanku2.svg" max-width="15%" class="justify-center"></v-img>
            </v-card-title>
            <h1 class="font-weight-light indigo--text text-center">Ευχαριστούμε που επικοινώνησες μαζί μας</h1>

            <v-card-text class="font-weight-light indigo--text text-center">
            <!-- <div class="font-weight-light indigo--text text-center"> -->
                Παραλάβαμε το μήνυμά σου και θα απαντήσουμε με e-mail 
                στην διεύθυνση που μας παρείχες το συντομότερο δυνατό. Ο συνηθισμενος χρόνος απάντησης είναι <strong> 2 με 3 μέρες</strong>.
                <br>
                Αν επιθυμείς να ενημερωθείς πιο άμεσα μπορείς να επικοινωνήσεις μαζί μας τηλεφωνικά στις προβλεπόμενες ώρες.
                <br>
                Σε περίπτωση που το e-mail σου είναι συνδεδεμένο με λογαριασμό στην ιστοσελίδα, θα μπορείς να ελέγχεις για απάντηση
                και μέσω του προσωπικού σου λογαριασμόυ. Αν δεν έχεις δημιουργήσει ακόμα λογαρισμό
                μπορείς να το κάνεις εύκολα και γρήγορα εδώ.
            <!-- </div> -->
            </v-card-text>
            <v-card-actions class="d-flex justify-center " fill-height>

            <v-row class="pa-3" style="height: 20%">
                <v-col cols="4" class="d-flex justify-center">
                    <v-card class="pa-2 d-flex flex-column" width="90%" max-height="100%" to="/">
                    <!-- <v-card-text class="justify-self-center"> -->

                        <v-img src="../assets/home.svg" height="40%" contain></v-img>
                        <v-card-title style="word-break: break-word;" class="text-center"> Επιστροφή στην αρχική</v-card-title>
                    <!-- </v-card-text> -->
                    </v-card>
                </v-col>
                <v-col  cols="4" class="d-flex justify-center">
                    <v-card class="pa-2 d-flex flex-column" width="90%"  to="/FAQ">
                        <v-img src="../assets/faq1.svg" height="40%" contain></v-img>
                        <v-card-title style="word-break: break-word;" class="text-center">FAQs</v-card-title>
                        <v-card-subtitle>
                            Για όποιες άλλες αποροίες έχεις, μπορείς να ψάξεις στις συχνές ερωτήσεις
                        </v-card-subtitle>
                    </v-card>
                </v-col>
                <v-col cols="4" class="d-flex justify-center">
                    <v-card class="pa-2 d-flex flex-column" width="90%" v-on:click="signUp">
                        <v-img src="../assets/profile.svg" height="40%" contain></v-img>
                        <v-card-title style="word-break: break-word;" class="text-center">Δημιούργησε λογαριασμό τωρα!</v-card-title>
                        <v-card-subtitle>
                            Για να λαμβάνεις ενημερώσεις και να παρακολουθείς την πορεία των αιτήσεών σου
                        </v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
            </v-card-actions>

    </v-container>
</template>

<script>

export default({
    name: 'Thankyou_page',
    data: function() {
        return {

        }
    },
})
</script>

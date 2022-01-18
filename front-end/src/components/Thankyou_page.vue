<template>
    <v-container fluid>
        <!-- <v-card> -->
            <v-card-title class="justify-center">
                <v-img src="../assets/thanku2.svg" max-width="15%" class="justify-center"></v-img>
            </v-card-title>
            <h1 class="font-weight-light indigo--text text-center">Ευχαριστούμε που επικοινώνησες μαζί μας</h1>

            <v-card-text class="font-weight-light indigo--text text-center">
            <!-- <div class="font-weight-light indigo--text text-center"> -->
                <!-- Παραλάβαμε το μήνυμά σου και θα απαντήσουμε με e-mail 
                στην διεύθυνση που μας παρείχες το συντομότερο δυνατό. Ο συνηθισμενος χρόνος απάντησης είναι <strong> 2 με 3 μέρες</strong>.
                <br>
                Αν επιθυμείς να ενημερωθείς πιο άμεσα μπορείς να επικοινωνήσεις μαζί μας τηλεφωνικά στις προβλεπόμενες ώρες.
                <br>
                Σε περίπτωση που το e-mail σου είναι συνδεδεμένο με λογαριασμό στην ιστοσελίδα, θα μπορείς να ελέγχεις για απάντηση
                και μέσω του προσωπικού σου λογαριασμόυ. -->
            <!-- </div> -->

                <v-row>
                    <!-- <v-col>
                        Θα έχεις απάντηση στο e-mail σου μέσα στις επόμενες 2 με 3 ημέρες
                    </v-col>
                    <v-col>
                        Αν επιθυμείς να ενημερωθείς πιο άμεσα μπορείς να επικοινωνήσεις μαζί μας τηλεφωνικά στις προβλεπόμενες ώρες.
                    </v-col>
                    <v-col>
                        Μπορείς να ελέγχεις για απάντηση και μέσω του προσωπικού σου λογαριασμόυ συνδέοντας την διεύθυνση e-mail σου.
                    </v-col> -->
                    <v-list class="text-center d-flex flex-row align-center justify-center">
                        <v-list-item>
                            <v-icon color="orange lighten-1">fas fa-envelope-open-text</v-icon>
                            Θα έχεις απάντηση στο e-mail σου μέσα στις επόμενες 2 με 3 ημέρες
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="orange lighten-1">fas fa-phone-alt</v-icon>
                            Αν επιθυμείς να ενημερωθείς πιο άμεσα μπορείς να επικοινωνήσεις μαζί μας τηλεφωνικά στις προβλεπόμενες ώρες.
                        </v-list-item>
                        <v-list-item>
                            <v-icon color="orange lighten-1">fas fa-user-circle</v-icon>
                            Μπορείς να ελέγχεις για απάντηση και μέσω του προσωπικού σου λογαριασμόυ συνδέοντας την διεύθυνση e-mail σου.
                        </v-list-item>
                    </v-list>
                </v-row>
            </v-card-text>
            <!-- <v-divider class="indigo lighten-4"></v-divider> -->
            <v-card-actions class="d-flex justify-center " fill-height>

            <v-row class="pa-3" style="height: 20%">
                <v-col cols="4" class="d-flex justify-center">
                    <v-card class="pa-2 d-flex flex-column" width="90%" max-height="100%" to="/">
                    <!-- <v-card-text class="justify-self-center"> -->

                        <v-img src="../assets/home3.svg" height="40%" contain></v-img>
                        <v-card-title style="word-break: break-word;" class="text-center"> Επιστροφή στην αρχική</v-card-title>
                    <!-- </v-card-text> -->
                    </v-card>
                </v-col>
                <v-col  cols="4" class="d-flex justify-center">
                    <v-card class="pa-2 d-flex flex-column" width="90%"  to="/FAQ">
                        <v-img src="../assets/faq2.svg" height="40%" contain></v-img>
                        <v-card-title style="word-break: break-word;" class="text-center">FAQs</v-card-title>
                        <v-card-subtitle>
                            Για όποιες άλλες αποροίες έχεις, μπορείς να ψάξεις στις συχνές ερωτήσεις
                        </v-card-subtitle>
                    </v-card>
                </v-col>
                <v-col cols="4" class="d-flex justify-center">
                    <v-card class="pa-2 d-flex flex-column" width="90%" v-on:click="signUp">
                        <v-img src="../assets/profile1.svg" height="40%" contain></v-img>
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

<template>
    <v-container>
        <!-- <h1 class="font-weight-thin"> lalalla</h1> -->
        <v-list>
                <v-list-item-group color="indigo darken-1">
            <v-list-item v-for="q in questions" :key="q">
                <v-list-group color="indigo darken-1">
                    <template v-slot:activator >
                        <v-list-item-title style="word-break: break-word;">{{q.quest}}</v-list-item-title>
                    </template>
                    <v-list-item-content style="word-break: break-word;">{{q.ans}}</v-list-item-content>
                </v-list-group>
            </v-list-item>
                </v-list-item-group>
        </v-list>
    </v-container>
</template>

<script>

export default({
    name: 'Faq_log',
    data: function() {
        return {
            questions: [
                {quest: 'Πώς αλλάζω τον κωδικό μου ή το mail μου?', ans:'Μέσα απο το profile του χρήστη στο πεδίο "Λογαριασμός"  υπάρχει η επιλογή αλλαγή του e-mail και του κωδικού.'},
                {quest: 'Ξέχασα τον κωδικό μου', ans:'Εφόσον ξεχάσατε τον κωδικό σας μπορείτε αν στείλετε email μέσω του mail το οποίο έχετε έγραφε για να σας στείλουμε πίσω τον κωδικό σας'},
                {quest: 'Χρειάζεται να έχω λογαριασμό για να υποβλαλω αίτηση?', ans:'Ναι είναι υποχρεωτικό να κάνετε λογαριασμό για να στείλετε μια αίτηση'}
            ]
        }
    },
})
</script>

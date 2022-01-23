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
    name: 'Aithseis',
    data: function() {
        return {
            questions: [
                {quest: 'Πώς κάνω νέα αίτηση?', ans:'Θα πρέπει να εγγραφείτε ως χρήσης και στην συνέχεια επιλέγεται το κουμπί νέα αίτηση στο πεδίο του προσωπικού σας λογαριασμου.'},
                {quest: 'Ποια δικαιολογητικά χρειάζονται για μια νέα αίτηση για μια νέα αίτηση?', ans:'Για να πραγματοποιήσει ο χρήστης μια νέα αίτηση θα πρέπει να υποβάλει το βεβαίωση περάτοσης σπουδών.'},
            ]
        }
    },
})
</script>

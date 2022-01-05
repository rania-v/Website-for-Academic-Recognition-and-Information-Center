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
                {quest: 'Πώς διαγράφω τον λογαριασμό μου?', ans:'μπλαμπαλμαπλσμαπσμαπσλμασλπμμπλαμπαλμαπλσμαπσμαπσλμασλπμμπλαμπαλμαπλσμαπσμαπσλμασλπμμπλαμπαλμαπλσμαπσμαπσλμασλπμμπλαμπαλμαπλσμαπσμαπσλμασλπμμπλαμπαλμαπλσμαπσμαπσλμασλπμμπλαμπαλμαπλσμαπσμαπσλμασλπμ'},
                {quest: 'Ξέχασα τον κωδικό μου', ans:'μπλαμπαλμαπλσμαπσμαπσλμασλπμ'},
                {quest: 'Πώς αλλάζω τον κωδικό μου?', ans:'μπλαμπαλμαπλσμαπσμαπσλμασλπμ'},
                {quest: 'Μπορώ να αλλάξω το e-mail του λογαριασμόυ μου?', ans:'μπλαμπαλμαπλσμαπσμαπσλμασλπμ'},
                {quest: 'Χρειάζεται να έχω λογαριασμό για να υποβλαλω αίτηση?', ans:'μπλαμπαλμαπλσμαπσμαπσλμασλπμ'},
            ]
        }
    },
})
</script>

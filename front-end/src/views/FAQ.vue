<template>
    <v-container fluid>
        <v-row max-height="10%">
            <v-col style="max-height:10%">
        <v-card class="ma-2">
            <v-card-title>
                <h3 class="font-weight-thin pr-3">Αναζήτηση σε όλες τις ερωτήσεις</h3>
                <v-autocomplete v-model="search" :items="questions" item-text="quest" label="Πληκτρολογήστε την ερώτησή σας ή λέξεις κλειδιά"></v-autocomplete>
            </v-card-title>
        </v-card>
            </v-col>
        </v-row>
            {{search}}
        <v-row>
            <v-col cols="3" style="position:relative">
                <v-navigation-drawer permanent style="position: static">
                    <v-list>
                        <v-list-item v-for="i in items" :key="i.name" link :to="i.route" active-class="indigo--text">
                            <v-list-item-icon><v-icon>{{i.icon}}</v-icon></v-list-item-icon>
                            <v-list-item-content>{{i.name}}</v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-col>
            <v-col cols="9">
                <router-view/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

// import Faq_log from '../components/Faq_log.vue'

export default({
    namae: 'FAQ',
    data: function() {
        return{
            search: null,
            nav_dr: null,
            items: [
                {name: 'Ο Λογαρισμός μου', icon: 'fas fa-user-circle', route:"/FAQ/o-logariasmos-mou"},
                {name: 'Αιτήσεις', icon: 'fas fa-file-alt', route:"/FAQ/aithseis"},
                {name: 'Δικαιολογητικά', icon: 'fas fa-book', route:"/FAQ/o-logariasmos-mou"},
                {name: 'Εργασία', icon: 'fas fa-briefcase', route:"/FAQ/o-logariasmos-mou"},
                {name: 'Σπουδές', icon: 'fas fa-graduation-cap', route:"/FAQ/o-logariasmos-mou"},
            ],
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

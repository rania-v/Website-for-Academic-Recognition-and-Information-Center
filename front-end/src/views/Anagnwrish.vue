<template>
    <v-container fluid>
        <v-row max-height="10%">
            <v-col>

        <h1 class="font-weight-thin">Αναγνώρηση</h1>
            </v-col>
            
            
        </v-row>
        <v-row>
            <v-col cols="3" style="position:relative">
                <v-navigation-drawer v-model="nav_dr" permanent style="position: static">
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

// import AnEr1 from '../components/AnEr1.vue'

export default({
    namae: 'Anagnwrish',
    data: function() {
        return{
            search: null,
            nav_dr: null,
            items: [
                {name: 'Η πορεία μιας αίτησης', icon: 'fas fa-file-alt', route:"/Anagnwrish/erothsh1"},
                {name: 'Αιτήματα υπέρβασης σειράς προτεραιότητας', icon: 'fas fa-file-alt', route:"/Anagnwrish/erothsh2"},
                {name: 'Αιτήματα φορέων για επιβεβαίωση γνησιότητας πράξεων αναγνώρισης', icon: 'fas fa-file-alt', route:"/Anagnwrish/erothsh3"},
            ],
        }
    },
})
</script>

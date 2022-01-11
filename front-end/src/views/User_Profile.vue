<template>
        <!-- <v-parallax class="d-flex" height="auto" src="../assets/abstract.jpeg"> -->
    <v-container fluid>
            <v-row>
                <v-col cols="3" class="d-flex flex-column align-center">
                    <!-- <v-flex class="justify-center"> -->
                    <v-img :src="user.photo" width="60%"  aspect-ratio="1" class="ma-3"></v-img>
                    <!-- </v-flex> -->
                    <v-navigation-drawer v-model="nav_dr" permanent>
                        <v-list>
                            <v-list-item v-for="i in sections" :key="i.name" link :to="i.route" active-class="indigo--text">
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
        <!-- </v-parallax> -->
</template>


<script>
import photo_ from '../assets/av.svg'
export default ({
    name: 'UserProfile',
    data: function() {
        return {
            nav_dr:null,
            sections: [
                {name: 'Προσωπικά Στοιχεία', icon: 'fas fa-user-circle', route:'personal-info'},
                {name: 'Λογαριασαμός', icon: 'fas fa-clipboard-list', route: 'Logariasmos'},
                {name: 'Τα Δικαιολογητικά μου', icon: 'fas fa-book', route:'ta-dikaiologhtika-mou'},
                {name: 'Οι Αιτήσεις μου', icon: 'fas fa-file-alt', route:'oi-aithseis-mou'},
                // {name: 'Ενημερώσεις', icon: 'fas fa-bell'},
            ],user: {
                photo: photo_,
                name: 'lalala',
                email: 'lallla@gmail.com',

            }
        }        
    },
})
</script>

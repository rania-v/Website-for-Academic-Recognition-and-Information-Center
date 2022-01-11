<template>
    <v-container fluid>
        <v-card flat>
            <v-card-title class="indigo--text mb-5">Τα Δικαιολογητικά μου
                <!-- <v-spacer></v-spacer>
                <v-card-subtitle>Νέα Άιτηση</v-card-subtitle>
                <v-btn fab color="indigo" class="white--text" small v-on:click="new_appl=true"><v-icon small>fas fa-plus</v-icon></v-btn> -->
            </v-card-title>
            <!-- <v-tabs grow color="indigo" v-model="selected_tab">
                <v-tab v-for="i in tabs" :key="i">{{i}}</v-tab>
            </v-tabs> -->
            <v-card-text class="pt-3 mt-3">
                <v-row>
                    <v-col v-for="n in dikaiologhtika" :key="n.name" class="d-flex child-flex" cols="3">
                        <v-card style="cursor: pointer;" v-on:click="selected = n, showdik=true">           
                            <v-card-title style="font-size: 100%">
                                {{n.name}}
                                <v-spacer></v-spacer>
                                <v-btn text color="red darken-2" class="white--text" fab x-small @click.stop="selected = n,del=true"><v-icon x-small>fas fa-times</v-icon></v-btn>
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <v-col cols="3">
                        <v-card v-on:click="add=true" style="cursor: pointer;" color="grey lighten-3">
                            <v-card-title>
                                <!-- <v-card-subtitle> -->
                                <!-- </v-card-subtitle> -->
                            <v-card-actions class="flex">
                                    <!-- Προσθήκη δικαιολογητικού -->
                                <v-spacer></v-spacer>
                                <v-icon>fas fa-plus</v-icon>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                            </v-card-title>         
                        </v-card>
                    </v-col>
                </v-row>
                <!-- <v-alert type="info" dense text v-if="selected_tab=='1'" class="text--darken-2"> Οι υποβεβλημένες αιτήσεις δεν μπορούν να δεχτούν επεξεργασία</v-alert>
                <v-row  v-if="selected_tab=='1'">
                    <v-col v-for="n in sub_appl" :key="n" class="d-flex child-flex" cols="4">
                        <v-card>
                            <SubmitedAithshCard :appl="n"/>
                        </v-card>
                    </v-col>
                </v-row> -->
            </v-card-text>
            <v-dialog v-model="add" width="40%">
                <v-card>
                    <v-card-title>Προσθήκη Δικαιολογητικού</v-card-title>
                    <v-card-text>
                        <v-file-input @change="onFileInput" class="ma-2" style="font-size: 90%" prepend-icon="fas fa-plus" label="Επιλέξτε δικαιολογητικό"></v-file-input>
                        <v-img :src="new_file"></v-img>
                        <!-- <object type="application/pdf" :data ="new_file" id="pdfViewer">
                            <embed id="preview-3_1" type="application/pdf">
                        </object> -->
                        <!-- <input type="file" onchange="previewFile()"><br>
<img :src="file" height="200" alt="Image preview..."> -->
                        <v-textarea label="Σχόλια" clearable auto-grow rows="2"/>
                    </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn class="indigo white--text" text>Προσθήκη</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                </v-card>
            </v-dialog>
            {{selected}}
            <v-dialog v-model="showdik" width="40%">
                <DikaiologhtikaCard :dk="selected"/>
            </v-dialog>
            <v-dialog v-model="del" width="40%">
                <v-card>
                    <v-card-title class="red--text text--darken-2">Διαγραφή Δικαιολογητικού</v-card-title>
                    <v-card-text v-if="selected!=null">
                        Είστε σίγουροι ότι θέλετε να διαγράψετε το δικαιολογητικο {{selected.name}};
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="red darken-2 white--text" text>Διαγραφή</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card>
    </v-container>
</template>

<script>

import DikaiologhtikaCard from '../components/Dikaiologhtika_card.vue'

export default ({
    name: 'Dikaiologhtika',
    components: {
        DikaiologhtikaCard
    },
    data: function() {
        return {
            del: false,
            showdik: false,
            selected: null,
            add: false,
            file: '',
            dikaiologhtika: [
                {name: 'Δικαιολογητικό 1', cont: "kjankajsfnak", comments: "", submition_date: "02/03/21"},
                {name: 'Δικαιολογητικό 2', cont: "kjankajsfnak", comments: "", submition_date: "02/03/21"},
                {name: 'Δικαιολογητικό 3', cont: "kjankajsfnak", comments: "", submition_date: "02/03/21"},
                {name: 'Δικαιολογητικό 4', cont: "kjankajsfnak", comments: "", submition_date: "02/03/21"},
                {name: 'Δικαιολογητικό 4', cont: "kjankajsfnak", comments: "", submition_date: "02/03/21"},
            ]
        }
    },
    methods: {
//          previewFile() {
//   const preview = document.querySelector('img');
//   const file = document.querySelector(this.file).files[0];
//   const reader = new FileReader();

//   reader.addEventListener("load", function () {
//     // convert image file to base64 string
//     preview.src = reader.result;
//   }, false);

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// }
    }
})
</script>

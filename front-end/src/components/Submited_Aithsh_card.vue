<template>
    <v-container v-on:click="open_card=true">
        <v-card-title style="word-break:break-word;" class="font-weight-thin">
            Αίτηση {{appl.id}}
        </v-card-title>
            <v-btn small text color="red" @click.stop="del_appl=true"> Κατάργηση Αίτησης</v-btn>
        <!-- <v-card-subtitle :class="status=='Εγκρίθηκε'?'green--text' : 'red--text'">{{status}}</v-card-subtitle> -->
        <v-dialog v-model="open_card" width="70%">
            <v-card>
                <Application/>
            </v-card>
        </v-dialog>
        <v-dialog v-model="del_appl" width="40%">
            <v-card>
                    <v-card-title class="red--text text--darken-2">Κατάργηση Αίτησης</v-card-title>
                    <v-card-text>
                        Με την κατάργηση της αίτησης κάθε διαδικασία αναγνώρισης τερματίζεται. <br>
                        Είστε σίγουροι ότι θέλετε να διαγράψετε την αίτηση {{appl.id}};
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="red darken-2 white--text" text @click="del_ok=true">Διαγραφή</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="del_ok" width="40%">
                <v-card>
                    <v-alert type="info" class="ma-0" text>
                       Η αίτηση καταργήθηκε επιτυχώς.
                    </v-alert>
                </v-card>
            </v-dialog>
    </v-container>
</template>

<script>
import Application from '../components/New_Application.vue'
export default ({
    name: 'Submited_Aithsh_card',
    props: [
       'appl'
    ],
    components: {
        Application
    },
    data: function() {
        return {
            open_card: false,
            del_appl: false,
            del_ok: false
        }
    },
})
</script>

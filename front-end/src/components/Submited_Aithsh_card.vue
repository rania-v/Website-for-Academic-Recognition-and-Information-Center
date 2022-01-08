<template>
    <v-container v-on:click="open_card=true">
        <v-card-title style="word-break:break-word;" class="font-weight-thin">Αίτηση {{appl.id}}</v-card-title>
        <!-- <v-card-subtitle :class="status=='Εγκρίθηκε'?'green--text' : 'red--text'">{{status}}</v-card-subtitle> -->
        <v-dialog v-model="open_card" width="70%">
            <v-card>
                <Application/>
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
        }
    },
})
</script>

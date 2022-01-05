<template>
    <v-container>
        <v-card-title style="word-break:break-word;" class="font-weight-thin">Αίτηση {{id}}</v-card-title>
        <v-card-subtitle :class="status=='Εγκρίθηκε'?'green--text' : 'red--text'">{{status}}</v-card-subtitle>    </v-container>
</template>

<script>

export default ({
    name: 'Submited_Aithsh_card',
    props: [
       'id', 'status'
    ],
    data: function() {
        return {

        }
    },
})
</script>

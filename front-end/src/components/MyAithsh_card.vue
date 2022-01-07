<template>
    <v-container>
        <v-card-title style="word-break:break-word;" class="font-weight-thin">Αίτηση {{id}}</v-card-title>
        <v-card-subtitle :class="status=='Εγκρίθηκε'?'green--text text--darken-3' : 'red--text text--darken-3'">
            <v-icon v-if="status=='Εγκρίθηκε'" color="green darken-3" small>far fa-check-circle</v-icon>
            <v-icon v-if="status=='Απορρίφθηκε'" color="red darken-3" small>far fa-times-circle</v-icon>
            <strong> {{status}} </strong>
        </v-card-subtitle>
    </v-container>
</template>

<script>

export default ({
    name: 'MyAithsh_Card',
    props: [
       'id', 'status'
    ],
    data: function() {
        return {
           
        }
    },
})
</script>

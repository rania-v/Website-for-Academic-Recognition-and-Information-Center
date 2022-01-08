<template>
    <v-container fluid>
        <v-card color="red">

        </v-card>
        {{err_id}}
    </v-container>
</template>

<script>

export default ({
    name: 'RejectionReasons',
    props:[
        'err_id'
    ],
    data: function() {
        return {
            
        }
    },
})
</script>

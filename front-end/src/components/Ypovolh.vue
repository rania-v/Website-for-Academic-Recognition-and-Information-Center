<template>
    <v-container>
        {{sxolia}}
        <v-textarea label="Προαιρετικά Σχόλια-Παρατηρήσεις" outlined v-model="sxolia"></v-textarea>
    </v-container>
</template>

<script>

export default ({
    name: 'Ypovolh',
    props: ['sxolia']
})
</script>

<template>
    <v-card>
        <v-card-title>
            <div v-if="!edit">{{dk.name}}</div>
            <v-text-field v-if="edit" v-model="dk.name" label="Τίτλος" clearable/>
            <v-spacer></v-spacer>
            <v-btn v-if="!edit" fab color="indigo" class="white--text" small v-on:click="edit=true"><v-icon small>mdi-pencil</v-icon></v-btn>
            <v-btn v-if="edit" fab color="indigo" class="white--text" small v-on:click="save=true, edit=false"><v-icon small>fas fa-save</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            Ημερομηνία καταχώρησης:
                        </v-list-item-title>
                        {{dk.submition_date}}
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <div v-if="!edit">Περιγραφή - σχόλια:{{dk.comments}}</div>
                        <v-text-field v-if="edit" v-model="dk.comments" label="Σχόλια" clearable/>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script>

export default ({
    name: 'DikaiologhtikaCard',
    props: ['dk'],
    data: function() {
        return {
            edit: false,
        }
    },
})
</script>

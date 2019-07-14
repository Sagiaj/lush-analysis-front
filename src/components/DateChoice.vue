<template>
    <v-container fluid grid-list-xs>
        <v-layout row wrap text-xs-center>
            <v-flex xs6>
                <v-date-picker v-model="startDate" color="purple lighten-3" :landscape="true" :reactive="true"></v-date-picker>
            </v-flex>
            <v-flex xs6>
                <v-date-picker v-model="endDate" color="purple lighten-3" :landscape="true" :reactive="true"></v-date-picker>
            </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
            <v-flex xs1 text-xs-center>
                <h1>Go!</h1>
                <v-divider></v-divider>
                <v-btn flat x-large icon @click.native="applyDateChoice()">
                    <v-divider></v-divider>
                    <v-icon x-large color="purple lighten-3">done_all</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'DateChoice',
    props: [],
    methods: {
        ...mapActions(['getDataByDateRange']),
        async applyDateChoice() {
            await this.getDataByDateRange({ startDate: this.startDate, endDate: this.endDate });
            this.$emit('finishDateChoice');
        }
    },
    data () {
        return {
            startDate: '',
            endDate: ''
        }
    }
}
</script>


<template>
    <v-container grid-list-xs>
        <StatusCardList />
        <v-tabs
            v-model="tabsValue"
            centered
            show-arrows
            dark
            icons-and-text
            slider-color="purple lighten-3"
        >
            <v-tabs-slider color="purple lighten-3"></v-tabs-slider>
            <v-tab ripple>
                data table
            </v-tab>
            <v-tab ripple>
                visitors graph
            </v-tab>
            <v-tab-item>
                <VisitorsTable />
            </v-tab-item>
            <v-tab-item>
                <VisitorsGraph />
            </v-tab-item>
        </v-tabs>
        <v-divider></v-divider>
        <v-layout row wrap justify-center>
            <v-flex xs12 text-xs-center>
                <transition name="slide-fade" mode="out-in" v-if="chooseDateRange">
                    <div>
                        <DateChoice @finishDateChoice="terminateDateChoice"/>
                    </div>
                </transition>
                <v-btn flat icon color="purple lighten-3" v-else @click="chooseDateRange = true;">
                    <v-icon>date_range</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import VisitorsGraph from '@/components/VisitorsGraph';
import StatusCardList from '@/components/StatusCardList';
import VisitorsTable from '@/components/VisitorsTable';
import DateChoice from '@/components/DateChoice';

export default {
    name: 'LushDashboardView',
    components: {
        StatusCardList,
        VisitorsGraph,
        VisitorsTable,
        DateChoice
    },
    watch: {
        startDate() {
            console.log('changed!', this.startDate);
        }
    },
    computed: {

    },
    methods: {
        terminateDateChoice() {
            this.chooseDateRange = false;
        }
    },
    data () {
        return {
            startDate: null,
            endDate: null,
            tabsValue: 0,
            chooseDateRange: false
        }
    }
}
</script>


<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }

  .slide-fade-enter-active {
    transition: all .8s ease;
    }
    .slide-fade-leave-active {
    /* transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(30px);
    opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
    opacity: 0;
    }
</style>
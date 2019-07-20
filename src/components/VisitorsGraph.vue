<template>
    <v-container fluid>
        <v-card class="mt-3 mx-auto">
            <v-sheet
                class="v-sheet--offset mx-auto caption grey background--primary"
                elevation="12"
                max-width="calc(100% - 32px)"
                >
                <v-sparkline v-for="(graph, idx) in chosenGraphsProperties" :key="idx"
                    :gradient="[graph.gradient]"
                    gradientDirection="bottom"
                    :style="`${graph.style}`"
                    :line-width="2"
                    :smooth="10"
                    :labels="graph.label || []"
                    :label-size="10"
                    :padding="10"
                    auto-draw
                    :value="graph.values"
                >
                </v-sparkline>
            </v-sheet>
            <v-card-title primary-title>
                <v-toolbar color="primary">
                    <h1>Visitors Traffic</h1>
                </v-toolbar>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                Generic site traffic data regardless of click sources
            </v-card-text>
            <v-card-actions>
                <v-layout row wrap justify-center>
                    <v-flex xs12 text-xs-center v-if="chosenGraphsProperties.length">
                        <v-chip v-for="(graph, idx) in chosenGraphsProperties" :key="idx"
                            close 
                            :color="graph.gradient"
                            @input="removeGraph(idx)"
                            >
                            {{ graph.name }}
                        </v-chip>
                    </v-flex>
                    <v-flex xs12 v-else>
                        <v-btn color="primary" @click="chosenGraphsProperties = [...graphsProperties]">
                            Restore All Graphs
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-card-actions>
        </v-card>
    </v-container>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'VisitorsGraph',
    computed: {
        ...mapGetters(['siteData'])
    },
    watch: {
        siteData() {
            this.updateGraph(this.siteData);
        }
    },
    methods: {
        ...mapActions([]),
        removeGraph(idx) {
            this.chosenGraphsProperties.splice(idx, 1);
            this.chosenGraphsProperties.forEach((graph, i) => {
                let style = "";
                if (i > 0) {
                    style = `margin-top: -25%; top: -${i*20}px; position: inherit;`
                }
                graph.style = style;
            });
        },
        convertSiteDataToGraph(siteData) {
            const graphsProperties = [];
            let dataBySites = siteData.reduce((obj, { site, visits }) => {
                obj[site] = {};
                visits.forEach(({date, visits}) => {
                    obj[site][date] = { visits };
                });
                return obj;
            }, {});

            let dataByDates = siteData.reduce((obj, { site, visits }) => {
                visits.forEach(({date, visits}) => {
                    if (obj[date] === undefined) {
                        obj[date] = {};
                    }
                    obj[date][site] = { visits };
                });
                return obj;
            }, {});

            let siteVisitValues = {};
            for (let site in dataBySites) {
                let curSiteData = dataBySites[site];
                siteVisitValues[site] = [];
                for (let date in dataByDates) {
                    if (curSiteData[date] !== undefined) {
                        siteVisitValues[site].push(curSiteData[date].visits);
                    } else {
                        siteVisitValues[site].push(0);
                    }
                }
            }

            Object.keys(siteVisitValues).forEach((site, i) => {
                let randHexStr = '#'+Math.floor(Math.random()*16777215).toString(16);
                let style = "";
                if (i > 0) {
                    style = `margin-top: -25%; top: -${i*20}px; position: inherit;`
                }
                graphsProperties.push({
                    name: site,
                    values: siteVisitValues[site].length > 1 ? siteVisitValues[site] : [...siteVisitValues[site], ...siteVisitValues[site]],
                    style,
                    gradient: randHexStr
                });
            });
            graphsProperties[graphsProperties.length - 1].label = Object.keys(dataByDates);
            console.log('check:', graphsProperties[graphsProperties.length - 1]. label);

            return graphsProperties;
        },
        updateGraph() {
            let graphPropRes = this.convertSiteDataToGraph(this.siteData);
            this.graphsProperties = [...graphPropRes];
            this.chosenGraphsProperties = [...graphPropRes];
        }
    },
    mounted () {
        this.updateGraph();
    },
    data () {
        return {
            graphsProperties: [
                {
                    values: [],
                    gradient: [''],
                    style: ""
                }
            ],
            chosenGraphsProperties: [

            ]
        }
    }
}
</script>

<style scoped>
    .v-sheet svg.primary--text[style] {
        font-size: 4px !important;
    }
    .v-sheet svg.primary--text g text[style] {
        font-size: 4px !important;
    }
</style>


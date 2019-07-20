<template>
    <v-container grid-list-xs>
        <v-flex xs12>
            <v-card>
                <v-card-title primary-title>
                    <div>
                        <div class="headline background--secondary--text">{{ domain }}</div>
                        <span class="background--primary--text">Top site</span>
                    </div>
                </v-card-title>
                <v-card-text>
                    <v-divider></v-divider>
                </v-card-text>
                <v-card-actions>
                    <span>Show total visits</span>
                    <v-btn icon @click.native="showTotalVisits = !showTotalVisits">
                        <v-icon>{{ showTotalVisits ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-slide-y-transition>
                    <v-card-text v-show="showTotalVisits">
                        {{ totalVisits }}
                    </v-card-text>
                </v-slide-y-transition>
            </v-card>
        </v-flex>
    </v-container>
</template>

<script>
export default {
    name: 'StatusCard',
    props: ['item'],
    computed: {

    },
    methods: {
        calculateTotalVisits() {
            let { visits, site } = this.item;
            this.domain = site;
            this.totalVisits = visits.reduce((acc, {visits}) => acc + visits, 0);
        }
    },
    mounted () {
        this.calculateTotalVisits();
    },
    data () {
        return {
            domain: '',
            totalVisits: 0,
            showTotalVisits: false
        }
    }
}
</script>


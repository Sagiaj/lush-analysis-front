<template>
    <v-container fluid grid-list-xs>
        <v-data-iterator
            content-tag="v-layout"
            row
            wrap
            :items="siteData"
            :rows-per-page-items="[3,6,9,15,21]"
        >
            <v-flex
                slot="item"
                slot-scope="props"
                xs4>
                <StatusCard :item="props.item" />
            </v-flex>
        </v-data-iterator>
    </v-container>
</template>

<script>

import StatusCard from '@/components/StatusCard';
import { mapGetters } from 'vuex';
export default {
    name: 'StatusCardList',
    components: {
        StatusCard
    },
    computed: {
        ...mapGetters(['siteData'])
    },
    mounted () {
        // let changed = this.siteData.map(siteObj => );
    },
    data () {
        return {
            
        }
    }
}
</script>

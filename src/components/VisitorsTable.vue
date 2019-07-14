<template>
    <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        class="elevation-1"
    >
        <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td v-for="(item, key) in props.item.visitsByDates" :key="key">
                {{ item }}
            </td>
        </template>
    </v-data-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'VisitorsTable',
    watch: {
        siteData() {
            this.updateTable();
        }
    },
    methods: {
        convertSiteDataToTable(siteData) {
            let constructedObj = {
                headers: [
                    {
                        text: 'Site name',
                        value: 'name',
                        align: 'left',
                        sortable: false
                    }
                ],
                items: []
            };

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
                        constructedObj.headers.push({ text: date, value: date });
                    }
                    obj[date][site] = { visits };
                });
                return obj;
            }, {});

            let parsedSiteOnDate = {};
            for (let date in dataByDates) {
                let curDateSiteData = dataByDates[date];
                for (let site in dataBySites) {
                    let itemIdx = parsedSiteOnDate[site];
                    let { visits = 0 } = curDateSiteData[site] || {};
                    if (itemIdx !== undefined) { // found 
                        constructedObj.items[itemIdx - 1].visitsByDates[date] = visits;
                        constructedObj.items[itemIdx - 1][date] = visits;
                    } else { // Didnt find item
                        let len = constructedObj.items.push({ name: site, visitsByDates: { [date]: visits } });
                        constructedObj.items[len - 1][date] = visits;
                        parsedSiteOnDate[site] = len;
                    }
                }
            }

            return constructedObj;
        },
        updateTable() {
            let { headers, items } = this.convertSiteDataToTable(this.siteData);
            this.items = [...items];
            this.headers = [...headers];
        }
    },
    computed: {
        ...mapGetters(['siteData'])
    },
    mounted () {
        this.updateTable();
    },
    data () {
        return {
            headers: [],
            items: []
        }
    }
}
</script>

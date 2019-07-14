import * as types from '../mutation-types';
import { AnalysisApi } from '../../api/analysis';
const state = {
    siteData: [
        {
            "site": "bli.com",
            "visits": [
                {
                    "date": "7-10-2019",
                    "visits": 1
                },
                {
                    "date": "7-11-2019",
                    "visits": 1
                }
            ]
        },
        {
            "site": "co.il",
            "visits": [
                {
                    "date": "7-13-2019",
                    "visits": 5
                }
            ]
        },
        {
            "site": "dudu.com",
            "visits": [
                {
                    "date": "7-13-2019",
                    "visits": 2
                }
            ]
        },
        {
            "site": "www.google.com",
            "visits": [
                {
                    "date": "7-11-2019",
                    "visits": 1
                }
            ]
        },
        {
            "site": "xample.com",
            "visits": [
                {
                    "date": "7-13-2019",
                    "visits": 4
                }
            ]
        }
    ],
    startDate: "",
    endDate: ""
};
const mutations = {
    [types.SET_SITE_DATA](state, siteData) {
        state.siteData = siteData;
    }
};
const actions = {
    async getDataByDateRange({ commit }, { startDate, endDate }) {
        try {
            // Retrieve data by range
            let data = await AnalysisApi.getDataByDateRange(startDate, endDate);
            // commit data
            commit(types.SET_SITE_DATA, data);
        }
        catch (err) {
            return Promise.reject(err);
        }
    }
};
const getters = {
    siteData(state) {
        return state.siteData;
    },
    startDate(state) {
        return state.startDate;
    },
    endDate(state) {
        return state.endDate;
    }
};
export default {
    state,
    mutations,
    actions,
    getters
};
//# sourceMappingURL=client-data.js.map
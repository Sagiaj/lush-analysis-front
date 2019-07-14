import AxiosService from './base/axios';
export class AnalysisApi extends AxiosService {
    constructor() {
        super();
    }
    static async getDataByDateRange(startDate, endDate) {
        try {
            let actionUrl = 'analysis/getDataByDateRange';
            let bodyParams = { startDate, endDate };
            let data = await this.send(actionUrl, AxiosService.HTTP_METHODS.post, null, bodyParams);
            return data;
        }
        catch (err) {
            return Promise.reject(err);
        }
    }
}
//# sourceMappingURL=analysis.js.map
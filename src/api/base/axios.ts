import axios, { AxiosInstance } from 'axios';

const axiosInstance = axios.create({
    // baseURL: /*`${process.env.API_BASE_URL}`*/ `${'http://localhost:3000'}`
    baseURL: 'http://31e5198c.ngrok.io'
});

class AxiosService {
    static axios: AxiosInstance = axiosInstance;
    static HTTP_METHODS = {
        get: "GET",
        post: "POST",
        put: "PUT",
        delete: "DELETE"
    };

    static async send (relative_url: string, method: string, queryParams: any = '', bodyParams: any = {}, additionalHeaders: any = {}) {
        try {
            let response = null;
            switch (method) {
                case AxiosService.HTTP_METHODS.get:
                    response = await this.axios.get(relative_url);
                    break;
                case AxiosService.HTTP_METHODS.post:
                    response = await this.axios.post(relative_url, bodyParams);
                    break;
                default:
                    return Promise.reject(`Unrecorgnized method ${method}`);
                    break;
            }
            if (!response || response.status != 200) {
                return Promise.reject("Error retrieving user");
            }
            return Promise.resolve(response.data);
        } catch (err) {
            return Promise.reject(err);
        }
        
    }
}

export default AxiosService;

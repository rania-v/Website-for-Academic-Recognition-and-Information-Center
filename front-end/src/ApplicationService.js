import axios from 'axios';
const url = 'http://localhost:5000/api/applications/';


var U = null;
U;
class ApplicationServices {
    // Get User
    static async getAllApplications() {
        const res = await axios.get(url);
            try {
                
                const data = res.data;
                    return data.map(appls => ({
                            ...appls,
                            // createdAt: new Date(appls.createdAt)
                        }))
            }catch(err) {
                return err;
            }
    }

    static async getSubmitedApplications() {
        const sub = 'submited'
        const res = await axios.get(`${url}${sub}`);
            try {
                const data = res.data;
                    return data.map(appls => ({
                            ...appls,
                        }))
            }catch(err) {
                return err;
            }
    }

    static async getApplication(id) {
        const get = "getapplication"
        const res = await axios.post(`${url}${get}`, {
            id: id
        });
            try {
                return res.data;
            }catch(err) {
                return err;
            }
    }

    // Create Application
    static createApplication(appl) {
        return axios.post(url, {
            application: appl,
            createdAt: new Date()
        });
    }

    // Delete Application
    static deleteApplication(id) {
        return fetch.delete(`${url}${id}`);
    }
}

export default ApplicationServices;
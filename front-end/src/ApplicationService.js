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
                            createdAt: new Date(appls.createdAt)
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

    // Create User
    static createApplication(appl) {
        return axios.post(url, {
            // status: appl.status,
            // type: appl.type,
            // st_level: appl.st_level,
            // antistoixia: appl.antistoixia,
            application: appl
        });
    }


    //Update Personal Info
    static updateUser(id, n, bd, pn, mn, g, bcntr, bct, rcntr, rad, tk, afm) {
        console.log(n)
        const u = axios.post(`${url}/update`, {
            id: id,
            name: n,
            birthdate: bd,
            patronym: pn,
            mothers_name: mn,
            gender: g,
            birth_country: bcntr,
            birth_city: bct,
            residence_country: rcntr,
            res_addr: rad,
            tk: tk,
            afm: afm
        });
        U = u;
        return u;
    }

    //Update Enmail and password
    static updatePassMail(id, mail, pass) {
        // console.log()
        const u = axios.post(`${url}/update`, {
            id: id,
            mail: mail,
            password: pass
        });
        U = u;
        return u;
    }

    // Delete User
    static deleteUser(id) {
        return fetch.delete(`${url}${id}`);
    }
}

export default ApplicationServices;
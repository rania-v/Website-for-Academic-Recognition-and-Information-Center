import axios from 'axios';
const url = 'http://localhost:5000/api/user/';


var U = null;

class UserServices {
    // Get User
    static async getAllUsers() {
        const res = await axios.get(url);
            try {
                
                const data = res.data;
                    return data.map(user => ({
                            ...user,
                            createdAt: new Date(user.createdAt)
                        }))
            }catch(err) {
                return err;
            }
    }

    static async getUser(id) {
        const get = "getuser"
        const res = await axios.post(`${url}${get}`, {
            id: id
        });
            try {
                return res.data;
            }catch(err) {
                return err;
            }
    }

    static connected() {
        return U;
    }

    // Create User
    static createUser(name, password, email) {
        return axios.post(url, {
            name: name,
            email: email,
            password: password
        });
    }

    // Login
    static loginUser(email, password) {
        const u = axios.post(`${url}/login`, {
            email: email,
            password: password
        });
        U = u;
        return u;
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

    // Delete User
    static deleteUser(id) {
        return fetch.delete(`${url}${id}`);
    }
}

export default UserServices;
import axios from 'axios';
const url = 'http://localhost:5000/api/user/';


var U = null;

class UserServices {
    // Get User
    static async getUser() {
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

    // Delete User
    static deleteUser(id) {
        return fetch.delete(`${url}${id}`);
    }
}

export default UserServices;
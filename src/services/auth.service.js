import axios from "axios";

import authHeader from './auth-header';

const API_URL = 'http://localhost:2022/users/';

class AuthService {
    async login(email, password) {
      try {
        const res = await axios.post(API_URL+'login', {
            "email": email,
            "password": password
          })
          .then(response => {
            if (response.data) {
              localStorage.setItem("userToken", JSON.stringify(response.data));
            }
            return true;
          }).catch(error => {return false});
          return res;
      } catch (error) {
      }
    }
  
    logout() {
      try {
        return axios.get(API_URL+'logout', { headers: authHeader() })
          .then(() => {return true}).catch(() => {return false});
      } catch (error) {
      }
    }
  
    register(email, password, name, subname) {
      try {
        return axios.post(API_URL + "register", {
          "name": name,
          "subname": subname,
          "email": email,
          "password": password
        }).then(() => {
          return this.login(email, password);
        })  
        .catch(() => {return false});
      } catch (error) {
      }
    }

    getMascotas() {
      try {
        return axios.get(API_URL+'mascotas', { headers: authHeader() })
          .then((res) => {return res.data}).catch(() => {return false});
      } catch (error) {
      }
    }
  
    getCurrentUser() {
      return JSON.parse(localStorage.getItem('userToken'));;
    }
  }
  
  export default new AuthService();

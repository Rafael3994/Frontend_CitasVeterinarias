import axios from "axios";

import authHeader from './auth-header';

const API_URL = 'http://localhost:2022/mascotas/';

class MascotasService {
  
    register(name, tipo) {
    return axios.post(API_URL + "register", {
        "name": name,
        "tipo": tipo
      }, { headers: authHeader() })
        .then(() => {
            return true;
        })  
        .catch(() => {return false});
    }
  }
  
  export default new MascotasService();

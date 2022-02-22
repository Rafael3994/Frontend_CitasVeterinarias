import axios from "axios";

import authHeader from './auth-header';

const API_URL = 'http://localhost:2022/mascotas/';

class MascotasService {
  register(name, tipo) {
    try {
      return axios.post(API_URL + "register", {
        "name": name,
        "tipo": tipo
      }, { headers: authHeader() })
        .then(() => {
          return true;
        })
        .catch(() => { return false });
    } catch (error) {
    }
  }

  getMascota(uuid) {
    try {
      return axios.post(API_URL + "uuid", {
        "uuidMascota": uuid
      }, { headers: authHeader() })
        .then((res) => {
          return res;
        })
        .catch((error) => {
          console.log(error);
          return false
        });
    } catch (error) {
    }

  }

}

export default new MascotasService();

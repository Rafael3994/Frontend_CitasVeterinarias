import axios from "axios";

import authHeader from './auth-header';

const API_URL = 'http://localhost:2022/citas/';

class MascotasService {
  getCitas(uuid) {
    try {
      return axios.post(API_URL + "citasMascotas", {
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

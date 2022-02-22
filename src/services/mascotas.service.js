import axios from "axios";

import authHeader from './auth-header';

const API_URL = 'http://localhost:2022/mascotas/';

class MascotasService {
  // TODO: METER TRY CATCH
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

    getMascota(uuid) {
      return axios.post(API_URL + "uuid", {
          "uuidMascota": uuid
        }, { headers: authHeader() })
          .then((res) => {  
            return res;
          })  
          .catch((error) => {
            console.log(error);
            return false});
      }

  }
  
  export default new MascotasService();

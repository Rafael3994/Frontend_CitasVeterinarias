import { React, useState, useEffect } from 'react';

import { Link, useParams } from "react-router-dom";
import MascotasService from "../services/mascotas.service";
import AuthService from "../services/auth.service";

function ModificarMascota() {

    const { uuid } = useParams();
    const [mascota, setMascota] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [modificarMascota, setModificarMascota] = useState({
        namePet: "",
        tipo: ""
    });

    useEffect(() => {
        try {
            MascotasService.getMascota(uuid).then(response => {
                setMascota(response.data[0]);
                console.log("mascota ",mascota.name);
                setModificarMascota({ namePet: mascota.name, tipo: mascota.tipo })
                console.log(modificarMascota);
                setIsLoaded(true);
            }).catch(error => { 
            })
        } catch (error) {
        }
    }, []);

    
    const handleChange = (e) => {
        const nameTarget = e.target.name;
        const valueTarget = e.target.value;
        setModificarMascota({ nameTarget: valueTarget })
    }

    if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <h2>Modificar mascota</h2>
                {
                    <form /*onSubmit={this.handleSubmit}*/>
                        <p>{modificarMascota.namePet}</p>
                        <div className="form-group">
                            <label>Name
                                <input
                                    name="namePet" value={modificarMascota.namePet} onChange={handleChange} required type="text" className="form-control" placeholder="Enter its name">
                                </input>
                            </label>
                            <br></br><br></br>
                            <label>Type
                                <select name="tipo" value={modificarMascota.tipo} onChange={handleChange} required className="form-control width-13-em" placeholder="Select its type">
                                    <option>Gato</option>
                                    <option>Perro</option>
                                    <option>Pajaro</option>
                                </select>
                            </label>
                        </div>
                        <br></br>
                        <div className='d-flex flex-row'>
                            <button type="submit" className="btn btn-primary margin-right-7">Modificar</button>
                            <Link to={`/mostrarMascota/${uuid}`}>Back</Link>
                        </div>
                    </form>
                }
            </div>
        );
    }
}


// class modificarMascota extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             namePet: '',
//             tipo: 'Gato',
//             isMascotaCreate: false,
//             isToken:  AuthService.getCurrentUser() !== null
//          };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);        
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         MascotasService.register(this.state.namePet, this.state.tipo).then((res) => {
//             if(res) {
//                 this.setState({ isMascotaCreate: true });
//             }
//         })
//     }

//     handleChange(e) {
//         console.log(e.target.name, e.target.value);
//         this.setState({ [e.target.name]: e.target.value });
//     }

//     render() {
//         const { isToken, isMascotaCreate } = this.state;
//         return (
//             <div>
//                 {!isToken && (
//                     <Navigate to="/" />
//                 )}
//                 {isMascotaCreate && (
//                     <Navigate to="/mostrarMascotas" />
//                 )}
//                 <br></br>
//                 <br></br>
//                 <h2>Añadir mascota</h2>

//                 <form onSubmit={this.handleSubmit}>
//                     <div className="form-group">
//                         <label>Name
//                             <input
//                                 name="namePet" value={this.state.name} onChange={this.handleChange} required type="text" className="form-control" placeholder="Enter its name">
//                             </input>
//                         </label>
//                         <br></br><br></br>
//                         <label>Type
//                             <select name="tipo" value={this.state.name} onChange={this.handleChange} required className="form-control width-13-em" placeholder="Select its type">
//                             <option>Gato</option>
//                             <option>Perro</option>
//                             <option>Pajaro</option>
//                             </select>
//                         </label>
//                     </div>
//                     <br></br>
//                     <div className='d-flex flex-row'>
//                         <button type="submit" className="btn btn-primary margin-right-7">Register</button>
//                         <Link to="/mostrarMascotas">Back</Link>
//                     </div>
//                 </form>
//             </div>

//         );
//     }
// }
export default ModificarMascota;
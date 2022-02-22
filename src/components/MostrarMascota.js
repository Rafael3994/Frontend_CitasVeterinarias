import { React, useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

import MascotasService from "../services/mascotas.service";

function MostrarMascota() {

    const { uuid } = useParams();
    const [ mascota, setMascota ]  = useState({});

    useEffect(() => {
        try {
            MascotasService.getMascota(uuid).then(response => {
                setMascota(response.data[0]);
            }).catch(error => {
            })
        } catch (error) {
        }
    }, []);

    return (
        <div>
            <Link to="/">Logout</Link>
            <br></br>
            <br></br>
            <h2>{mascota.name}</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Citas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mascota && (
                            <tr>
                                <th scope="row">{ }</th>
                                <td>{mascota.name}</td>
                                <td>{mascota.tipo}</td>
                                <td><Link to={`/citasMascota/${mascota.uuid}`}>ver citas</Link></td>
                            </tr>
                        )

                    }
                </tbody>
            </table>
            <br></br>
            <Link to="/mostrarMascotas">Back</Link>
        </div>
    );

}



// class MostrarMascota extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 <Link to="/">Logout</Link>
//                 <br></br>
//                 <br></br>
//                 <h2>(Nombre mascota)</h2>

//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th scope="col"></th>
//                             <th scope="col">Name</th>
//                             <th scope="col">Type</th>
//                             <th scope="col">Citas</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <th scope="row">1</th>
//                             <td>name</td>
//                             <td>type</td>
//                             <td>(link)</td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <br></br>
//                 <Link to="/mostrarMascotas">Back</Link>
//             </div>          
//         );
//     }
// }

export default MostrarMascota;
import { React, useState, useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";

import AuthService from "../services/auth.service";

function MostrarMascotas(props) {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [isToken, setIsToken] = useState(AuthService.getCurrentUser() !== null);

    const logout = () => {
        AuthService.logout().then((res) => {
            if (res) {
                localStorage.removeItem("userToken");
                setIsToken(false)
            }
        });
    }

    useEffect(() => {
        try {
            AuthService.getMascotas().then(response => {
                setItems(response);
                setIsLoaded(true)
            }).catch(error => {
                setIsLoaded(false);
            })
        } catch (error) {
        }
    }, []);



    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {!isToken && (
                    <Navigate to="/" />
                )}
                <button onClick={logout} type="button" className="btn btn-primary margin-right-7">Logout</button>
                <br></br>
                <br></br>
                <h2>Mascotas</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items && (
                                items.map((mascota, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{i}</th>
                                            <td>{mascota.name}</td>
                                            <td><Link to={`/mostrarMascota/${mascota.uuid}`}>ver mascota</Link></td>
                                        </tr>
                                    )
                                }))
                        }
                    </tbody>
                </table>
                <br></br>
                <Link to="/registerMascota">Añadir mascota</Link>
            </div>
        );
    }
}


// class MostrarMascotas extends React.Component {
//     constructor(props) {
//         super(props);
//         // if(localStorage.getItem("userToken") !== null) {
//         //     this.setState({isToken: true})
//         // }
//         this.state = { 
//             items: [],
//             isLoaded: false,
//             error: null,
//             isToken: AuthService.getCurrentUser() !== null 
//         };
//         this.logout = this.logout.bind(this);
//     }

//     logout() {
//         AuthService.logout().then((res) => {
//             if(res){
//                 localStorage.removeItem("userToken");
//                 this.setState({isToken: false});
//             }
//         });
//     }

//     async componentDidMount() {
//         try {
//             AuthService.getMascotas().then(response => {
//                 this.setState({items: response, isLoaded: true})
//             }).catch(error => {
//                 this.setState({
//                     isLoaded: false,
//                     error
//                 })
//             })
//         } catch (error) {
//         }
//     }

//     render() {
//         const { error, isLoaded, isToken, items } = this.state;

//             if (error) {
//                 return <div>Error: {error.message}</div>;
//             } else if (!isLoaded) {
//                 return <div>Loading...</div>;
//             } else {
//                 return (
//                     <div>
//                         {!isToken && (
//                             <Navigate to="/" />
//                         )}
//                         <button onClick={this.logout} type="button" className="btn btn-primary margin-right-7">Logout</button>
//                         <br></br>
//                         <br></br>
//                         <h2>Mascotas</h2>

//                         <table className="table">
//                             <thead>
//                                 <tr>
//                                     <th scope="col"></th>
//                                     <th scope="col">Name</th>
//                                     <th scope="col">View</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     items && (
//                                     this.state.items.map((mascota, i) => {
//                                         return (
//                                             <tr key={i}>
//                                                 <th scope="row">{i}</th>
//                                                 <td>{mascota.name}</td>
//                                                 <td><Link to="/mostrarMascota">ver mascota ({mascota.uuid})</Link></td>
//                                             </tr>
//                                         )
//                                     }))
//                                 }
//                             </tbody>
//                         </table>
//                         <br></br>
//                         <Link to="/registerMascota">Añadir mascota</Link>
//                     </div>          
//                 );
//             }
//     }
// }

export default MostrarMascotas;
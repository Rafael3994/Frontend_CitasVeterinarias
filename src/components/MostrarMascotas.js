import React from 'react';
import axios from 'axios';
import { Link, Navigate} from "react-router-dom";

import AuthService from "../services/auth.service";
import MascotasService from "../services/mascotas.service";


class MostrarMascotas extends React.Component {
    constructor(props) {
        super(props);
        // if(localStorage.getItem("userToken") !== null) {
        //     this.setState({isToken: true})
        // }
        this.state = { 
            items: [],
            isLoaded: false,
            error: null,
            isToken: AuthService.getCurrentUser() !== null 
        };
        this.logout = this.logout.bind(this);
    }

    logout() {
        AuthService.logout().then((res) => {
            if(res){
                localStorage.removeItem("userToken");
                this.setState({isToken: false});
            }
        });
    }

    async componentDidMount() {
        try {
            AuthService.getMascotas().then(response => {
                this.setState({items: response, isLoaded: true})
            }).catch(error => {
                this.setState({
                    isLoaded: false,
                    error
                })
            })
        } catch (error) {
        }
    }

    render() {
        const { error, isLoaded, isToken, items } = this.state;
        
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
                        <button onClick={this.logout} type="button" className="btn btn-primary margin-right-7">Logout</button>
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
                                    this.state.items.map((mascota, i) => {
                                        return (
                                            <tr key={i}>
                                                <th scope="row">{i}</th>
                                                <td>{mascota.name}</td>
                                                <td><Link to="/mostrarMascota">Añadir mascota</Link></td>
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
}
export default MostrarMascotas;
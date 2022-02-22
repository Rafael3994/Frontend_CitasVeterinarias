import React from 'react';

import { Link, Navigate } from "react-router-dom";
import MascotasService from "../services/mascotas.service";
import AuthService from "../services/auth.service";


class RegisterMascota extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            namePet: '',
            tipo: 'Gato',
            isMascotaCreate: false,
            isToken:  AuthService.getCurrentUser() !== null
         };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleSubmit(e) {
        e.preventDefault();
        MascotasService.register(this.state.namePet, this.state.tipo).then((res) => {
            if(res) {
                this.setState({ isMascotaCreate: true });
            }
        })
    }

    handleChange(e) {
        console.log(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { isToken, isMascotaCreate } = this.state;
        return (
            <div>
                {!isToken && (
                    <Navigate to="/" />
                )}
                {isMascotaCreate && (
                    <Navigate to="/mostrarMascotas" />
                )}
                <br></br>
                <br></br>
                <h2>Añadir mascota</h2>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name
                            <input
                                name="namePet" value={this.state.name} onChange={this.handleChange} required type="text" className="form-control" placeholder="Enter its name">
                            </input>
                        </label>
                        <br></br><br></br>
                        <label>Type
                            <select name="tipo" value={this.state.name} onChange={this.handleChange} required className="form-control width-13-em" placeholder="Select its type">
                            <option>Gato</option>
                            <option>Perro</option>
                            <option>Pajaro</option>
                            </select>
                        </label>
                    </div>
                    <br></br>
                    <div className='d-flex flex-row'>
                        <button type="submit" className="btn btn-primary margin-right-7">Register</button>
                        <Link to="/mostrarMascotas">Back</Link>
                    </div>
                </form>
            </div>

        );
    }
}
export default RegisterMascota;
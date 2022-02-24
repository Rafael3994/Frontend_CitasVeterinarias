import React from 'react';
import { Link, Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: '', password: '', isLogged: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const res = AuthService.login(this.state.user, this.state.password)
        if (res) {
            this.setState({ isLogged: true })
        } else {
            alert('Datos incorrectos o usuario invalido.')
        }
        // AuthService.login(this.state.user, this.state.password).then(res => {
        //     if(res) {
        //         this.setState({isLogged: true})
        //     } else {
        //         alert('Datos incorrectos o usuario invalido.')
        //     }
        // })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { isLogged } = this.state;
        return (
            <div>
                {isLogged && (
                    <Navigate to="mostrarMascotas" replace={true} />
                )}
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Correo Electronico
                            <input
                                name='user' value={this.state.user} onChange={this.handleChange} required type="text" className="form-control" placeholder="Enter your User">
                            </input>
                        </label>
                        <br></br><br></br>
                        <label>Contraseña
                            <input
                                name='password' value={this.state.password} onChange={this.handleChange} required type="password" className="form-control" placeholder="Enter your Password">
                            </input>
                        </label>
                    </div>
                    <br></br>
                    <div className='d-flex flex-row'>

                        <button type="submit" className="btn btn-primary margin-right-7">Login</button>
                        <Link to="/registerUser">Registrarse</Link>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;
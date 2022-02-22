import React from 'react';

import { Link } from "react-router-dom";


class CitasMascota extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/">Logout</Link>
                <br></br>
                <br></br>
                <h2>Citas</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Veterinari@</th>
                            <th scope="col">Date</th>
                            <th scope="col">Accions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>name</td>
                            <td>YYYY-MMMM-DDDD HH:00:00</td>
                            <td>(linkMod) / (linkDel)</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <Link to="/mostrarMascota">Back</Link>
            </div>          
        );
    }
}
export default CitasMascota;
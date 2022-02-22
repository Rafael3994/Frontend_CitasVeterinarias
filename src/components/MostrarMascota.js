import React from 'react';

import { Link, useParams } from "react-router-dom";


class MostrarMascota extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/">Logout</Link>
                <br></br>
                <br></br>
                <h2>(Nombre mascota)</h2>

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
                        <tr>
                            <th scope="row">1</th>
                            <td>name</td>
                            <td>type</td>
                            <td>(link)</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <Link to="/mostrarMascotas">Back</Link>
            </div>          
        );
    }
}
export default MostrarMascota;
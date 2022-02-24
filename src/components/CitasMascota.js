import { React, useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

import CitasService from "../services/citas.service";

function CitasMascota() {

    const { uuid } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [citas, setCitas] = useState({});

    useEffect(() => {
        try {
            CitasService.getCitas(uuid).then((res) => {
                setCitas(res.data)
                setIsLoaded(true);
            })
        } catch (error) {
        }
    }, []);

    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <Link to="/">Logout</Link>
                <br></br>
                <br></br>
                <h2>Citas</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Veterinari@</th>
                            <th scope="col">Date</th>
                            <th scope="col">Accions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            citas && (
                                citas.map((cita, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{cita.uuidVeterinario}</td>
                                            <td>{cita.inital_date}</td>
                                            <td>(linkMod) / (linkDel)</td>
                                        </tr>
                                    )
                                })
                            )
                        }
                    </tbody>
                </table>
                <br></br>
                <Link to={`/mostrarMascota/${uuid}`}>back</Link>
            </div>
        );
    }
}

export default CitasMascota;
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";
import RegisterMascota from "./components/RegisterMascota";
import MostrarMascotas from "./components/MostrarMascotas";
import MostrarMascota from "./components/MostrarMascota";
import CitasMascota from "./components/CitasMascota";

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column mx-5">
        <div className="d-flex justify-content-center">
          <h1>Clinica Veterinaria</h1>
        </div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="registerUser" element={<RegisterUser />} />
          <Route path="registerMascota" element={<RegisterMascota />} />
          <Route path="mostrarMascotas" element={<MostrarMascotas />} />
          <Route path="mostrarMascota/:uuid" element={<MostrarMascota />} />
          <Route path="citasMascota/:uuid" element={<CitasMascota />} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

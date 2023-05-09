import { Routes, Route } from "react-router-dom";
import LoginAdmin from "../components/Dashboard/LoginAdmin";
import NavbarAdmin from "../components/Dashboard/NavbarAdmin";
import Navbar from "../components/Navbar";
import CasaArrendada from "../pages/casaArrendada";
import CasasDisponibles from "../pages/CasasDisponibles";
import CasasAlquiladas from "../pages/Dashboard/CasasAlquiladas";
import CasasDisponiblesA from "../pages/Dashboard/CasasDisponiblesA";
import CasasInhabilitadas from "../pages/Dashboard/CasasInhabilitadas";
import Hello from "../pages/PerfilEditar";
import HomePage from "../pages/HomePage";
import InicioSesion from "../pages/InicioSesion";
import Perfil from "../pages/Perfil";
import Resgistrarse from "../pages/Resgistrarse";
import PrivateRouter from "./PrivateRouter";
import PrivateRoutesAdmin from "./PrivateRoutesAdmin";
import PerfilEditar from "../pages/PerfilEditar";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Hello />} />
      </Route>
      <Route path="/login" element={<InicioSesion />} />
      <Route path="/registrarse" element={<Resgistrarse />} />
      <Route path="/logina" element={<LoginAdmin />} />

      <Route element={<PrivateRouter />}>
        <Route path="/casas" element={<Navbar />}>
          <Route index element={<CasasDisponibles />} />
          <Route path="arrendadas" element={<CasaArrendada />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="editar" element={<PerfilEditar />} />
        </Route>
      </Route>

      <Route element={<PrivateRoutesAdmin/>}>
      <Route path="/administrador" element={<NavbarAdmin />}>
        <Route index element={<CasasDisponiblesA />} />
        <Route path="inhabilitadas" element={<CasasInhabilitadas />} />
        <Route path="alquiladas" element={<CasasAlquiladas />} />
      </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;

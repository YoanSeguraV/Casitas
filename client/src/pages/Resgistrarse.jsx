import "../pages/login.css";
import house from "../assets/house.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { agregarUsuario } from "../data/apis";
import Swal from "sweetalert2";

function Resgistrarse() {
  const [form, setform] = useState({
    nombreUSU: "",
    fechaNacimientoUSU: "",
    NroDocumentoUSU: null,
    fotoPerfilUSU: "",
    usuarioUSU: "",
    contrasenaUSU: "",
  });

  const handleInputChange = ({ target }) => {
    setform({ ...form, [target.name]: target.value });
  };
  const handleOnsumbit=(e)=>{
   e.preventDefault()
  }
  console.log(form);

  return (
    <div className=" container w-75   border-round justify-content-center aling-items-center">
      <div className="row mt-5">
        <div className="col-6 bg-dark">
          <form className="mt-5" onSubmit={handleOnsumbit}>
            <Link to={"/"} className="nav-link fs-3 text-primary my-3">Registrandote</Link>
            <div className="form-outline mb-2 p3">
              <label class="form-label text-white ">Nombre Completo</label>
              <input
                type="text"
                name="nombreUSU"
                class="form-control"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-outline mb-2 p3">
              <label class="form-label text-white ">Fecha de Nacimiento</label>
              <input
                type="date"
                onChange={handleInputChange}
                name="fechaNacimientoUSU"
                class="form-control"
              />
            </div>
            <div className="form-outline mb-2 p3">
              <label class="form-label text-white ">Identificacion</label>
              <input
                type="number"
                name="NroDocumentoUSU"
                class="form-control"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-outline mb-2 p3">
              <label class="form-label text-white ">Foto de Perfil</label>
              <input
                type="file"
                name="fotoPerfilUSU"
                class="form-control"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-outline mb-2 p3">
              <label class="form-label text-white ">Correo Electronico</label>
              <input
                type="email"
                name="usuarioUSU"
                class="form-control"
                onChange={handleInputChange}
              />
            </div>

            <div class="form-outline mb-2">
              <label class="form-label text-white ">Contraseña</label>
              <input
                type="password"
                name="contrasenaUSU"
                id="form2Example2"
                class="form-control"
                onChange={handleInputChange}
              />
            </div>
            <p className="text-white">
              ya tienes cuenta <Link  to={"/login"}>Inicia Sesion</Link>
            </p>

            <div className="d-flex justify-content-center ">
              <button
                type="submit"
                class="btn btn-primary btn-block mb-4 w-75 mx-"
                onClick={() => agregarUsuario(form)}
              >
               
                Registrame
              </button>
            </div>
          </form>
        </div>
        <div className="col-6 bg-danger">
          <img src={house} width="85%" className="mt-5" alt="" />
          <h3 className="text-white text-center">Ya tienes Cuenta </h3>
          <div className="mt-4 justify-content-center d-flex">
            
            <Link to={"/login"}  className="btn btn-primary mt-3 mx-5 w-50">
              Inicia sesion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resgistrarse;

import "../pages/login.css";
import house from "../assets/house.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUsuario } from "../data/apis";
function InicioSesion() {
  const [form, setform] = useState({
    usuarioUSU: "",
    contrasenaUSU: "",
  });

  const handleInputChange = ({ target }) => {
    setform({
      ...form,
      [target.name]: target.value,
    });
  };
  const handleOnsumbit=(e)=>{
    e.preventDefault()
  }
  return (
    
    <div className=" container w-50  bg-dark border-round justify-content-center aling-items-center ">
      <div className="row mt-5">
        <div className="col-6 bg-dark">
          <form className="mt-5" onSubmit={handleOnsumbit}>
            <Link to={"/"} className="text-white my-3 nav-link"> <h3 className="nav-item">Inicio de Sesion</h3></Link>
            <div className="form-outline mb-4 p3">
              <label class="form-label text-white " for="form2Example1">
                Correo Electronico
              </label>
              <input
                type="email"
                name="usuarioUSU"
                id="form2Example1"
                class="form-control"
                onChange={handleInputChange}
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label text-white " for="form2Example2">
                Contraseña
              </label>
              <input
                type="password"
                name="contrasenaUSU"
                id="form2Example2"
                class="form-control"
                onChange={handleInputChange}
              />
            </div>
            <p className="text-white">
              No tienes una cuenta <Link to={"/registrarse"}>Registrate</Link>
            </p>

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-primary btn-block mb-4 w-75"
                onClick={() => loginUsuario(form)}
              >
                Iniciar sesion
              </button>
            </div>
          </form>
        </div>
        <div className="col-6 bg-danger">
          <img src={house} width="85%" className="mt-5" alt="" />
        </div>
      </div>
    </div>
    

  );
}

export default InicioSesion;

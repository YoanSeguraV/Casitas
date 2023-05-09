import React, { useState } from 'react'
import "../../pages/login.css";

import house from "../../assets/house.png";
import { loginAdmins } from '../../data/apis';
import {Link} from 'react-router-dom'


function LoginAdmin() {
    const [form, setform] = useState({
        usuario: "",
        contrasena: "",
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
    <div className=" container w-50  bg-dark border-round justify-content-center aling-items-center">
      <div className="row mt-5">
        <div className="col-6 bg-dark">
          <form className="mt-5" onSubmit={handleOnsumbit}  >
            <Link to={"/"} className="nav-link"><h4 className="text-white my-3">Inicio de Sesion Admin</h4></Link>
            
            <div className="form-outline mb-4 p3">
              <label class="form-label text-white " for="form2Example1">
                Correo Electronico
              </label>
              <input type="email" name="usuario" id="form2Example1" class="form-control" onChange={handleInputChange} />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label text-white " for="form2Example2">
                Contraseña
              </label>
              <input type="password" name="contrasena" id="form2Example2" class="form-control" onChange={handleInputChange} />
            </div>
            

            <div className="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary btn-block mb-4 w-75"
                onClick={()=>loginAdmins(form)}
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
  )
}

export default LoginAdmin

import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import { BiChevronsLeft } from "react-icons/bi";
import { context } from "../context/context";
import { useEffect, useState } from "react";


function Perfil() {
  const { perfilUsuario, perfil } = context();
 let dato=localStorage.getItem("name")
  dato=perfil.nombreUSU
   
   localStorage.setItem('name', dato);

 

  // const handleInputChange = ({target}) => {

  //   setform({...form,[target.name]:target.value})
  // }
  useEffect(() => {
    perfilUsuario();
  }, []);
  console.log(perfil)

  return (
    <>
      <div>
        <Link className="nav-link" to={"/casas"}>
          <BiChevronsLeft className="fs-2" />
          Atras
        </Link>
      </div>


      <div
        className="d-flex justify-content-center container mb-5 "
        style={{ height: "45rem" }}
      >
        <form >
          
            <div
              className="mt-3   bg-primary  p-5"
              style={{ width: "25rem", height: "43rem" }}
            >
              <div className="d-flex">
              <button className=" btn btn-warning">Perfil</button> <Link to={"/casas/editar"} className="btn btn btn-danger">Editar</Link>
              </div>
              
               
              <h4 className="text-center">Editando Perfil</h4>
              <div className="d-flex justify-content-center">
                <img src={profile} className="rounded-circle " alt="" />
              </div>

              <input className="my-3" type="file" />

              <div>
                <label className="fw-bold">Nombre Completo</label>
                <input
                  className="form-control my-2"
                  type="text"
                  name="nombreUSU"
                  
                  value={perfil.nombreUSU}
                />
                
                <label className="fw-bold">Fecha nacimiento</label>
                <p>{perfil.fechaNacimientoUSU}</p>
                <input
                  className="form-control my-2"
                  type="date"
                  name="fechaNacimientoUSU"
                  value={perfil.fechaNacimientoUSU}
                  
                />
                <label className="fw-bold">identificacion</label>
                <input
                  className="form-control my-2"
                  type="number"
                  name="NroDocumentoUSU"
                  value={perfil.NroDocumentoUSU}
                  
                />
                <label className="fw-bold">correo</label>
                <input
                  className="form-control my-2"
                  type="text"
                  disabled
                  
                  value={perfil.usuarioUSU}
                />

               
              </div>
            
          
              
        </div>
        </form>
      </div>
      
    </>
  );
}

export default Perfil;

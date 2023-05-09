import {useEffect, useState} from 'react'
import profile from "../assets/profile.jpg";
import { BiChevronsLeft } from "react-icons/bi";
import { updatePerfil } from "../data/apis";
import {Link} from 'react-router-dom'
import { context } from '../context/context';

function PerfilEditar() {
  const { perfilUsuario, perfil } = context();
 

  // const handleInputChange = ({target}) => {

  //   setform({...form,[target.name]:target.value})
  // }
  useEffect(() => {
    perfilUsuario();
  }, []);
  const [form, setform] = useState({

    nombreUSU:"" ,
    fechaNacimientoUSU: "",
    NroDocumentoUSU: 0,
    fotoPerfilUSU: "image.png",
    usuarioUSU: ""

  })

  const handleInputChange = ({target}) => {
    

    setform({...form,[target.name]:target.value})
  }
  console.log(form)
  return (
    <>
      <div>
        <Link className="nav-link" to={"/casas/perfil"}>
          <BiChevronsLeft className="fs-2" />
          Atras
        </Link>
      </div>


      <div
        className="d-flex justify-content-center container mb-5 "
        style={{ height: "45rem" }}
      >
        <form onSubmit={handleInputChange}>
          
            <div
              className="mt-3   bg-primary  p-5"
              style={{ width: "25rem", height: "43rem" }}
            >
              <div className="d-flex">
              <Link to={"/casas/perfil"} className=" btn btn-warning">Perfil</Link> <Link to={"/casas/editar"} className="btn btn btn-danger">Editar</Link>
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
                  onChange={handleInputChange}

                  
                />
                
                <label className="fw-bold">Fecha nacimiento</label>
                <p></p>
                <input
                  className="form-control my-2"
                  type="date"
                  name="fechaNacimientoUSU"
                 
                  onChange={handleInputChange}
                />
                <label className="fw-bold">identificacion</label>
                <input
                  className="form-control my-2"
                  type="number"
                  name="NroDocumentoUSU"
                  
                  onChange={handleInputChange}
                />
                <label className="fw-bold">correo</label>
                <input
                  className="form-control my-2"
                  type="text"
                  name='usuarioUSU'
                  onChange={handleInputChange}
                />
                <button className="btn btn-warning my-3  w-75 mx-3" onClick={()=>updatePerfil(perfil.idUsuario,form)}>
                  Guardar
                </button>
              </div>
            
          
              
        </div>
        </form>
      </div>
      
    </>
  )
}

export default PerfilEditar

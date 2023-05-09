import {useEffect} from "react";
import ModalAgregarCasa from "../../components/Dashboard/ModalAgregarCasa";
import { context } from "../../context/context";
import Swal from 'sweetalert2'

function CasasDisponiblesA() {

 const{casasDisponibles,loadCasasDisponibles,inhabilitarcasDisponible}=context()

 useEffect(()=>{
  loadCasasDisponibles()
 },[])
  return (
    <div className="container">
      <table className="table mt-5 ">

        <thead>
        <tr>
            <td colSpan={9} className="bg-success text-white p-4  ">
              
              <div className="d-flex justify-content-between ">
              <h3 >CASAS DISPONIBLES</h3>
                <button className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#modalagregarcasa">Agregar</button>
              </div>
            </td>
            
          </tr>
          <tr className="text-center">
            <td className="fw-bold">Imagen</td>
          <td colSpan={2} className="fw-bold">Tipo de casa</td>
            <td className="fw-bold">Direccion</td>
            <td className="fw-bold">medidas</td>
            <td className="fw-bold">Capacidad</td>
            <td className="fw-bold">Valor</td>
            <td className="fw-bold">Estado</td>
            <td></td>
          </tr>
      
        </thead>
        
        <tbody>
          
            
            
          {casasDisponibles.map((item,index)=>(
            <>
          <tr key={index}>
            
            <td rowSpan={2} colSpan={2} width="10%">
              {" "}
              <img
                class="rounded-circle my-2"
                src="https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg"
                style={{ width: "100%" }}
                alt=""
              />
            </td>
            
          
            
          </tr>

          <tr className="text-center mt-5">
            <td className="mt-5">{item.tipoCAS}</td>
            <td>{item.direccionCAS}</td>
            <td>18x12metros</td>
            <td>{item.capacidadCAS} personas</td>
            <td>${item.costoCAS}.000</td>
            <td>
              <p className="bg-success w-75 btn btn-sucess text-white p-1 border-rounded">
                Disponible
              </p>{" "}
            </td>
            <td>
              <button  onClick={() => {
                    Swal.fire({
                      title: "¿Seguro que deseas Inhabilitar esta propiedad ?",
                      icon: "question",
                      showDenyButton: true,
                      denyButtonText: "No",
                      confirmButtonText: "Si",
                    }).then((response) => {
                      if (response.isConfirmed) {
                        Swal.fire({
                          icon: "success",
                          title: "Inhabilitado Correctamente ",
                          timer: "1500",
                          button:inhabilitarcasDisponible(item.idcasa)
                        })
                        
                      }
                    });
                  }} className="btn btn-danger">Inhabilitar</button>
            </td>
          </tr>
          </>
          ))}
          
        </tbody>
      </table>
      <ModalAgregarCasa/>
    </div>
  );
}

export default CasasDisponiblesA;

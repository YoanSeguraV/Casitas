import React, { useEffect } from "react";
import { context } from "../../context/context";
import { habilitarCasa } from "../../data/apis";
import Swal from 'sweetalert2'

function CasasInhabilitadas() {
  const { loadCasasInhabilitadas, casasInhabilitadas } = context();
  useEffect(() => {
    loadCasasInhabilitadas();
  }, []);
  return (
    <div>
      <div className="container">
        <table className="table mt-5 ">
          <thead>
          <tr>
              <td colSpan={9} className="bg-success  text-white fs-4  p-4">
                CASAS INHABILITADAS
              </td>
            </tr>
            <tr>
            <td colSpan={2} className="fw-bold">Imagen</td>
            <td className="fw-bold">Tipo de casa</td>
                  <td className="fw-bold">Direccion</td>
                  <td className="fw-bold">medidas</td>
                  <td className="fw-bold">Capacidad</td>
                  <td className="fw-bold">Valor</td>
                  <td colSpan={2} className="fw-bold">Estado</td>
                  <td></td>
            </tr>
          </thead>
          <tbody>
            
            {casasInhabilitadas.map((item) => (
              <>
                <tr>
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

                <tr>
                  <td>{item.tipoCAS}</td>
                  <td>{item.direccionCAS}</td>
                  <td>18x12metros</td>
                  <td>{item.capacidadCAS} personas</td>
                  <td>${item.costoCAS}.000</td>
                  <td>
                    <p className="bg-danger btn btn-danger p-1 mx-1 w-75">Inhabilitado</p>
                  </td>
                  <td>
                    <button
                     
                      className="btn btn-primary"
                      onClick={() => {
                        Swal.fire({
                          title: "¿Seguro que deseas Habilitar esta propiedad ?",
                          icon: "question",
                          showDenyButton: true,
                          denyButtonText: "No",
                          confirmButtonText: "Si",
                        }).then((response) => {
                          if (response.isConfirmed) {
                            Swal.fire({
                              icon: "success",
                              title: "Habilitado Correctamente ",
                              timer: "1500",
                              button:habilitarCasa(item.idcasa)
                            })
                            
                          }
                        });
                      }}
                    >
                      Habilitar
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CasasInhabilitadas;

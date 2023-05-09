import React, { useEffect, useState } from "react";
import { context } from "../context/context";
import Swal from "sweetalert2";
import { cancelarArriendo } from "../data/apis";

function CasaArrendada() {
  const { arrendarCasas, casasArrendadas } = context();
  useEffect(() => {
    arrendarCasas();
  }, []);
  console.log(casasArrendadas);
  return (
    <div className=" mx-5  text-center">
      <h2 className="p-5">Casas Arrendadas</h2>
     
      <hr />
      <table class="table">
        <tbody>
          <tr className="bg-primary text-white">
            <td>Tipo de Casa</td>
            <td>Direccion</td>
            <td>Fecha Inicio</td>
            <td>Valor</td>
            <td>Estado</td>
          </tr>
          {casasArrendadas.map((item) => (
            <tr>
              <td>casa Familiar</td>
              <td>{item.direccion_casa}</td>
              <td>{item.Fecha_de_inicio}</td>
              <td>${item.Valor_del_alquiler}.000</td>
              
              {/* <td>
                {!item.estado ? (
                  
                ) : (
                  <p className="btn btn-success p-1">Servicio</p>
                )}
              </td> */}
              <td>
                {!item.estado
                ?(
              <p className="p-1  text-danger">Cancelado</p>
                ):(
                  <button
                  className="btn btn-danger"
                  onClick={() => {
                    Swal.fire({
                      title: "¿Seguro que desea cancelar ?",
                      icon: "question",
                      text: "si cancela el arrendamiento se le devolvera el 15% del valor del arriendo el otro 85% se le quedara la inmobiliaria por penalizacion",
                      showDenyButton: true,
                      denyButtonText: "No",
                      confirmButtonText: "Si",
                    }).then((response) => {
                      if (response.isConfirmed) {
                        Swal.fire({
                          icon: "success",
                          title: "Cancelado Correctamente ",
                          timer: "1500",
                          button: cancelarArriendo(item.id_alquiler),
                        });
                        // button: arrendarCasa(
                        //   item.idcasa,
                        //   parseInt(localStorage.getItem("user")),
                        //   parseInt(item.costoCAS)
                        // );
                      }
                    });
                  }}
                >
                  Cancelar
                </button>
                )
                
                }
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CasaArrendada;

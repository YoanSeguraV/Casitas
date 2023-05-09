import React, { useState } from "react";
import { agregarCasa } from "../../data/apis";

function ModalAgregarCasa() {
  const [form, setform] = useState({
    direccionCAS: "",
    tipoCAS: "",
    costoCAS: "",
    NrPisosCAS: "",
    descripcionCAS: " ",
    capacidadCAS: " ",
    zonaCAS: "",
    desactivadaCAS: 0,
    disponibleCAS: 1,
    ocupadaCAS: 0,
  });

  const handleInputChange = ({ target }) => {
    setform({
      ...form,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <div
        class="modal fade"
        id="modalagregarcasa"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Creando Casa
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <form onSubmit={handleInputChange}>
                  <div>
                    <label htmlFor="tipocasa">Tipo de casa:</label>
                    <select
                      id="tipocasa"
                      name="tipoCAS"
                      className="form-control mt-2"
                      onChange={handleInputChange}
                    >
                      <option defaultValue  selected desabled>Seleccione</option>
                      <option value="cabaña">cabaña</option>
                      <option value="familiar">familiar</option>
                      <option value="rodante">rodante</option>
                      <option value="inteligente">inteligente</option>
                      <option value="ecologica">ecologica</option>
                      <option value="iglus">iglus</option>
                      <option value="Inmobiliaria">Inmobiliaria</option>
                    </select>
                    <label htmlFor="direccion">Direccion:</label>
                    <input
                      type="text"
                      name="direccionCAS"
                      id="direccion"
                      className="form-control"
                      placeholder="ingrese la direccion"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="medidas">Medidas</label>
                    <input
                      type="text"
                      id="medidas"
                      className="form-control"
                      placeholder="ingrese medidas"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="pisos">Numeros de pisos</label>
                    <input
                      type="number"
                      id="pisos"
                      name="NrPisosCAS"
                      className="form-control w-50"
                      placeholder="ingrese numero de pisos"
                      onChange={handleInputChange}
                    />

                    <label htmlFor="Capacidad">Capacidad</label>
                    <input
                      type="number"
                      name="capacidadCAS"
                      id="Capacidad"
                      className="form-control w-50"
                      placeholder="ingrese la capacidad"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="zona">Zona</label>
                    <select
                      className="form-control"
                      name="zonaCAS"
                      id="zona"
                      onChange={handleInputChange}
                    >
                      <option defaultValue desabled>Seleccione Zona</option>
                      <option value="Norte">Norte</option>
                      <option value="Centro">Centro</option>
                      <option value="Sur">Sur</option>
                    </select>

                    <label htmlFor="valor">Valor 💵</label>
                    <input
                      id="valor"
                      type="number"
                      name="costoCAS"
                      className="form-control w-50"
                      placeholder="ingrese valor"
                      onChange={handleInputChange}
                    ></input>

                    <label htmlFor="Descripcion">Descripcion</label>
                    <textarea
                      name="descripcionCAS"
                      id="Descripcion"
                      cols="30"
                      rows="5"
                      className="form-control"
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-primary w-75"
                onClick={() => agregarCasa(form)}
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
     

</div>

    
  );
}

export default ModalAgregarCasa;

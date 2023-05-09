import { context } from "../context/context";
import { arrendarCasa } from "../data/apis";
import Swal from "sweetalert2";

function ModalCasas() {
  const { casaDisponible } = context();

  return (
    <div data-bs-spy="scroll" data-bs-target="#exampleModal">
      <div
        class="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        role="tablist"
      >
        <div class=" modal-dialog modal-xl modal-dialog-scrollable">
          <div class="modal-content">
            {casaDisponible.map((item, index) => (
              <>
                <div key={index} class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Casa Tipo {item.tipoCAS}
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-7">
                        <img
                          src="https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg"
                          className="mx-1"
                          width={"70%"}
                          alt=""
                        />
                      </div>
                      <div className="col-5 ">
                        <h3>Informacion</h3>
                        <div className="d-flex">
                          <div className="text-start mt-3 mx-5    font-bold font-bold">
                            <p className="fw-bold">Tipo de Casa</p>
                            <p>{item.tipoCAS}</p>
                            <p className="fw-bold">Direccion</p>
                            <p>{item.direccionCAS}</p>
                          </div>

                          <div className="mt-3  mx-5">
                            <p className="fw-bold">Medidas</p>
                            <p>18x 12 metros</p>
                            <p className="fw-bold">capacidad</p>
                            <p>{item.capacidadCAS} personas</p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="mx-5">
                            <p className="fw-bold">Numeros de Pisos</p>
                            <p>{item.NrPisosCAS} pisos</p>
                            <p  >Zona: {item.zonaCAS}</p>
                            
                          </div>
                          <div>
                            <p className="fw-bold fs-4">Valor💵</p>
                            <p>${item.costoCAS}.000</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div>
                          <p className="fw-bold">Descripcion</p>
                          <p>
                            {item.descripcionCAS} corporis! Lorem ipsum dolor
                            sit amet consectetur, adipisicing elit. Impedit quo
                            sunt veritatis neque, laudantium nihil adipisci,
                            dolor quidem facilis ducimus quis, suscipit commodi
                            harum aliquid voluptas. Harum omnis non deserunt.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-footer d-flex justify-content-center">
                  <button
                    type="button"
                    class="btn btn-secondary w-25"
                    data-bs-dismiss="modal"
                  >
                    Cerar
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary w-25"

                    onClick={() => {
                      Swal.fire({
                        title: "¿Seguro que desea Arrendar esta propiedad?",
                        icon: "question",
                        showDenyButton: true,
                        denyButtonText: "No",
                        confirmButtonText: "Si",
                      }).then((response) => {
                        if (response.isConfirmed) {
                          Swal.fire({
                            icon: "success",
                            title: "Alquilado correctamente ",
                            timer: "2000",
                          })
                          button: arrendarCasa(
                            item.idcasa,
                            parseInt(localStorage.getItem("user")),
                            parseInt( item.costoCAS),
                            location.reload()
                          );
                        }
                      });
                    }}
                      
                    
                  
                     
                  >
                    
                    Arrendar
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCasas;

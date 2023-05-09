import { useEffect } from "react";
import { context } from "../../context/context";

function CasasAlquiladas() {
  const { loadCasasOcupadas, casasOcupadas } = context();

  useEffect(() => {
    loadCasasOcupadas();
  }, []);
  return (
    <div>
      <div className="container">
        <table className="table mt-5 ">
          <thead>
            <td colSpan={9} className="bg-success text-white fs-4 p-4">
              CASAS ALQUILADAS
            </td>
            <tr>
              <td className="fw-bold" colSpan={2}>Imagen</td>
              <td className="fw-bold">Nombre Responsable</td>
              <td className="fw-bold">Direccion</td>
              
              <td className="fw-bold">fecha</td>
              <td className="fw-bold">Valor</td>
              <td className="fw-bold">Estado</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            {casasOcupadas.map((item, index) => (
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

                <tr>
                  

                  <td>{item.nombre_usuario}</td>
                  <td>{item.direccion_casa}</td>
                  <td>{item.Fecha_de_inicio}</td>
                 

                  <td>${item.Valor_del_alquiler}.000</td>
                  <td>
                    {item.estado == true 
                    ?(
                      <p className="bg-warning btn btn-warning p-1 w-75">
                      Alquilada
                    </p>

                    ):(
                      <p className="text-danger  p-1 w-75">
                      Cancelada
                    </p>
                    )
                    }
                    
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

export default CasasAlquiladas;

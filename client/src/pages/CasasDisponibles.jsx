import axios from "axios";
import { useEffect, useState } from "react";
import ModalCasas from "../components/ModalCasas";
import { context } from "../context/context";

function CasasDisponibles() {
  const {
    loadCasasDisponibles,
    casasDisponibles,
    loadCasaDisponible,
    setcasasDisponibles,
  } = context();
  const [search, setsearch] = useState("");
  const [selectZone, setSelectZone] = useState("");
  // const [selectCost, setSelectCost] = useState("");

  // const SearchInputCahnge=()=>{

  //   const actualizacion= casasDisponibles.filter((item)=>(

  //   ))
  // }

  const handleSumbit = (e) => {
    e.preventDefault()

    setcasasDisponibles(
      casasDisponibles.filter((item) =>
        item.direccionCAS.toLowerCase().includes(search.toLowerCase())
      )
    );
  };


  // const handleSumbitSelect = () => {
   

  //   if (selectZone === "") {
  //     setcasasDisponibles(casasDisponibles);
  //   } else {
  //     setcasasDisponibles(
  //       casasDisponibles.filter((item) =>
  //         item.zonaCAS.toLowerCase().includes(select.toLowerCase())
  //       )
  //     );
  //   }
  // };

//   const load= async()=>{
   
//     const user={
//       zonaCAS:selectZone
//     }
    
//  const {data}=await axios.get("http://localhost:4000/casasdisponiblesZona",user)
//  setcasasDisponibles(data)
//   }

  // const handleZoneSelect = () => {
  
    

  //   // if (selectZone === "" ){
  //   //   setcasasDisponibles(casasDisponibles);
  //   // } else {
  //     setcasasDisponibles(
  //       casasDisponibles.filter(
  //         (item) =>
  //           item.zonaCAS == selectZone
            
            
  //       )
  //     );
      
  //   }
  

  // const handleCostSelect = (e) => {
  //   setSelectCost(e.target.value);

  //   if (selectCost === "" && selectZone === "") {
  //     setcasasDisponibles(casasDisponibles);
  //   } else {
  //     setcasasDisponibles(
  //       casasDisponibles.filter(
  //         (item) =>
  //           (selectZone === "" ||
  //             item.zonaCAS.toLowerCase().includes(selectZone.toLowerCase())) &&
  //           (selectCost === "" || item.costoCAS <= parseInt(selectCost))
  //       )
  //     );
  //   }
  // };
  useEffect(() => {
    loadCasasDisponibles();
  }, [search]);

  return (
    <div class="container text-center mt-5">
      <div className="d-flex justify-content-center">
        <form
          className="d-flex justify-content-center w-50"
          onSubmit={handleSumbit}
        >
          <input
            type="text"
            placeholder="ingrese la direccion"
            className="form-control"
            onChange={(e) => setsearch(e.target.value)}
          />
          <button className="btn btn-primary p-2" style={{ width: "120px" }}>
            Buscar
          </button>
        </form>
        <form className="w-50" >
          <select onChange={(e)=> setSelectZone(e.target.value)}>
            <option value={""}>Todas las zonas</option>
            <option value={"Norte"}>Norte</option>
            <option value={"Centro"}>Centro</option>
            <option value={"Sur"}>Sur</option>
            
          </select>
          
          
          {/* <select onChange={handleCostSelect}>
            <option value={""}>Todos los precios</option>
            <option value={500}>Menos de $500.000</option>
            <option value={1000}>Menos de $1.000.000</option>
            <option value={2000}>Menos de $2.000.000</option>
          </select> */}
        </form>
      </div>

      <div class="row mt-3">
        {casasDisponibles.map((item, index) => (
          <div class="col" key={index}>
            <div className="card my-2 " style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src="https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg"
                width={"70%"}
                alt=""
              />

              <div className="card-body d-flex justify-content-center">
                <table>
                  <tbody>
                    <>
                      <tr>
                        <th>Tipo de casa</th>
                        <th>N.pisos</th>
                      </tr>
                      <tr>
                        <td>{item.tipoCAS}</td>
                        <td>{item.NrPisosCAS}</td>
                      </tr>
                      <tr>
                        <th>Medidas</th>
                        <th>Direccion </th>
                      </tr>
                      <tr>
                        <td>618x 512 metros</td>
                        <td className="mx-2">{item.direccionCAS}</td>
                      </tr>
                      <tr>
                        <th colSpan={2}>Valor</th>
                      </tr>
                      <tr>
                        <td colSpan={2}>${item.costoCAS}.000 </td>
                      </tr>
                      <tr>
                        <th colSpan={2}>
                          <div>
                            <button
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              className="btn btn-primary"
                              onClick={() => loadCasaDisponible(item.idcasa)}
                            >
                              Ver mas detalles
                            </button>
                          </div>
                        </th>
                      </tr>
                    </>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ModalCasas />
    </div>
  );
}

export default CasasDisponibles;

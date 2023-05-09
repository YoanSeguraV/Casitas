import { createContext, useContext, useState } from "react";
import {
  getCasas,
  getCasa,
  getCasasOcupadas,
  getCasasInhabilitadas,
  getCasaArrendadaId,
  InhabilitarCasaDisponible,
  getPerfil,
} from "../data/apis";
export const ServiceContext = createContext();

export const context = () => {
  const Context = useContext(ServiceContext);
  if (!Context) {
    throw new Error("no funciona el context");
  }
  return Context;
};

export const ServiceContextProvider = ({ children }) => {
  const [casasDisponibles, setcasasDisponibles] = useState([]);
  const [casaDisponible, setcasaDisponible] = useState([]);
  const [casasOcupadas, setcasasOcupadas] = useState([]);
  const [casasInhabilitadas, setcasasInhabilitadas] = useState([]);
  const [casasArrendadas, setcasasArrendadas] = useState([]);
  const [perfil, setperfil] = useState([]);

  const loadCasasDisponibles = async () => {
    const response = await getCasas();
    setcasasDisponibles(response);
  };

  const loadCasaDisponible = async (id) => {
    console.log(id);
    const response = await getCasa(id);
    setcasaDisponible(response);
  };

  const loadCasasOcupadas = async () => {
    const response = await getCasasOcupadas();
    setcasasOcupadas(response);
  };
  const loadCasasInhabilitadas = async () => {
    const response = await getCasasInhabilitadas();
    setcasasInhabilitadas(response);
  };
  const perfilUsuario = async () => {
    const response = await getPerfil(localStorage.getItem("user"));
    setperfil(response)
  };

  const arrendarCasas = async () => {
    const response = await getCasaArrendadaId(localStorage.getItem("user"));
    setcasasArrendadas(response);
  };

  //   administrador

  const inhabilitarcasDisponible = async (id) => {
    const response = await InhabilitarCasaDisponible(id);
    location.reload();
  };

  return (
    <ServiceContext.Provider
      value={{
        loadCasasDisponibles,
        casasDisponibles,
        setcasasDisponibles,
        loadCasasOcupadas,
        casasOcupadas,
        loadCasasInhabilitadas,
        casasInhabilitadas,
        loadCasaDisponible,
        casaDisponible,
        inhabilitarcasDisponible,
        arrendarCasas,
        casasArrendadas,
        perfilUsuario,
        perfil
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

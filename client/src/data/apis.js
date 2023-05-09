import axios from "axios";
import Swal from "sweetalert2";

export const getCasas = async () => {
  const { data } = await axios.get("http://localhost:4000/casasdisponibles");
  console.log(data);

  return data;
};

export const getCasa = async (id) => {
  console.log(id);
  const { data } = await axios.get(
    `http://localhost:4000/casasdisponibles/${id}`
  );
  console.log(data);
  return data;
};

export const getCasasOcupadas = async () => {
  const { data } = await axios.get("http://localhost:4000/casasocupadas");
  console.log(data);
  return data;
};

export const getCasasInhabilitadas = async () => {
  const { data } = await axios.get("http://localhost:4000/casasinhabilitadas");
  console.log(data);
  return data;
};

export const arrendarCasa = async (idCasa, idUsuario, costoCAS) => {
  
  
  try {
    const response = await axios.patch("http://localhost:4000/arrendar", {
      idCasa,
      idUsuario,
      costoCAS,
  }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
export const cancelarArriendo = async (id) => {
  
  try {
    console.log(id)
    const response = await axios.patch(
      `http://localhost:4000/estados/${id}`,
      
    );
    if(response.status === 200 && response.data){
      Swal.fire({
        icon:"success",
        title:response.data,
        timer:1500,
        button:location.reload()
      })
    }
  } catch (error) {
    if(error.response.Status === 400){
      Swal.fire({
        icon:"error",
        title:error.response.data,
        timer:1500
      })
    }
  }
};

export const getCasaArrendadaId = async (id) => {
  console.log(id);
  const { data } = await axios.get(`http://localhost:4000/arrendar/${id}`);
  console.log(data);
  return data;
};

export const agregarUsuario = async (user) => {
  console.log(user);
  try {
    const response = await axios.post(
      `http://localhost:4000/registerusuario`,
      user
    );
    if(response.status === 200 && response.data) 
    Swal.fire({
      icon:"success",
      title:response.data,
      timer:2000,
     
    }).then(()=>{
      location.href="/login"
    })
  } catch (error) {

    if (error.response.status === 400) {
      Swal.fire({
        text: error.response.data ,
        icon: "warning",
        timer: 15000,
      });
    }
    
  }
};

export const loginUsuario = async (user) => {
  console.log(user);
  try {
    const response = await axios.post(
      `http://localhost:4000/loginusuario`,
      user
    );
    if (response.status === 200 && response.data) {
      Swal.fire({
        title: "Bienvenido a Mis Casitas",
        icon: "success",
        timer: 1500,
      }).then(() => {
        (location.href = "/casas"),
          localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.idUsuario);
        localStorage.setItem("name", response.data.nombreUSU);
      });
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        text: error.response.data ,
        icon: "warning",
        timer: 15000,
      });
    }
  }
};


export const getPerfil = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/perfil/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updatePerfil = async (id,form) => {
  try {
    const response = await axios.patch(
      `http://localhost:4000/perfi/${id}`,form
    );
    if(response.status === 200 ){
      Swal.fire({
        title: "Actualizado Correctamente",
        icon: "success",
        timer: 1500,
      })
      location.reload();
    }
    
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        text: error.response.data ,
        icon: "warning",
        timer: 15000,
      });
    }
  }
  }


//!administrador

export const loginAdmins = async (user) => {
  console.log(user);
  try {
    const response = await axios.post(`http://localhost:4000/login`, user);
    if (response.status === 200 && response.data) {
      Swal.fire({
        title: "Bienvenido  Administrador",
        icon: "success",
        timer: 1500,
      }).then(() => {
        (location.href = "/administrador"),
          localStorage.setItem("tokenAdmin", response.data);
      });
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        text: error.response.data ,
        icon: "warning",
        timer: 15000,
      });
    }
  }
};

export const InhabilitarCasaDisponible = async (id) => {
  try {
    const response = await axios.patch(
      `http://localhost:4000/casasestado/${id}`,
      {
        desactivadaCAS: 1,
        disponibleCAS: 0,
        ocupadaCAS: 0,
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const habilitarCasa = async (id) => {
  try {
    const response = await axios.patch(
      `http://localhost:4000/casasestado/${id}`,
      {
        desactivadaCAS: 0,
        disponibleCAS: 1,
        ocupadaCAS: 0,
      }
    );
    location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const agregarCasa = async (user) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/agregandocasa`,
      user
    );
    if(response.status === 200 && response.data){
    Swal.fire({
      icon:"success",
      title:response.data,
      timer:2000
    }).then(()=>{
      location.reload()
    })
  }
  } catch (error) {
    if(error.response.status === 400){
      Swal.fire({
        icon:"error",
        title: error.response.data,
        timer:2000
      })
    }
  }
};

import React from "react";
import { Link, Outlet } from "react-router-dom";
import profile from "../assets/profile.jpg";
function Navbar() {

  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark  ">
        <div className="container-fluid">
          <Link to={"/casas"} className="navbar-brand text-primary">
            {" "}
            CASITAS🏘️
          </Link>
          <Link to={"arrendadas"} className="text-white navbar-brand mx-4">
            Arrendadas
          </Link>
          <div className="  navbar-collapse d-flex justify-content-end mx-2">
            <img
              className=" rounded-circle mx-3"
              src={profile}
              width={"3%"}
              alt=""
            />
            <div class="btn-group">
              <button type="button" class="btn btn-danger">
               {localStorage.getItem("name")}
              </button>
              <button
                type="button"
                class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <Link to={"perfil"} className="dropdown-item">
                  Perfil
                </Link>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/"} class="dropdown-item" href="#" onClick={()=>localStorage.clear()}>
                    Cerrar Sesion
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;

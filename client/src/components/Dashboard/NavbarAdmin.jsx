import { Link, Navigate, Outlet } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import Sidebar from "./Sidebar";
import { FaAlignJustify } from "react-icons/fa";
import Swal from "sweetalert2";
function NavbarAdmin() {
  const handleLocalRemove = (tokenAdmin) => {
    localStorage.removeItem("tokenAdmin");
    Swal.fire({
      title: "Sesion Cerrada",
      icon: "success",
      timer: 1500,
      button: (location.href = "/"),
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark  ">
        <div className="container-fluid">
          <Link
            to={"/administrador"}
            className="navbar-brand text-primary mx-2 fw-bold"
          >
            {" "}
            CASITAS 🏘️
          </Link>
          <button
            className="bg-dark btn btn-dark mx-5"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <FaAlignJustify className="text-white fs-5"></FaAlignJustify>
          </button>
          <div className="  navbar-collapse d-flex justify-content-end mx-2">
            <img
              className=" rounded-circle mx-3"
              src={profile}
              width={"3%"}
              alt=""
            />
            <div class="btn-group">
              <button type="button" class="btn btn-danger">
                Felipe Segura
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
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link
                    class="dropdown-item"
                    href="#"
                    onClick={() => handleLocalRemove()}
                  >
                    Cerrar Sesion
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar />
      <Outlet />
    </div>
  );
}

export default NavbarAdmin;

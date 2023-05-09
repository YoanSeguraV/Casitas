import React from "react";
import { Link } from "react-router-dom";
import { BiHomeCircle } from "react-icons/bi";

function Sidebar() {
  return (
    <div
      class="offcanvas offcanvas-start mt-5"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
      style={{width:"20rem",marginTop:"30px"}}
    >
      <div class="offcanvas-header">
        
       
      </div>
      <div class="offcanvas-body">
       <ul>
        
        <Link to={"/administrador"} className="nav-link fs-5 my-4 "> <BiHomeCircle className="fs-4 text-primary"/> Casas Disponibles</Link>
        
        
        <Link to={"alquiladas"} className="nav-link fs-5 my-4"><BiHomeCircle className="fs-4 text-primary"/> Casas Alquiladas</Link>
        
       
       <Link to={"inhabilitadas"} className="nav-link fs-5 my-4"><BiHomeCircle className="fs-4 text-primary"/> Casas Inhabilitadas</Link>
       
        
       </ul>
      </div>
    </div>
  );
}

export default Sidebar;

import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutesAdmin() {
  let isLogged = localStorage.getItem("tokenAdmin");

  if (!isLogged) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />
}

export default PrivateRoutesAdmin;

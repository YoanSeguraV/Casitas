import {Navigate,Outlet} from 'react-router-dom'

function PrivateRouter() {
    let isLogged=localStorage.getItem("token")

    if(!isLogged){
       return  <Navigate to={"/"}/>
    }
  return (
    <Outlet/>
  )
}

export default PrivateRouter

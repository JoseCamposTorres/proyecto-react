// import { useEffect, useState } from "react"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import "./Perfil.css"
const Perfil = () => {
    const usuario = useContext(UserContext)

  return (
    <>
      <div className="perfil">
        <h1>Perfil de {usuario.name}</h1>
        <div>Usuario desde : {usuario.registered}</div>
      </div>
    </>
  );
}
export default Perfil

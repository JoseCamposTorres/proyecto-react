import axios, { Axios } from "axios";
import { useState } from "react";

const Login = () => {

    const[user, setUser] = useState({
        email: "",
        password: ""
    })

    const submit = (e) => {
        e.preventDefault();
        //Utilizando REQRES
        axios.post(`https://reqres.in/api/login`,user)
        .then(data => {
            localStorage.setItem("tokenEDmarket")
        })
        .catch(e => console.error(e))
    
    }
  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo Electrónico</label>
          <input required onChange={(e) => {
            setUser({
                ...user,
                email: e.target.value
                })
          }} type="email" id="email" name="email" />
        </div>
        <div className="field">
          <label required htmlFor="password">Contraseña</label>
          <input onChange={(e) => {
            setUser({
                ...user,
                password: e.target.value
                })
          }}  type="password" id="password" name="password" />
        </div>
    <div className="submit">
          <input type="submit" value="Ingresar" />
        </div>
      </form>
    </div>
  );
};
export default Login;

import axios, { Axios } from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigation = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState();

  const submit = (e) => {
    e.preventDefault();
    setCargando(true);
    setError(null)
    //Utilizando REQRES
    axios
      .post(`https://reqres.in/api/login`, user)
      .then((data) => {
        setCargando(false);
        localStorage.setItem("tokenEDmarket", data.data.token);
        navigation("/");
      })
      .catch((e) => {
        setCargando(false);
        console.error(e);
        setError(e.response.data.error);
      });
  };

  if (localStorage.getItem("tokenEDmarket"))
    return <Navigate to="/"></Navigate>;

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <p class="comentario">
        Para iniciar sesión, registre las siguientes credenciales utilizando:
        <a href="https://reqres.in/" class="link1" target="_blank">
          REQRES
        </a>
      </p>
      <p class="comentario">
        <b>Correo Electrónico:</b> eve.holt@reqres.in <br />
        <b>Password:</b> cityslicka
      </p>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
            type="email"
            name="email"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
            type="password"
            name="password"
          />
        </div>
        <div className="submit">
          <input
            type="submit"
            value={cargando ? "Cargando..." : "Ingresar"}
            className="link"
          />
        </div>
      </form>
      {error && <span className="error">Error: {error}</span>}
    </div>
  );
};
export default Login;

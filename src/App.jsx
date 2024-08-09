import axios from "axios"
import { useEffect, useState } from "react"
import "./app.css";

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState([])

  useEffect(() => {
    //  fetch(`${API_URL}assets`)
    //  .then((resp) => resp.json())
    axios.get(`${API_URL}assets`)
     .then((data) => {
      setCriptos(data.data.data)
     })
     .catch(() => {
      console.log("Error fetching data");
     })
  },[])

  if (!criptos) return <span></span> 
    
  

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ol>
        {
          criptos.map(({id, name, priceUsd}) => (
            <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
            ))
        }
      </ol>
    </>
  )
}

export default App

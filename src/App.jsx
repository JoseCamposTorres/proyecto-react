import axios from "axios"
import { useEffect, useState } from "react"
import "./app.css";
import Cripto from "./Cripto";

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
    <div className="app-container">
      <h1>Lista de Criptomonedas</h1>
      <div className="cripto-container">
        {
          criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
           <Cripto 
           key={id} 
           name={name} 
           priceUsd ={priceUsd} 
           symbol={symbol} 
           changePercent24Hr={changePercent24Hr}/>
            ))
        }
      </div>
    </div>
  )
}

export default App

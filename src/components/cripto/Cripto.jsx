import "./Cripto.css"
import { Link } from "react-router-dom"

const Cripto = ({id, name, priceUsd, symbol, changePercent24Hr}) => {
    return(
        <div className="cripto">
            <h2>{name}</h2>
            <div className="info">
                <p><span className="label">Precio: </span>{parseFloat(priceUsd).toFixed(3)}</p>
                <p><span className="label">Código: </span>{symbol}</p>
                <p><span className="label">Variación 24hrs: </span>
                <span className={parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>
                    {parseFloat(changePercent24Hr).toFixed(3)}%
                </span>
                </p>
                <Link to={`/criptomonedas/${id}`}>Ver detalles</Link>
            </div>
        </div>



        // <div key={id}>Nombre: {name} Precio: </div>
    )
}
 export default Cripto
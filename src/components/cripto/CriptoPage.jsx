import usePeticion from "../../hooks/usePeticion";
import "./CriptoPage.css";

import { useParams } from "react-router-dom";
import CriptoInfo from "./info/CriptoInfo";
import CriptoHistory from "./info/CriptoHistory";

const CriptoPage = () => {
  const params = useParams();

  const [cripto, cargandoCripto] = usePeticion(`assets/${params.id}`);
  const [history, cargandoHistory] = usePeticion(`assets/${params.id}/history?interval=d1`);

  if (cargandoCripto || cargandoHistory) return <span>Cargando.....</span>

  return (
    <>
      <div className="cripto-page-container">
        {
            cripto && <CriptoInfo cripto={cripto} />
        }
        {
            history && <CriptoHistory history={history} />
        }
      </div>
    </>
  );
};

export default CriptoPage;

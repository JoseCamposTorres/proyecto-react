import { useEffect, useState } from "react";
import axios from "axios";

const usePeticion = (endpoint) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [data, setData] = useState();
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando[true]

    axios
      .get(`${API_URL}${endpoint}`)
      .then((data) => {
        setData(data.data.data);
        setCargando(false)
      })
      .catch(() => {
        setCargando(false)
        console.log("Error fetching data");
      });

  }, []);

  return [data, cargando];
};

export default usePeticion;

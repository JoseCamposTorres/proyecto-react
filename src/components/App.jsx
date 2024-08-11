import Menu from "./menu/Menu";
import { Navigate, Outlet } from "react-router-dom";
import "./App.css"

const App = () => {
  if (!localStorage.getItem("tokenEDmarket"))
    return <Navigate to="/login"></Navigate>;

  return (
    <>
      <div className="app-container">
        <Menu />
        <Outlet />
      </div>
    </>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../layouts/Header/navbar";
import Signup from "../pages/Signup";
import PopularRegion from "../pages/Center/center";
import Private from "../layouts/Private";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Mainprivate from "../layouts/Headerprivate";
import Costa from "../pages/PaginaCosta";
import Sierra from "../pages/PaginaSierra";
import EndSierra from "../pages/PaginaFinal";
import EndPuno from "../pages/PaginaFinalPuno";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROUTE DEL MAIN (PUBLICAS) */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Main />}>
          <Route path="/" element={<PopularRegion />} />
        </Route>
        {/* ROUTE DEL USUARIO (PRIVADAS) */}
        <Route element={<Mainprivate />}>
        <Route path="/home" element={<PopularRegion />} />
        <Route path="/costa" element={<Costa />} />
        <Route path="/sierra" element={<Sierra />} />
        <Route path="/EndSierra" element={<EndSierra />} />
        <Route path="/EndPuno" element={<EndPuno />} />
          <Route element={<Private />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

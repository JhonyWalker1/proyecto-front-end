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
import Selva from "../pages/PaginaSelva";
import Puno from "../pages/PaginaFinalPuno";
import Cusco from "../pages/PaginaFinalCusco";
import EndAmazonas from "../pages/PagFinalAmazonas";
import EndIca from "../pages/PagFinalIca";
import EndLima from "../pages/PagFinalLima";
import EndLoreto from "../pages/PagFinalLoreto";



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROUTE DEL MAIN (PUBLICAS) */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<login />} />
        <Route element={<Main />}>
          <Route path="/" element={<PopularRegion />} />
        </Route>
        {/* ROUTE DEL USUARIO (PRIVADAS) */}
        <Route element={<Mainprivate />}>
          <Route path="/home" element={<PopularRegion />} />
          <Route path="/home/costa" element={<Costa />} />
          <Route path="/home/sierra" element={<Sierra />} />
          <Route path="/home/selva" element={<Selva />} />
          <Route path="/home/sierra/puno" element={<Puno />} />
          <Route path="/home/sierra/cusco" element={<Cusco />} />
          <Route path="/home/selva/amazonas" element={<EndAmazonas />} />
          <Route path="/home/costa/ica" element={<EndIca />} />
          <Route path="/home/costa/lima" element={<EndLima />} />
          <Route path="/home/selva/loreto" element={<EndLoreto />} />
         
          <Route element={<Private />}>
            <Route path="/home/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

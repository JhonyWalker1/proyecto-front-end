import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import Cotitours from "../pages/Compratours"
import Home from "../pages/Home";
import BasketView from "../pages/BasketView";

import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';


const Router = () => {

  const { tour } = useContext(UserContext)
  return (
    <BrowserRouter>
      <Routes>
        {/* ROUTE DEL MAIN (PUBLICAS) */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<login />} />
        <Route element={<Main />}>
        <Route path="/" element={<PopularRegion />} />
        <Route path="/" element={<Home/>}/>
        <Route path="main/basketView" element={<BasketView/>}/>
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
          <Route path="/home/pages/Compratours/" element={<Cotitours />} />
          <Route path="/home/pages/Home" element={<Home />} />
          <Route element={<Private />}>
            <Route path="/home/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

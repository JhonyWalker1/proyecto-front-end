import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../pages/Header/navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

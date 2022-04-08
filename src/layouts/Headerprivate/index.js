
import React from "react";
import "./index.css";
import ct from "../../assets/Image/ct.png";
import { ButtonGroup, Button,Grid, TextField  } from "@mui/material";
import { Outlet, Link } from "react-router-dom";





const Mainprivate = () => {

    return (
      <div>
        <nav className="navegador">
          <Grid container alignItems="center" ml={5} mr={5}> 
            <Grid item md={2}>
            <img className="img-logo" id={1} src={ct} />
          </Grid>
          <Grid item md={7}>
            <ul className="ul-ecommerce">
              <li>
                <a href="/home"> Inicio</a>{" "}
              </li>
              <li>
                <a href="#"> Nosotros</a>
              </li>
              <li>
                <a href="#"> Formulario</a>
              </li>
              <li>
                <a href="#">Acerca de Nosotros</a>
              </li> 
              </ul>  
              </Grid>
              
          
          <Grid item md={3} sx={{textAlign:"center"}}>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button component={Link} to="/profile">Mi Perfil</Button>
              <Button component={Link} to="/login">Cerrar Sesión</Button>
            </ButtonGroup>
          </Grid>
          </Grid>
        </nav>
        <Outlet />
      </div>
    );
  };
  
  export default Mainprivate;
import React from "react";
import "./navbar.css";
import ct from "../../assets/Image/ct.png";
import { ButtonGroup, Button,Grid, TextField  } from "@mui/material";
import { Outlet, Link } from "react-router-dom";



const Main = () => {

  return (
    <div>
      <nav className="navegador">
        <Grid container alignItems="center" ml={5} mr={5}> 
          <Grid item md={2}>
          <img className="img-logo" id={1} src={ct} />
        </Grid>
        <Grid item md={4}>
          <ul className="ul-ecommerce">
            <li>
              <a href="#"> Inicio</a>{" "}
            </li>
            <li>
              <a href="#"> Nosotros</a>
            </li>
            <li>
              <a href="#"> Formulario</a>
            </li>
            <li>
              <a href="#">Categorias</a>
            </li> 
            </ul>  
            </Grid>
            <Grid item md={3} className="txt-field">
            <TextField
              variant="standard"
              sx={{
                width: 250,
              }}
              label="Search for an item..."
            />   
            
        </Grid>
        <Grid item md={3} sx={{textAlign:"center"}}>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button component={Link} to="/login">Iniciar Sesión</Button>
            <Button component={Link} to="/signup">Registrarse</Button>
          </ButtonGroup>
        </Grid>
        </Grid>
      </nav>
      <Outlet />
    </div>
  );
};

export default Main;

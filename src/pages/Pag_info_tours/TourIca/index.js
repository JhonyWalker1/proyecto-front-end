import { useState } from "react";
import {Grid, Container, TextField} from "@mui/material";
import { Button } from "bootstrap";
import LogoCT from "../../../assets/Image/LogoCT.png";
import { useformik } from "formik";
import { AdapterDateFns, LocalizationProvider, DatePicker } from "@mui/lab";

const TourIca = () =>{
    const [dateSelect, setDateSelect] = useState(null);



    return (
        <div>
            <nav>
                <Grid container alignItems="center">
                    <Grid item md={4} >
                        <img src={LogoCT} alt="" />
                    </Grid>
                    <Grid item md={4} >
                        <TextField label="SIGUENOS" />

                    </Grid>
                    <Grid item md={4} >
                        <ul>
                            <li>
                                <a href="/">+511 912 653 451</a>
                            </li>
                            <li>
                                <a href="/">CONTACTO</a>
                            </li> 
                        </ul>
                    </Grid>
                </Grid> 
            </nav>
        </div>
    );
};


<Grid container>
        <Grid item md={10}>
                <img
                    src="https://www.majestytourica.com/noticias/152031272239269.jpg"
                    width={750} >
                </img>
                </Grid>
                <Grid>
                    <form>
                        <Grid item md={2}>
                            <h1>¡Solicite Información!</h1>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField label="Nombre y Apellido" name ="name" fullWidth />
                        </Grid> 
                        <Grid item md={12} xs={12}>
                            <TextField label="Ciudad donde se Ubica" name="country" type="country" fullWidth />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField label="Numero de Celular" name="phone_number" type="number" fullWidth />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker 
                                label="Fecha de Excursión" 
                                name="date_born" 
                                value={dateSelect}
                                onChange={(date) => {
                                    setDateSelect(date);
                                }}
                                renderImput={(params) => <textfield  fullWidth {...params} />} />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField label="N° de Personas" name="number" type="number" fullWidth />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField label="Email" name="email" type="email" fullWidth />
                        </Grid>
                        <Button variant="contained">ENVIAR</Button>
                    </form>
                </Grid>
            </Grid>

export default TourIca;
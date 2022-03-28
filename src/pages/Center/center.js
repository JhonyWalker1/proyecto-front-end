import { useState, useEffect } from "react";
import {Container, Grid, Button} from "@mui/material"
import {getAtractivo} from "../../service/firestore";
import "./center.css";

const PopularRegion = () => {
    const [region, setRegion] = useState([]);

    const fetchRegion = async () =>{
        const data = await getAtractivo();
        console.log(data);
        setRegion(data);
    };

    useEffect(() => {
        fetchRegion();
    }, []);

    return (
        <Container maxWidth="xl">
            <Grid container mt={1}>
                <Grid item md={12} sm={12} xs={12}>
                    <h1>Popular Region</h1>
                </Grid>
                {region.length>0 && region.map((reg)=>(
                    <Grid item md={4} sm={6} xs={12}  className="card">
                        <img className="product-photo" src={reg.photo} alt=""/>
                        <div className="description">
                            <h4>{reg.nombre}</h4>
                            <p>{reg.contenido}</p>
                        </div>
                        <div className="btn-ver">
                        <Button variant="contained" color="primary" >Ver más </Button>
                        </div>
                    </Grid>
                ))}
            </Grid>
       </Container>
    );
};

export default PopularRegion;
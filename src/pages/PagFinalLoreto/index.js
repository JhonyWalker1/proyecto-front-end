import { Container, Grid } from "@mui/material";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import "../PaginaFinalPuno/index.css";

const EndLoreto = () => {
  return (

    <Grid container spacing={3}>
    <Grid item md={12} xs={12}>
      <h2>Loreto</h2>
    </Grid>
    <Grid item md={12} xs={12}>
      <h2>Hoteles</h2>
    </Grid>
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
              image="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/264923693.jpg?k=60b63a826aec5540bea162840dea82f690d489f822e9604ce1fb0cc84ee699f9&o="              alt="solOrienteIquitos"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Nativo Hotel
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Loreto
                <a href="https://www.casasanblas.com/es/"></a>
                
              </Typography>         
            </CardContent>         
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"      
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/cumpanamaYurimaguasPosada.jpg?raw=true"
            alt="cumpanamaYurimaguasPosada"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Cumpanama Yurimaguas Posada 
               </Typography>
              <Typography variant="body2" color="text.secondary">
                Loreto
              </Typography>
             
            </CardContent>
             <a href='https://wifala-harmony-hotel.negocio.site/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
            image="https://tnews.com.pe/wp-content/uploads/2016/01/190117_f002.jpg"
            alt="Samiria Jungle Hotel"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Samiria Jungle Hotel  
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Loreto
              </Typography>         
            </CardContent>
             <a href='http://amaru-colonial.cuscohotelsweb.com/es/'></a>
     </Card>  
     </Grid>
     <Grid item md={12} xs={12}>
      <h2>Restaurantes</h2>
    </Grid>
    
    <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/mijanoIquitosRestaurante.jpg?raw=true"
            alt="mijanoIquitosRestaurant"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Mijano Restaurant
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Loreto
              </Typography>
             
            </CardContent>
             <a href='https://www.facebook.com/LaCusquenitaCusco/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia 
            className="img-sierra"        
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/sombreroPajaIquitosRestaurante.jpg?raw=true"
            alt="sombreroPajaIquitosRestaurante"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              El Sombrero Paja Restaurante
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Loreto
              </Typography>
             
            </CardContent>
             <a href='https://www.facebook.com/yakurestaurantecocinadealtura/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/terrazaYurimaguasRestaurante.jpg?raw=true"
            alt="terrazaYurimaguasRestaurante"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              La Terraza Resto Bar
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Loreto
              </Typography>
             
            </CardContent>
             <a href='https://carta.menu/restaurants/cusco/inka-grill-2'></a>
     </Card>  
     </Grid>
    
     
    
     <Grid item md={12} xs={12}>
      <h2>Tours</h2>
    </Grid>
    
    <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/lagunaAzulLoreto.jpg?raw=true"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
               Laguna Azul - Loreto
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Wild Peru Travels
              </Typography>
            </CardContent>
             <a href='https://www.wildperutravels.com/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/pacayaSamiriaReservaLoreto.jpg?raw=true"
            alt="pacayaSamiriaReservaLoreto"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">          
             Reserva Nacional Pacaya Samiria 
              </Typography>
              <Typography variant="body2" color="text.secondary"> 
            Condor Travel Agencia de Viajes
              </Typography>         
            </CardContent>
             <a href='https://condortravel.com/es/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
            image="https://avataramazonlodge.com/adminavatar/img/Avatar%20Amazon%20Lodge%20&%20Canopy%20Park%20Iquitos%20Per%C3%BA%20(12).jpg"
            alt="AvatarAmazonLodge&CanopyPark"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">          
              Avatar Amazon Lodge & Canopy Park
              </Typography>
              <Typography variant="body2" color="text.secondary"> 
            Travel Agencia de Viajes
              </Typography>         
            </CardContent>
             <a href='https://condortravel.com/es/'></a>
     </Card>  
     </Grid>
     
     <Grid container mt={1}>
        <Carousel fade className="carousel-width">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pacaya_Samiria_Mara%C3%B1on_River_%2866217327%29.jpeg/1200px-Pacaya_Samiria_Mara%C3%B1on_River_%2866217327%29.jpeg"
              alt="Rio Amazonas"
            />
            <Carousel.Caption>
              <h1>Rio Amazonas</h1>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://adventuretravelperu.com/es/wp-content/uploads/2015/12/reserva_nacional_allpahuayo_mishana_peru_turismo.jpg"
              alt="Reserva Nacional Allpahuayo Mishana "
            />
            <Carousel.Caption>
              <h1>Reserva Nacional Allpahuayo Mishana </h1>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://touristear.com/wp-content/uploads/2019/09/crucero-en-la-selva-800x532.jpg"
              alt="turismolunahuana"
            />
            <Carousel.Caption>
              <h1>Turismo en Loreto</h1>
        
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Grid>

    </Grid>
  );
};
export default EndLoreto;
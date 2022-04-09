import { Container, Grid } from "@mui/material";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import "../PaginaFinalPuno/index.css";

const EndPuno = () => {
  return (

    <Grid container spacing={3}>
    <Grid item md={12} xs={12}>
      <h2>Puno</h2>
    </Grid>
    <Grid item md={12} xs={12}>
      <h2>Hoteles</h2>
    </Grid>
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
              image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/qalasayaHotelPuno.jpg?raw=true"
              alt="qalasayaHotelPuno"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Qalasaya Hotel
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Puno
                <a href="https://www.casasanblas.com/es/"></a>
                
              </Typography>         
            </CardContent>         
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"      
            image="http://www.condelemosinn.com/wp-content/uploads/2019/09/Hotel-Puno-3.jpg"
            alt="grillestanciapuno"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
               Conde de Lemos Hotel 
               </Typography>
              <Typography variant="body2" color="text.secondary">
                Puno
              </Typography>
             
            </CardContent>
             <a href='https://wifala-harmony-hotel.negocio.site/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/colonialPlazaHotelPuno.jpg?raw=true"
            alt="colonialPlazaHotelPuno"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Colonial Plaza Hotel 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Puno
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
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/mojsaRestaurantePuno.jpg?raw=true"
            alt="mojsarestaurantpuno"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Mojsa Restaurante Puno
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Puno
              </Typography>
             
            </CardContent>
             <a href='https://www.facebook.com/LaCusquenitaCusco/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia 
            className="img-sierra"        
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/grillEstanciaPuno.jpg?raw=true"
            alt="GrillEstancia "
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Grill Estancia
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Puno
              </Typography>
             
            </CardContent>
             <a href='https://www.facebook.com/yakurestaurantecocinadealtura/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
            image="https://media-cdn.tripadvisor.com/media/photo-s/0d/3c/a9/97/la-table-del-inca.jpg"
            alt="tableDelInkaRestaurantePuno"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Table del Inka Restaurante
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Puno
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
            image="http://amarutours.com/wp-content/uploads/2015/10/Catedral-Puno-1-1024x545.jpg"
            alt="Catedraldepuno"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Basilica Catedral de Puno
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
            image="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/73/bf.jpg"
            alt="islaflotanteuros"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">          
             Isla Flotante de Uros
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
            image="https://peru.info/Portals/0/Images/Productos/6/46-imagen-1055382762018.jpg"
            alt="losuros"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">          
              Los Uros
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
              src="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/urosAruntawiLodgePuno.jpg?raw=true"
              alt="losuros"
            />
            <Carousel.Caption>
              <h1>Los Uros</h1>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://www.peru.travel/Contenido/Atractivo/Imagen/es/32/1.1/Principal/Comunidad%20andina%20en%20el%20Lago%20Titicaca.jpg"
              alt="uros de puno"
            />
            <Carousel.Caption>
              <h1>Isla Flotente - Uros</h1>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://seturismo.pe/wp-content/uploads/2018/08/turismo-en-puno.jpg"
              alt="uros de puno"
            />
            <Carousel.Caption>
              <h1>Turismo en Puno</h1>
        
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Grid>

    </Grid>
  );
};
export default EndPuno;
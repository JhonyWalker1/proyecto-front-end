import { Container, Grid } from "@mui/material";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import "../PaginaFinalPuno/index.css";

const EndIca = () => {
  return (

    <Grid container spacing={3}>
    <Grid item md={12} xs={12}>
      <h2>Ica</h2>
    </Grid>
    <Grid item md={12} xs={12}>
      <h2>Hoteles</h2>
    </Grid>
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
              image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/aranwaIcaHotel.jpg?raw=true"
              alt="aranwaIcaHotel"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Aranwa Hotel
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ica
                <a href="https://www.casasanblas.com/es/"></a>
                
              </Typography>         
            </CardContent>         
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"      
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/curasiIcaHotel.jpg?raw=true"
            alt="curasiicahotel"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
               Curasi Hotel 
               </Typography>
              <Typography variant="body2" color="text.secondary">
                Ica
              </Typography>
             
            </CardContent>
             <a href='https://wifala-harmony-hotel.negocio.site/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/vinasQueiroloIcaHotel.jpg?raw=true"
            alt="colonialPlazaHotelPuno"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Viñas Queirolo Hotel 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ica
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
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/tamboTacamaIcaRest.jpg?raw=true"
            alt="tambotacamaica"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Tambo Tacama Restaurant
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ica
              </Typography>
             
            </CardContent>
             <a href='https://www.facebook.com/LaCusquenitaCusco/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia 
            className="img-sierra"        
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/cordonRosaIcaRest.jpg?raw=true"
            alt="cordonRosaIcaRest"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Cordon Rosa Restaurant
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ica
              </Typography>
             
            </CardContent>
             <a href='https://www.facebook.com/yakurestaurantecocinadealtura/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/laOlladeJuanitaIca.jpg?raw=true"
            alt="laolladejuanitaica"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              La Olla de Juanita
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ica
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
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/huacachinaIca.jpg?raw=true"
            alt="huacachinaica"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Laguna de Huacachina
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
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/cityTourIca.jpg?raw=true"
            alt="tourica"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">          
             Las Dunas
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
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/reservaParacas.jpg?raw=true"
            alt="reservadeparacas"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">          
              Reserva de Paracas
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
              src="https://www.viajesaparacas.com/wp-content/uploads/2015/12/reserva-nacional-de-paracas-900x480.jpg"
              alt="reservadeparacas"
            />
            <Carousel.Caption>
              <h1>Reserva de Paracas - Ica</h1>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://losviajesdecamilohome.files.wordpress.com/2019/06/visit-ica-huacachina.jpg"
              alt="Eloasisdelahuacachina"
            />
            <Carousel.Caption>
              <h1>El Oasis de la Huacachina</h1>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://adventuretravelperu.com/es/wp-content/uploads/2021/07/oasis-huacachina-turismo-ica-travel-peru.jpg"
              alt="oasishuacachina"
            />
            <Carousel.Caption>
              <h1>Las Dunas de Ica</h1>
        
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Grid>

    </Grid>
  );
};
export default EndIca;
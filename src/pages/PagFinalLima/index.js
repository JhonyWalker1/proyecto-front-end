import { Container, Grid } from "@mui/material";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import "../PaginaFinalPuno/index.css";

const EndPuno = () => {
  return (

    <Grid container spacing={3}>
    <Grid item md={12} xs={12}>
      <h2>Lima</h2>
    </Grid>
    <Grid item md={12} xs={12}>
      <h2>Hoteles</h2>
    </Grid>
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
              image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/britaniaHotelLima.jpg?raw=true"
              alt="britaniaHotelLima"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Britania Hotel
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lima
                <a href="https://www.casasanblas.com/es/"></a>
                
              </Typography>         
            </CardContent>         
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"      
            image="https://www.countryclublimahotel.com/upload/images/home-principal.jpg"
            alt="countriclublima"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
               Country Club Lima Hotel 
               </Typography>
              <Typography variant="body2" color="text.secondary">
                Lima
              </Typography>
             
            </CardContent>
             <a href='https://wifala-harmony-hotel.negocio.site/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
            image="https://www.turismo360.news/wp-content/uploads/2019/02/melia-lima.jpg"
            alt="meliahotel"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Melia Hotel  
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lima
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
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/laRosaNauticaRest.jpg?raw=true"
            alt="larosanautica"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              La Rosa Nautica
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lima
              </Typography>
             
            </CardContent>
             <a href='https://www.facebook.com/LaCusquenitaCusco/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia 
            className="img-sierra"        
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/tabernaQueirolo.jpg?raw=true"
            alt="tabernaqueirolo "
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Taberna Queirolo
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lima
              </Typography>
             
            </CardContent>
             <a href='https://www.facebook.com/yakurestaurantecocinadealtura/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
            image="https://media-exp1.licdn.com/dms/image/C4E1BAQFHTHwFc4yLSw/company-background_10000/0/1521063737338?e=2147483647&v=beta&t=2e_oD4Igc_CLeMXZ4U9aKW6bsLfFbZu-fOyfqOIGQkA"
            alt="latranstienda"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              La Transtienda Restaurant
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lima
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
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/islasPalomino.jpg?raw=true"
            alt="islapalomino"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
               Islas Palomino
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
            image="https://elcomercio.pe/resizer/6pp73P-oEWXvbzHSrfk1sLavAdA=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/4DAGALXN5FH7NPXAODGTCVZBGI.jpg"
            alt="plazadearmas"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">          
             Catedral de Lima
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
            image="https://blog.redbus.pe/wp-content/uploads/2019/08/canopy-tdp.png"
            alt="Lunahuana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">          
              Lunahuana
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
              src="https://peruconstruye.net/wp-content/uploads/2021/06/telef%C3%A9rico-en-Miraflores.jpg"
              alt="costaverde"
            />
            <Carousel.Caption>
              <h1>Circuito de Playas</h1>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://www.paquetesdeviajesperu.com/wp-content/uploads/2019/04/lugares-turisticos-lima.jpg"
              alt="pazadearmas"
            />
            <Carousel.Caption>
              <h1>Plaza de Armas de Lima</h1>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/lunahuana.jpg?raw=true"
              alt="turismolunahuana"
            />
            <Carousel.Caption>
              <h1>Turismo en Lunahuana</h1>
        
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Grid>

    </Grid>
  );
};
export default EndPuno;
import { Container, Grid } from "@mui/material";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import "./index.css";

const Cusco = () => {
  return (

    <Grid container spacing={3}>
    <Grid item md={12} xs={12}>
      <h2>Cusco</h2>
    </Grid>
    <Grid item md={12} xs={12}>
      <h2>Hoteles</h2>
    </Grid>
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
              image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/casaSanBlasBoutiqueCusco.jpg?raw=true"
              alt="Hotel Casa San Blas Boutique"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Hotel Casa San Blas Boutique
              </Typography>
              <Typography variant="body2" color="text.secondary">
                San Blas Cusco
                <a href="https://www.casasanblas.com/es/"></a>
                
              </Typography>         
            </CardContent>         
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"      
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/wifalaHarmonyUrubamba.jpg?raw=true"
            alt="Wifala Harmony Hotel "
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
               Wifala Harmony Hotel 
               </Typography>
              <Typography variant="body2" color="text.secondary">
                Urubamba Cusco
              </Typography>
             
            </CardContent>
             <a href='https://wifala-harmony-hotel.negocio.site/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/amaruColonialCusco.jpg?raw=true"
            alt="Amaru Colonial"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Amaru Colonial
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cusco
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
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/cusquenitaPicanteriaCusco.jpg?raw=true"
            alt=" La Cusqueñita"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              La Cusqueñita-Picantería Tradicional.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cusco
              </Typography>
             
            </CardContent>
             <a href='https://www.facebook.com/LaCusquenitaCusco/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia 
            className="img-sierra"        
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/yakuCocinaCusco.jpg?raw=true"
            alt="Yaku Cocina de Altura"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Yaku Cocina de Altura
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cusco
              </Typography>
             
            </CardContent>
             <a href='https://www.facebook.com/yakurestaurantecocinadealtura/'></a>
     </Card>  
     </Grid>
    
     <Grid item md={4}>
    <Card className='card-sierra' >  
            <CardMedia
            className="img-sierra"        
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/inkaGrillCusco.jpg?raw=true"
            alt="Inka Grill Restaurant"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Inka Grill Restaurant
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cusco
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
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/montanaSieteColoresCusco.jpg?raw=true"
            alt="Montaña de los Siete Colores"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
              Montaña de los Siete Colores
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
            image="https://img2.oastatic.com/img2/34881228/900x450r/machu-picchu.jpg"
            alt="Machupicchu"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">          
              Machupicchu, Maravilla del Mundo
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
            image="https://github.com/Sofia-Valdivia/material-app/blob/main/src/assest/imagenes/valleSagradoInkasCusco.jpg?raw=true"
            alt="vallesagrado"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">          
              El Valle Sagrado de los Incas
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
              src="https://blogapi.uber.com/wp-content/uploads/2019/06/5-iglesias-en-Cusco-que-te-dejar%C3%A1n-sorprendido-con-su-historia-y-belleza-1024x512.png"
              alt="catedraldecusco"
            />
            <Carousel.Caption>
              <h1>Catedral de Cusco</h1>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="http://www.destinosexperienciales.com/wp-content/uploads/2019/04/camino_inca.jpg"
              alt="caminodelinca"
            />
            <Carousel.Caption>
              <h1>Camino del Inca</h1>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://trip360.travel/wp-content/uploads/2021/07/HD-City-Tour-Cusco-Catedral-Koricancha-Parque-arqueologico-Sacsayhuaman-4-Ruinas-31.jpg"
              alt="Sacsayhuaman"
            />
            <Carousel.Caption>
              <h1>Sacsayhuaman</h1>
        
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Grid>

    </Grid>
  );
};
export default Cusco;
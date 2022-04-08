import { Container, Grid } from "@mui/material";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Card, CardContent, CardMedia, Typography,} from "@mui/material";

const Sierra = () => {
  return (
    <Container maxWidth="xl">
      <Grid container mt={1}>
        <Carousel fade className="carousel-width">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://viajes.nationalgeographic.com.es/medio/2018/03/01/machu-picchu_5ff969ae_1280x720.jpg"
              alt="MachuPicchucusco"
            />
            <Carousel.Caption>
              <h1>Cusco</h1>
              <p>Machu Picchu</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://elcomercio.pe/resizer/mPu28wKJwUJHYlSHDwOc15jxkSY=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VEPYJG6YNBBR3NFQBU2VYI2JQQ.jpg"
              alt="islaflotantepuno"
            />
            <Carousel.Caption>
              <h1>Puno</h1>
              <p>Las Islas Flotantes</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://blog.redbus.pe/wp-content/uploads/2018/03/Vinicunca-portada.jpg"
              alt="montañade7colorescusco"
            />
            <Carousel.Caption>
              <h1>Vinicunca</h1>
              <p>Montaña de Siete Colores</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Grid>
    </Container>
  );
};


export default Sierra;

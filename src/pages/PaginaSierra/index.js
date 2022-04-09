import { Container, Grid } from "@mui/material";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const Sierra = () => {
  return (
    <Container maxWidth="lg">
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
              <p>Las Lagunas Flotantes</p>
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
              <p>La Montaña Siete Colores</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Grid>

      <Grid container mt={1}>
        <Grid item xs={12} md={12} mt={3}>
          <h1>Sierra</h1>
          <h2 className="title-lima-atrac">Santuario Histórico de Machu Picchu</h2>
          <p>
          Machu Picchu, término quechua cuyo significado es Montaña vieja. 
          Hoy es universalmente conocida, tanto por sus imponentes restos arqueológicos, 
          como por su incomparable ubicación, al borde de un abismo en cuyo fondo corren las caudalosas 
          aguas del Río Urubamba.Machu Picchu, más que una ciudadela, es un complejo arquitectónico 
          al que solo le faltan los techos. A este complejo se le llama ciudad, por el gran número 
          de casas que en la actualidad se cuentan más de 200, y en su apogeo debieron ser más. Además, 
          su diseño contempla plazas, templos, caminos, escalinatas, terrazas, acueductos, etc.
          </p>
        </Grid>
        <Grid item md={10}>
          <img
            src="https://portal.andina.pe/EDPfotografia3/Thumbnail/2021/04/26/000769298W.jpg"
            width={950}
          ></img>
        </Grid>
        <Grid item md={2} className="dato-c">
          <h4>Dato Curioso:</h4>

          <h5>Rutas turísticas</h5>
          <p>
            {" "}
            Hay muchas atracciones turísticas en la ciudad de Cusco, por lo que 
            es realmente esencial que te tomes tu tiempo para conocerla adecuadamente 
            y no intentes visitar como loco o loca todos en pocos días.
          </p>
          <p>
            {" "}
            Las atracciones comienzan en la misma ciudad y se extienden a lo 
            largo de sus valles y montañas nevadas, hasta llegar a la maravilla del mundo.
          </p>
          <p>
          A pesar de su difícil ubicación, llegar a Machu Picchu es relativamente sencillo
           y se puede hacer de muchas maneras,La montaña Vinicunca que se encuentra a 5200 m.s.n.m. 
           es la protagonista, también conocida como la «Montaña Arco Iris o Montaña de 7 colores»,
           No hay un lugar más tradicional y hermoso que el barrio de San Blas en Cusco. Se llega por 
           la calle Hatun Rumiyoc, donde se puede ver la espectacular Piedra de los 12 ángulos, 
           hasta llegar a la ladera de San Blas. La fortaleza de Sacsayhuamán es una de las construcciones
            más sorprendentes de los Incas. En Sacsayhuamán, cada 24 de junio, se realiza el Festival del Sol 
            llamado Inti Raymi. Ollantaytambo, está en el Valle Sagrado de los Incas al igual que Pisac, es
             el punto de paso obligatorio para todos los visitantes que se dirigen a Machu Picchu, y no 
             precisamente por la estación de tren que allí se encuentra, sino por el espectacular complejo 
             arqueológico que allí se encuentra.
          </p>

          <Button variant="contained">Saber más</Button>
        </Grid>
      </Grid>
      <Grid container mt={1}>
        <Grid item xs={12} md={12} mt={3}>
          <h2 className="title-lima-atrac">Las Islas flotantes de Uros</h2>
          <p>
          Estas islas son habitadas por los Uros, una de las culturas más antiguas del continente la 
          cual se remonta a épocas anteriores a los Incas. Los habitantes de esta comunidad flotante
           afirman ser dueños de las aguas del Lago Titicaca. La subsistencia de la comunidad de 
           los Uros se basa en la pesca y la caza; también se dedican a la elaboración de tejidos de 
           tapices de lana y al disecado de animales. Por otro lado, participan de actividades 
           turísticas: Existen tours a las Islas Flotantes de los Uros de pocas horas, pero también experiencias
            completas en las cuales te conviertes parte de la comunidad de los Uros.
          </p>
          <p>
          En el transcurso del trayecto desde tierra firme hacia una de las Islas de los Uros, 
          se puede apreciar plantas de totora que crecen en el Lago Titicaca y que constituyen 
          la fuente básica de alimentación, y a su vez como sistema de mantenimiento que tienen 
          los Uros para perennizar la existencia de las islas.
          </p>
          <p>
          Al llegar a una de las islas, las mujeres de la comunidad te recibirán con sus vestimentas
           y cánticos típicos, así mismo el jefe de la isla dará un cordial recibimiento de bienvenida 
           en su lengua nativa, el Uro. Conocerás a la familia que vive en la isla y te mostrarán su forma 
           de vida. También podrás recorrer la isla, tomar fotos, y si eres amante de los recuerdos de los
           lugares que visitas.
          </p>
        </Grid>
        <Grid item md={10}>
          <img
            src="https://www.gochile.cl/fotos/full/112278-isla-de-uros-ptsperu-tripme-2-.jpg"
            height={562}
            width={950}
          ></img>
        </Grid>
        <Grid item md={2} className="dato-c">
          <h4>Dato Curioso:</h4>

          <h5>Rutas turísticas</h5>

          <p>
          Tanto autoridades como pobladores participan del proyecto Turismo Rural 
          Comunitario. Éste permite que los visitantes interesados participen 
          en las actividades diarias de la comunidad de las Islas de los Uros y se sientan 
          parte de ella. Los pobladores enseñan a los visitantes a cortar totora, pescar, 
          navegar en los botes de totora, cocinar, entre otros.
          </p>
          <p>
          Existen distintos programas para realizar turismo vivencial en las Islas de los Uros.
           Varían dependiendo de los días los cuales uno desee quedarse siendo parte de la comunidad. 
           En cuanto a las comodidades, ahora hay paneles solares en las islas de los Uros para proporcionar 
           luz en la noche y baños ecológicos para los visitantes.
          </p>
          <p>
          ¡Es una experiencia imperdible! Conoce Puno, vive unos días en un mundo hecho de totora, 
          rodeado del hermoso LagoTiticaca, acompañado por la cultura milenaria de los Uros.
          </p>
          <Button variant="contained">Saber más</Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Sierra;
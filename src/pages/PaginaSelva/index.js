import { Container, Grid, Button } from "@mui/material";
import { Carousel, CarouselItem } from "react-bootstrap";
import "./index.css";
import pacayaSamiriaLoreto from "../../assets/pacayaSamiriaLoreto"
import cataratasGoctaChachapoyas from "../../assets/cataratasGoctaChachapoyas"
import fortalezaKuelapChachapoyas from "../../assets/fortalezaKuelapChachapoyas"


const Selva = () => {
  return (
    <Container maxWidth="lg">
      <Grid container mt={1}>
        <Carousel fade className="carousel-width">

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={pacayaSamiriaLoreto }
              alt="pacayaSamiria"
            />
            <Carousel.Caption>
              <h1>Loreto</h1>
              <p>Reserva Nacional Pacaya Samiria</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={cataratasGoctaChachapoyas}
              alt="cataratasGocta"
            />
            <Carousel.Caption>
              <h1>Chachapoyas</h1>
              <p>Cataratas del Gocta</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={fortalezaKuelapChachapoyas }
              alt="cataratasGocta"
            />
            <Carousel.Caption>
              <h1>Chachapoyas</h1>
              <p>Fortaleza de Kuelap</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Grid>

      <Grid container mt={1}>
        <Grid item xs={12} md={12} mt={3}>
          <h1>Loreto</h1>
          <h2 className="title-loreto-atrac">Reserva Nacional de Pacaya Samiria</h2>
          <p>
          La Reserva Nacional Pacaya Samiria está ubicada en la depresión Ucamara,
        donde conflueyen los grandes ríos Ucayali y Marañon, los  cuales forman sus 
        límites naturales. La parte suroccidental está delimitada por una franja de colinas
         bajas que forma la divisoria de aguas con el río Huallaga.
        La Reserva alberga una alta diversidad biológica y una importante población humana 
        que aprovecha  sus recursos naturales. Comprende en su interior las cuencas de los
         ríos Pacaya, Samiria y Yanayacu-Pucate. Aunque mayormente se trata de una planicie 
         de selva baja aluvial e inundable, presenta algunas colinas bajas en las nacientes del Pacaya.

        Esta topografía, sumada al régimen hidrológico alternado de la Amazonía de crecientes
        y vaciantes, crea numerosas islas, caños y cochas,entre las cuales sobresale la famosa
        cocha El Dorado, en la cuenca baja del Yanayacu, que es el destino turístico central 
        de la Reserva y ejemplo exitoso de emprendimiento en turismo vivencial comunitario.
          </p>
        </Grid>
        <Grid item md={10}>
          <img
            src={pacayaSamiriaLoreto}
            width={950}
          ></img>
        </Grid>
        <Grid item md={2} className="dato-c">
          <h4>Dato Curioso:</h4>

          <h5>Rutas turísticas</h5>
          <p>
            {" "}
            Pacaya Samiria, sus hermosos paisajes, la diversidad de flora y fauna, 
            entre muchas otras cosas, lo convierte en un destino de ensueño.
          </p>
          <p>
            {" "}
            Siendo un área tan extensa, existen varias rutas y actividades ofrecidas. 
            Así, son ocho las áreas permitidas de uso turístico: Tibilo Pastococha, 
            Pinchi - Yanayacu Grande, Bajo y medio Samiria, Yanayacu Pucate - El Dorado, 
            Nauta Caño, Yanallpa Iricahua, Bajo Pacaya y Cochas de Punga.
          </p>
          <p>
          Existen además tres circuitos turísticos principales:
        La cuenca Yanayacu-Pucate, desde la comunidad Veinte de Enero, cerca a Nauta,
         hasta la famosa cocha El Dorado. Es la zona donde se encuentra la mayor cantidad
         de refugios y zonas de campamento a lo largo del río.
         La laguna El Dorado es considerada el corazón de la Reserva y uno de los lugares
         con mayor concentración de fauna.
        En la cuenca baja y media del río Samiria, visitando las cochas Yarina, Fortuna y Ungurahui.
        Además, en San Martín de Tipishca, al inicio de la cuenca, se puede convivir con los 
        habitantes de la comunidad nativa Kukama Kukamilla, quienes también ofrecen varios circuitos
        por recorrer, tanto a pie como en canoas.
        
          </p>

          <Button variant="contained">Saber más</Button>
        </Grid>
      </Grid>

      <Grid container mt={1}>
        <Grid item xs={12} md={12} mt={3}>
          <h2 className="title-lima-atrac">Cataratas de Gocta</h2>
          <p>
          Se ubica entre los caseríos de San Pablo, Cocachimba y La Coca, que pertenecen 
          al distrito de Valera, en la provincia de Bongará (región de Amazonas). 
          Sus más de 700 metros de altura la convierten en una de las más grandes del mundo.
           Su majestuosidad y belleza natural, enamoran a todos sus visitantes, convirtiendola
           en una joya natural "La Catarata de Gocta", ubicada en el corazón de la Amazonía peruana.
          </p>
          <p>
          Este salto de agua permite conectarse con un entorno totalmente natural. Aquí no ingresa
           el transporte público o privado, por lo que se respira la armonía de la naturaleza
            en cada espacio que atraviesas, 
          </p>
          <p>
           El acceso a la Catarata de Gocta tiene cierto grado de complejidad. Sin embargo, 
           la travesía vale la pena, transformando cualquier esfuerzo en un premio al llegar. 
           
          </p>
        </Grid>
        <Grid item md={10}>
          <img
            src={cataratasGoctaChachapoyas}
            height={562}
            width={950}
          ></img>
        </Grid>
        <Grid item md={2} className="dato-c">
          <h4>Dato Curioso:</h4>

          <h5>Rutas turísticas</h5>

          <p>
          Para llegar a ella, existen una serie de alternativas que se ajustan al espíritu 
          aventurero de sus potenciales visitantes: tendrás que tomar distintos tramos (o rutas)
          donde combinarás largas caminatas y paseos a caballo para llegar a este encanto natural,
          pero previamente puedes acercarte a tu destino con buses (desde la ciudad de Chachapoyas 
          hasta Cocachimba o San Pablo) o contratar autos privados.
          </p>
          <p>
          De elegir el trekking o Cabalgata, la duración es de aproximadamente 2 horas para llegar
          a la Catarata de Gocta, en el camino se puede disfrutar de los hemosso paisajes incluso
          llegar a ver al gallito de las rocas y los colibríes de cola espátula, 
         
          </p>
          <p>
          Ya en el destino se anima a los visitantes a la degustación del guarapo (bebida típica de
           jugo de caña) y por fín disfrutar del mágico lugar.
          </p>
          <Button variant="contained">Saber más</Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Selva;

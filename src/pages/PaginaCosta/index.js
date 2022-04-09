import { Container, Grid, Button } from "@mui/material";
import { Carousel, CarouselItem } from "react-bootstrap";
import "./index.css";

const Costa = () => {
  return (
    <Container maxWidth="lg">
      <Grid container mt={1}>
        <Carousel fade className="carousel-width">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://www.ytuqueplanes.com/imagenes/fotos/novedades/zona-de-anfiteatro.jpg"
              alt="marcahuasiLima"
            />
            <Carousel.Caption>
              <h1>Lima</h1>
              <p>Marcahuasi bOsque de Piedras</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://cdn.getyourguide.com/img/location/5963815c2dc3b.jpeg/88.jpg"
              alt="islasBallestasIca"
            />
            <Carousel.Caption>
              <h1>Ica</h1>
              <p>IslasBallestas</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://selina-res.cloudinary.com/image/upload/if_iw_gt_1584,c_scale,w_1584/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/1xZZEml4gStiyXtt8VgJGB/8790e0e2b34a9a7b002aff36f04ec26b/Selina_Mancora_Surf_Lifestyle_01-2021_credits_AlexanderEstrada_.jpeg"
              alt="mancoraPiura"
            />
            <Carousel.Caption>
              <h1>Piura</h1>
              <p>Mancora</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Grid>

      <Grid container mt={1}>
        <Grid item xs={12} md={12} mt={3}>
          <h1>Costa</h1>
          <h2 className="title-lima-atrac">Reserva Nacional de Paracas</h2>
          <p>
            Paracas es una isla ubicada en el océano Pacífico, en el
            departamento de Amazonas, en el Perú. La reserva nacional de Paracas
            es una zona protegida del Perú ubicada en la provincia de Pisco,
            dentro del departamento de Ica. La reserva nacional de Paracas fue
            declarada el 25 de septiembre de 1975. Fue creada con el fin de
            conservar una porción del mar y del desierto del Perú, dando
            protección a las diversas especies de flora y fauna silvestres que
            allí viven. Conserva una muestra representativa de los ecosistemas
            marinos del mar frío de la Corriente Peruana o Corriente de
            Humboldt, considerado por los especialistas como el más productivo
            de la Tierra, además de mantener los ambientes utilizados por una
            amplia variedad de especies migratorias para su alimentación y
            refugio durante sus largas travesías anuales.
          </p>
        </Grid>
        <Grid item md={10}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Paracas_National_Reserve._Ica%2C_Peru.jpg/1200px-Paracas_National_Reserve._Ica%2C_Peru.jpg"
            width={950}
          ></img>
        </Grid>
        <Grid item md={2} className="dato-c">
          <h4>Dato Curioso:</h4>

          <h5>Rutas turísticas</h5>
          <p>
            {" "}
            Los principales atractivos turísticos de la RNP son sin duda los
            escenarios naturales que permiten apreciar la belleza del lugar y su
            variada flora y fauna.
          </p>
          <p>
            {" "}
            Cuenta con un Centro de Interpretación y un Sendero de Aves en el
            humedal de La Aguada.
          </p>
          <p>
            Destacan las playas como La Mina, Raspón y Yumaque. Contamos los
            miradores de: Playa Supay, “La Catedral”, Yumaque, Istmo, Santa
            María, Playa Roja, Lagunillas. Hay dos miradores paleontológicos
            donde se pueden apreciar las Turritelas (fósiles marinos de 36
            millones de años de antigüedad). Algunas actividades que se pueden
            realizar en el circuito son: Campamentos Visitas en bicicletas y/o
            cuatrimotos/mini buggies Caminatas Observación de aves Se les
            recuerda seguir las indicaciones del personal guardaparque a fin de
            realizar una visita responsable.
          </p>
              <a href="/home/costa/ica">
          <Button variant="contained">Saber más</Button>
          </a>
        </Grid>
      </Grid>
      <Grid container mt={1}>
        <Grid item xs={12} md={12} mt={3}>
          <h2 className="title-lima-atrac">Marcahuasi</h2>
          <p>
            Al este de Lima se encuentra uno de los destinos más llamativos a
            nivel mundial, se trata de un enorme bosque de piedras de granito
            que todos conocen como Marcahuasi. Se ubica en la provincia de
            Huarochirí, a 4000 m s. n. m. y tiene cuatro kilómetros cuadrados de
            extensión, por lo que es toda una maravilla recorrerlo.
          </p>
          <p>
            Las gigantescas rocas, erosionadas por acción del clima, llegan a
            medir hasta 25 metros de altura. Por muchos años, quienes han
            visitado Marcahuasi han subido hasta la cima de las enormes piedras
            para contemplar las estrellas por las noches y algunos hasta se han
            atrevido a acampar allí.
          </p>
          <p>
            Aunque, si de acampar se trata, lo mejor es hacerlo en el Monumento
            a la Humanidad, una gigantesca formación de granito, que se asemeja
            al perfil de una persona. Otro lugar ideal es el Anfiteatro,
            preferido por muchos gracias a que está protegido del viento y el
            frío.
          </p>
        </Grid>
        <Grid item md={10}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5417073ae4b02adfc5c075af/1465011800554-OHRILEN8GWKLHYM42Y5V/IMG_3317.JPG?format=2500w"
            height={562}
            width={950}
          ></img>
        </Grid>
        <Grid item md={2} className="dato-c">
          <h4>Dato Curioso:</h4>

          <h5>Rutas turísticas</h5>

          <p>
            Las lagunas Cachu Cachu y Huacracocha, el Valle de las Focas y el
            Felino Sagrado, son otros atractivos que sobresalen en este destino
            limeño que es una de las paradas obligadas para los amantes del
            trekking y de la escalada de roca. Recorrer Marcahuasi de punta a
            punta puede tomar unas tres horas y media, por lo que sus visitantes
            deben procurar tener un buen estado físico y no olvidar llevar
            varias botellas con agua.
          </p>
          <p>
            Todos aquellos que emprendan la caminata por este destino, deben
            usar una casaca cortaviento o un chaleco, porque a pesar de que hay
            sol, corre una brisa helada. Asimismo, se recomienda utilizar
            guantes, lentes oscuros, mantequilla de cacao en los labios, una
            gorra y bloqueador solar. También es necesario optar por calzado con
            suelas antideslizantes e impermeables.
          </p>
          <p>
            El verano es la mejor temporada para recorrer Marcahuasi, ya que los
            días suelen ser soleados y las noches son refrescantes. Así que si
            lo visitas, diviértete al máximo y no olvides que en todo momento
            debes cuidar la naturaleza y respetar los protocolos de
            bioseguridad. Demuestra una vez más que los peruanos somos
            responsables y solidarios. De ti depende que más compatriotas estén
            libres del COVID-19. Recuerda, #VamosAVolver.
          </p>
          <a href="/home/costa/lima"> 
          <Button variant="contained">Saber más</Button>
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Costa;

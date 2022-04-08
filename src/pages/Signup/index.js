import { useState } from "react";
import {
  Container,
  Grid,
  Button,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,

} from "@mui/material";
import { useFormik } from "formik";
import swal from "sweetalert";
import { storeUser, loginUser,storeUserC } from "../../service/firestore";
import "./index.css"
import { wait } from "@testing-library/user-event/dist/utils";


const Signup = () => {

  const[validateInputsEmpty, setValidateInputsEmpty] = useState({
    name: false,
      lastname: false,
      email: false,
      password: false,
      phone: false,
      gender:false,

  })
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const validate= (values) =>{
    const errors={};

    Object.keys(values)
    .filter(
      (value) => 
      value !== "gender"
    )
    .forEach((value)=>{
      errors[value]= values[value]=== ""? true: false;
    });

    setButtonDisabled(Object.values(errors).includes(true));
    setValidateInputsEmpty(errors)
  }


  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
      gender:"",
      activities:[],
    },
    validate,
    onSubmit:async (values) => {
      if (values.activities.length === 0) {
        swal({
          icon: "error",
          title: "Error",
          text: "Debe elegir al menos una actividad",
        });
        return;
      }


      storeUser(values.email, values.password);
      swal("Registro exitoso!", "", "success");
      await storeUserC(values);
      document.getElementById('myform').reset();
      console.log(values);
      wait(3000);
      window.location.href = "/login";
    },
  });

  return (
    <Container maxWidth="md" className="contenedor" >
      <form id="myform" onSubmit={formik.handleSubmit}>
        <Grid container spacing={1} className="contenedor_center">
          <Grid item md={12} xs={12}>
            <h2>Crear Cuenta</h2>
            </Grid>
            <Grid item md={6}  xs={12}>
              <TextField
                label="Nombre"
                name="name"
                fullWidth
                error={validateInputsEmpty.name}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12} >
              <TextField
                label="Apellidos"
                name="lastname"
                fullWidth
                error={validateInputsEmpty.lastname}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={6}  xs={12} >
              <TextField
                label="Correo"
                name="email"
                fullWidth
                error={validateInputsEmpty.email}
                type="email"
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12} >
              <TextField
                label="Password"
                name="password"
                fullWidth
                error={validateInputsEmpty.password}
                onChange={formik.handleChange}
                type="password"
              />
            </Grid>
            <Grid item md={6} xs={12} >
              <TextField
                label="Nro de Celular"
                name="phone"
                fullWidth
                error={validateInputsEmpty.phone}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel id="genero">Genero</InputLabel>
              <Select
                labelId="genero"
                label="Genero"
               
                onChange={formik.handleChange}
                name="gender"
              >
                <MenuItem value="Masculino">Masculino</MenuItem>
                <MenuItem value="Femenino">Femenino</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={12} xs={12}>
            <h2>Actividades de Interés:</h2>
          </Grid>
        
          <Grid item md={6} xs={12}>
              
            <FormGroup sx={{textAlign: "center", marginLeft:"40%"}}>

                <FormControlLabel
                control={
                  <Checkbox
                    value="adventure"
                    onChange={formik.handleChange}
                    name="activities"
                  />
                }
                label="Aventura"
              />
                <FormControlLabel
                control={
                  <Checkbox
                    value="bussiness"
                    onChange={formik.handleChange}
                    name="activities"
                  />
                }
                label="Negocios"
              />
               <FormControlLabel
                control={
                  <Checkbox
                    value="culture"
                    onChange={formik.handleChange}
                    name="activities"
                  />
                }
                label="Culturales"
              />

            </FormGroup>
          </Grid>


          <Grid item md={6} xs={12}>
            <FormGroup sx={{textAlign: "center", marginLeft:"40%"}}>             
             
              <FormControlLabel
                control={
                  <Checkbox
                    value="vivencial"
                    onChange={formik.handleChange}
                    name="activities"
                  />
                }
                label="Vivencial"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="nature"
                    onChange={formik.handleChange}
                    name="activities"
                  />
                }
                label="Naturaleza"
              />
                <FormControlLabel
                control={
                  <Checkbox
                    value="rest"
                    onChange={formik.handleChange}
                    name="activities"
                  />
                }
                label="Descanso"
              />

            </FormGroup>
          </Grid>


            <Grid item md={12} xs={12} >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                disabled={buttonDisabled}
              >
                Crear Cuenta
              </Button>
            </Grid>
            <h4>¿Ya tienes una cuenta?</h4>
            <Grid item md={12} xs={12} >
              <Button variant="contained" color="primary" fullWidth>
                Iniciar Sesión
              </Button>
            </Grid>
          </Grid>
        
      </form>
    </Container>
  );
};

export default Signup;

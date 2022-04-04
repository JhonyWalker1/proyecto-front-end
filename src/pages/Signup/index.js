import { useState } from "react";
import {
  Container,
  Grid,
  Button,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  FormGroup,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useFormik } from "formik";
import swal from "sweetalert";
import { storeUser, loginUser } from "../../service/firestore";
import imgSignup from "../../assets/fondo_signup.png";
import "./index.css"

const Signup = () => {
  /* const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    showPassword: false,
  });
 */
  //Mostrar ojito de password
  /* const handleChange = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setUser({
      ...user,
      showPassword: !user.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
 */
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
    },

    onSubmit: (values) => {
      storeUser(values.email, values.password);
      swal("Registro exitoso!", "", "success");

      console.log(values);
    },
  });

  return (
    <Container maxWidth="lg" className="contenedor">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} className="contenedor_center">
          <Grid item md={6} xs={12}>
            <h2>Crear Cuenta</h2>
            <Grid item md={12} xs={12} mt={5} mb={2}>
              <TextField
                label="Nombre"
                name="name"
                fullWidth
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={12} xs={12} mb={2}>
              <TextField
                label="Apellidos"
                name="lastname"
                fullWidth
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={12} xs={12} mb={2}>
              <TextField
                label="Correo"
                name="email"
                fullWidth
                type="email"
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={12} xs={12} mb={2}>
              {/*   <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  name="password"
                  label="Password"
                  id="outlined-adornment-password"
                  type={user.showPassword ? "text" : "password"}
                  value={user.password}
                  onChange={handleChange("password")||formik.handleChange }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {user.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl> */}
              <TextField
                label="Password"
                name="password"
                fullWidth
                onChange={formik.handleChange}
                type="password"
              />
            </Grid>
            <Grid item md={12} xs={12} mb={2}>
              <TextField
                label="Nro de Celular"
                name="phone"
                fullWidth
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={12} xs={12} mb={2}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Crear Cuenta
              </Button>
            </Grid>
            <h4>¿Ya tienes una cuenta?</h4>
            <Grid item md={12} xs={12} mb={2}>
              <Button variant="contained" color="primary" fullWidth>
                Iniciar Sesión
              </Button>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
              <img src={imgSignup} alt="logo" width={400} className="img_signup" />
              </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Signup;

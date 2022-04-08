import { Grid, Card, CardContent, TextField, Button } from "@mui/material";
import swal from "sweetalert";
import bgLogin from "../../assets/fondo_signup.png";
import { loginUser, storeUser } from "../../service/firestore";
import { useState } from "react";
import bg_lg from "../../assets/bg_lg.jpg";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleClickLogin = async () => {
    const { email, password } = userData;
    let response = await loginUser(email, password);
    if (!response.ok) {
      response = await storeUser(email, password);

      if (!response.ok) {
        swal({
          title: "Error",
          text: "Error al encontrar usuario",
          icon: "error",
        });

        return;
      }
    }
    storeUser(response.data.user);
    window.location.href = "/";
  };

  return (
    <Grid
      container
      alignItems="center"
      
      sx={{ height: "100vh", padding: 20, backgroundColor: "#3198D3" }}
    >
     
      <Grid item md={6} xs={12}>
        <img src={bgLogin} width={600} alt="" />
      </Grid>
      <Grid item md={6} xs={12}>
        <Card sx={{ width: 500 }}>
          <CardContent>
            <h5>Welcome to</h5>
            <h3>Codigo Travel</h3>
            <p>Pronto disfrutarás una verdadera experiencia de aventura</p>
            <Grid container spacing={3} mt={5}>
              <Grid item md={12}>
                <TextField
                  label="Email"
                  fullWidth
                  name="email"
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  label="Password"
                  fullWidth
                  name="password"
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  sx={{ backgroundColor: "#000" }}
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleClickLogin}
                >
                  Iniciar Session
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;

import { useState, useEffect } from "react";
import { Container, Grid, Button } from "@mui/material";
import { auth, updateUserProfile,getUserP } from "../../service/firestore";
import { onAuthStateChanged } from "firebase/auth";
import img_user from "../../assets/img_user.png";
import "./index.css";

const Profile = () => {

    const [user, setUser] = useState(null);

    const update = async () => {
        const profile = {
          photoURL:
            {img_user},
        };
        await updateUserProfile(profile);
        getUserP();
        console.log(update);
      }; 

    const getUserP = () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log (user);
            setUser(user);

          } else {
            console.log("No user logged in");
          }
        });
      };
   
    
      useEffect(() => {
      
        getUserP();
      }, []);

    return (
        <Container>
          {user && (
            <Grid container spacing={3}>
              <Grid item md={12}>
                <h1>Perfil de Usuario</h1>
              </Grid>
              <Grid item md={4}>
                <img src={user?.photoURL} alt=""/>
              </Grid>
              <Grid item md={4}>
                <p>{user?.email}</p>
                <p>Jhonatan </p>
                <p>Aliaga </p>
                <Button  
                onClick={update}
                variant="contained">
                  Actualizar perfil
                </Button>
              </Grid>
            </Grid>
          )}
        </Container>
      );
    };
    
    export default Profile;
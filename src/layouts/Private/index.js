import { useContext } from "react"
import {UserContext} from "../../context/UserContext"
import { Navigate, Outlet, Link } from "react-router-dom";
import {  Grid, Box, List, ListItem, ListItemText, ListItemIcon, Divider } from "@mui/material";
import codigoLogo from "../../assets/Image/ct.png";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./index.css"

const Private = () => {
    /* const {user} = useContext(UserContext);

    if(!user) {
        return <Navigate to="/login" />
    }
 */
    return (
        <Box m={3}>
          <Grid container spacing={3}>
            <Grid item md={1.7} className="border-right">
              <div className="m-5">
                <div className="container-admin-logo">
                  <div>
                    <img src={codigoLogo} width={50} alt="logo" />
                  </div>
                  &nbsp;&nbsp;
                  <div>
                    <h4>Codigo Admin</h4>
                    <p>Administrador de codigo</p>
                  </div>
                </div>
                <div className="mt-5">
                  <List>
                    <ListItem button component={Link} to="/profile">
                      <ListItemIcon>
                        <AccountCircleOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Perfil" />
                    </ListItem>
                    <ListItem button component={Link} to="/#">
                      <ListItemIcon>
                        <ShoppingBasketOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Mis Compras" />
                    </ListItem>
                    
                  </List>
                  <Box m={3}>
                    <Divider />
                  </Box>
                </div>
              </div>
            </Grid>
            <Grid item md={10}>
              <Outlet />
            </Grid>
          </Grid>
        </Box>
      );
    };
    export default Private;

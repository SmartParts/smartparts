import React from 'react';
import {Box,Typography,Grid,Paper,Divider} from "@material-ui/core";
import Navbar from './Navbar';
import Footer from './Footer'; 
import profile from '../image/profile.svg'; 
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import MyprofileIcon from '@material-ui/icons/Person';
import LocationIcon from '@material-ui/icons/PinDrop';
import List from '@material-ui/icons/ListAlt';
import Credit from '@material-ui/icons/CreditCard';


const useStyles = makeStyles((theme)=>({
    avatar: {
    backgroundColor: theme.palette.grey[50],
    border: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.info.main,
    width: "80px",
    height: "80px",
  },
}));
export default function Shoppingcart() {
    const classes = useStyles();
    return(
        <Box>
         <Navbar />
         <Box>
            <Box style={{width: "100%", height: "200px", marginTop: "66px"}} bgcolor="white" >
                <Grid container justify="space-evenly" style={{padding: "50px"}}>
                    <Grid item xs={3}  alignItems="center" style={{maxWidth: "13%"}}>
                    <Avatar className={classes.avatar}>

                    <ShoppingCart fontSize="large"/>
                    </Avatar>
                    </Grid>
                    <Grid item xs={3}  alignItems="center" style={{maxWidth: "13%"}}>
                  <Avatar className={classes.avatar}>

                    <MyprofileIcon fontSize="large"/>
                    </Avatar>
                    </Grid>
                    <Grid item xs={3}  alignItems="center" style={{maxWidth: "13%"}}>
                 <Avatar className={classes.avatar}>

                    <LocationIcon fontSize="large"/>
                    </Avatar>
                    </Grid>
                    <Grid item xs={3}  alignItems="center" style={{maxWidth: "13%"}}>
                    <Avatar className={classes.avatar}>

                    <List fontSize="large"/>
                    </Avatar>
                    </Grid>
                    <Grid item xs={3}  alignItems="center" style={{maxWidth: "13%"}}>
                    <Avatar className={classes.avatar}>

                    <Credit fontSize="large"/>
                    </Avatar>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{marginLeft: "20px"}}>
             <Typography style={{marginBottom: "10px"}}>
                 Shopping cart is empty
             </Typography>
             <Button variant="outlined">
                 Continue shopping
             </Button>
             </Box>
         </Box>
        <Footer />
        </Box>
    )
}
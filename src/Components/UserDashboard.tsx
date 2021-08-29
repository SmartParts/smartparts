import React from 'react';
import { Box, Typography, IconButton } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles} from '@material-ui/core/styles';
import logo from '../image/logo22.png';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import  CardActions from '@material-ui/core/CardActions';
import   CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) =>({
    sizeofcheckbox: {
        transform: "scale(0.8)",
    },
    }));
export default function UserDashboard(){
    const classes = useStyles();
    return(
        <Box>
            <Grid container>
            <Grid item xs={2} style={{ backgroundColor: "#141A26", marginRight: "25px"}}>
              <img src={logo} style={{marginTop: 10, width: 80 ,height:40}}  />
             <IconButton  style={{color: "white", marginLeft: "95px", top: "-16px"}}>
                    <MenuIcon/>
                </IconButton>
            <Box style={{display: "flex", flexDirection: "row",  marginTop: "35px"}}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        className={classes.sizeofcheckbox}
      />   
            <Link to="/dashboard" ><Typography style={{color: "white", marginTop: "8px"}}>Home</Typography></Link> </Box>


                  <Box style={{display: "flex", flexDirection: "row"}}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        className={classes.sizeofcheckbox}
      />  <Typography style={{color: "white",  marginTop: "8px"}}>Order</Typography>    </Box>
    
                  <Box style={{display: "flex", flexDirection: "row"}}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        className={classes.sizeofcheckbox}
      /><Typography style={{color: "white",  marginTop: "8px"}}>Inbox</Typography>    </Box>
      
      <Box style={{display: "flex", flexDirection: "row"}}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        className={classes.sizeofcheckbox}
      /><Typography style={{color: "white",  marginTop: "8px"}}>Products</Typography>    </Box>
      
            </Grid>
                <Grid item style={{marginTop: "100px"}}>
                    {/* avatar */}
                    <Typography component="p"><strong>Good afternoon, Saloni!</strong></Typography>
                    <Typography color="textSecondary" component="p">Welcome to Smart Parts Export! This is your home page where you can quickly see your wishlist and previous orders.</Typography>
                    <Typography component="p"><strong>Post Orders</strong></Typography>
                    <hr />
                    <Typography component="p"><strong>Recent Products</strong></Typography>
                    <hr />
                    <Grid container>
                    <Grid item xs={2} >
                    <Card style={{height: "125px", width: "125px", borderRadius: "25px"}}>
                        <CardActions>
                            <CardMedia>

                            </CardMedia>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={2}>
                    <Card style={{height: "125px", width: "125px", borderRadius: "25px"}}>
                        <CardActions>
                            <CardMedia>
                                    {/* + icon      */}
                            </CardMedia>
                        </CardActions>
                    </Card>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
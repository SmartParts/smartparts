import React from 'react';
import {Box, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Footer from './Footer';
import { makeStyles, useTheme } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import premiumimage from '../image/unlock premium/premium.png';
import {config} from'../config';
import {UserAgentApplication} from 'msal';

const useStyles = makeStyles((theme) => ({
    registrationdetails: {
        display: 'flex',
        marginTop: "100px",
        marginBottom: "100px",
    },
    regdetails: {

    },
    coverimage: {
        width: 251,
    },
    regcontent: {
        flex: '1 0 auto',
      padding: "40px",
    },
    regformdetails: {
        display: "flex",
    },
    inputcolor: {
        color: "#8517FF",
        width: "100%",
        marginTop: "15px",
    },
    regbutton: {
        marginTop: "10px",
        backgroundColor: "#ffc400",
        color: "white",
      '&: hover': {
        backgroundColor: "#8517FF",
        color: "white",
      }
    },
    primary: {
        color: "#ffc400",
    }

}));

export default function UnlockPremium(){
    const classes = useStyles();
    const theme = useTheme();
    const login= async ()=>{
        var client = new UserAgentApplication(config);
        var request ={
            scopes: ['https://o365mon.kusto.windows.net/user_impersonation']
        }
        let loginResponse= await client.loginPopup(request);
        console.log(loginResponse);
    }
    return(
        <Box>
        <Grid container style={{ marginTop: "65px" }}>
            <Grid item style={{ width:"60%", marginLeft: "280px"}}>
                <Card style={{marginTop: "30px", borderRadius: "35px"}}>
                    <CardActions>
                        <CardContent style={{display: "flex"}}>
                            <Typography>Want to see the power of Premium? It's easy! Sign up for free trial and <br /> start strong.</Typography>
                            <Button  style={{marginLeft: "100px",padding: "0px 30px", borderRadius: "25px", backgroundColor: "#ffc400", color: "white"}}>Start Premium Trial</Button>
                        </CardContent>
                    </CardActions>
                </Card>
            </Grid>
        <Grid item  style={{ width:"50%", marginLeft: "350px"}}>
         <Card className={classes.registrationdetails} style={{ borderRadius: "35px"}}>
            <div className={classes.regdetails}>
            
            </div>
          
            <CardMedia
                className={classes.coverimage}
                image={premiumimage}
                title="login"
            
            />
            <CardContent className={classes.regcontent}  style={{padding: "68px", width: "80px"}}>
                <Typography component="h5" variant="h5">
                    Registration 
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Register an account and start browsing thousands of AfterMarket and OEM car parts. Already have an account?

                </Typography>
                <Typography className={classes.primary}>
                    Log In
                </Typography>
                <form className={classes.regformdetails} noValidate autoComplete="off">
                <div className={classes.regformdetails} style={{display: "block"}}>
            
  <TextField
      required
      id="outlined-required"
      label="Email"
      placeholder="Enter Email Id"
      variant="outlined"
      className={classes.inputcolor}

    />
  <TextField      
      id="outlined-password-input"
      label="Password"
      type="password"
      placeholder="Enter Password"
      autoComplete="current-password"
      variant="outlined"
      className={classes.inputcolor}
    />
      <Button className={classes.regbutton} style={{width: "100%"}}>
          Registration
      </Button>
      {/* Theme provider button */}
      {/* <Box style={{justifyContent: "flex"}}>
      <a href="" style={{alignItems: "center"}}> Forgot Password?</a>
      <Typography>Or</Typography>
      </Box> */}
<Typography align="center" style={{margin: "10px"}}>Or</Typography>      
      <Button variant="outlined" onClick={login}  style={{width: "100%",  color: "#ffc400"}}>
          Sign in with Facebook
      </Button>
      </div>
   </form>
            </CardContent>
            
        </Card>

                        
        </Grid>
        </Grid>
        <Footer />
    </Box>
    )
}
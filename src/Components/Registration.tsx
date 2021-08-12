import React from 'react';
import {Box,Typography,Grid,Paper,Divider} from "@material-ui/core";
import Navbar from './Navbar';
import Footer from './Footer';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, useTheme } from '@material-ui/styles';
import CardContent from '@material-ui/core/CardContent';
import image3 from '../image/about_us.jpg';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    regbox: {
      display: 'flex',
      marginTop: "60px",
      marginBottom: "60px",
      borderRadius: "25px",
    },
    details: {
        
    },
    content: {
      flex: '1 0 auto',
      padding: "40px",
    },
    cover: {
      width: 251,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
    //  paddingLeft: theme.spacing(1),
    //  paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    primary: {
        color: "#8517FF",
    },
    formcolor: {
        color: "#8517FF",
        width: "100%",
        marginTop: "15px",
    },
    loginbutton: {
        marginTop: "10px",
        backgroundColor: "#8517FF",
        color: "white",
    },
    media: {
        width: "100%",
    }
  }));
export default function Registration(){
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Grid container style={{ marginTop: "65px" }}>
            {/* <Navbar /> */}
            <Grid item style={{ width:"50%", marginLeft: "350px" }} >
             <Card className={classes.regbox} >
                <div className={classes.details}>
                
                </div>
              
                <CardMedia
                    className={classes.cover}
                    image={image3}
                    title="login"
                
                />
                <CardContent className={classes.content} style={{padding: "68px", width: "80px"}}>
                    <Typography component="h5" variant="h5">
                        Registration Form
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Register an account and start browsing thousands of Aftermarket and OEM car parts. Already have an account?
                    </Typography>
                    <Typography className={classes.primary}>
                        Log In
                    </Typography>
                    <form  noValidate autoComplete="off">
                    <div className={classes.details} >
                
      <TextField
          required
          id="outlined-required"
          label="Email"
          placeholder="Enter Email Id"
          variant="outlined"
          className={classes.formcolor}

        />
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          placeholder="Enter Password"
          autoComplete="current-password"
          variant="outlined"
          className={classes.formcolor}
        />
              <TextField
          id="outlined-password-input"
          label="Repeat Password"
          type="Repeat password"
          placeholder="Enter Password"
          autoComplete="repeat-password"
          variant="outlined"
          className={classes.formcolor}
        />
          <Button className={classes.loginbutton} style={{width: "100%"}}>
              Registration
          </Button>
          <Typography align="center" style={{margin: "5px"}}>Or</Typography>
          <Button variant="outlined" style={{width: "100%"}}>
              Sign in with Facebook
          </Button>
          </div>
       </form>
                </CardContent>
                
            </Card>

                            
            </Grid>

            <Footer />
        </Grid>
    )

}
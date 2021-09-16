import React from 'react';
import {Box,Typography,Grid} from "@material-ui/core";
// import Navbar from './Navbar';
import Footer from './Footer'; 
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import loginimage from '../image/login/login.png';
import {Link} from 'react-router-dom';
// import IconButton from '@material-ui/core/IconButton';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import {UserAgentApplication} from 'msal';
// import {config} from'../config';
import {useHistory} from 'react-router-dom';
// import { userInfo } from 'os';
const useStyles = makeStyles((theme) => ({
    main: {
      display: 'flex',
      marginTop: "60px",
      marginBottom: "60px",
      borderRadius: "25px",
      
    },
    details: {
        
    },
    content: {
      flex: '1 0 auto',
    //  padding: "40px",
      padding: "68px", width: "80px",
      [theme.breakpoints.down("md")]:{
        padding: "30px",

    },
      [theme.breakpoints.down("sm")]:{
        padding: "20px 25px",
        width: "30px",
    },
    },
    cover: {
      width: 251,
      [theme.breakpoints.down("sm")]:{
        display:"none"
    },
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
      '&: hover': {
        backgroundColor: "#8517FF",
        color: "white",
      }
    },
    media: {
        width: "100%",
    },
    formdetails: {
      display: "flex",
      [theme.breakpoints.down("sm")]:{
        display:"block"
    },
    },
    logingrid: {
      width:"50%", 
      marginLeft: "350px",
      [theme.breakpoints.down("md")]:{
        marginLeft: "220px",
        width: "60%",
      },
      [theme.breakpoints.down("sm")]:{
      marginLeft: "0px",
      width: "100%",
    },
    },
    marginlaptopscreen: {
    marginTop: "65px",
    [theme.breakpoints.down("sm")]:{
      marginTop: "0px",
    },
    },
  }));
export default function Login(props){

    const classes = useStyles();
    // const theme = useTheme();
    // const isMatchscreensize = theme.breakpoints.down("sm");
  //   const login= async ()=>{
  //     var client = new UserAgentApplication(config);
  //     var request ={
  //         scopes: ['https://o365mon.kusto.windows.net/user_impersonation']
  //     }
  //     let loginResponse= await client.loginPopup(request);
  //     console.log(loginResponse);
  // }
  const handeldetails = (e) => {

    console.log(loginuser);
    name = e.target.name;
    value = e.target.value;
    setLoginUser({ ...loginuser, [name]: value});
  }
  const history = useHistory();
  const [loginuser, setLoginUser] = React.useState({
    email: "", password: "",
     });
     let name, value;
   const postHandler = async(e) => {
   

     // post request
   const {email, password} = loginuser;
     const res = await fetch("https://smart-parts.herokuapp.com/login", {
       method: "POST",
      headers: {
       "Content-Type": "application/json",
     
      },
     body: JSON.stringify({
         email, password
       })
      
   
     })
  //  //  .then(res => res.text())
  //  //  .then((data) => console.log(data));
    
      //const data = await res.json();
      console.log(res);
    if (res.status === 200 || !res){
      window.alert("Login successfull");
      console.log("Successfull Login"); 
      history.push('/myprofile');
      props.setIsLogin(true);
      }else {  
      window.alert("Invalid User");
      console.log("Invalid User");
      props.setIsLogin(false);
       }
      }
 //     if (res.email == loginuser.email)
    return (
   
        <Box >
            <Grid container className={classes.marginlaptopscreen} >
            <Grid item  className={classes.logingrid} >
             <Card className={classes.main}  >
                <div className={classes.details}>
                
                </div>
              
                <CardMedia
                    className={classes.cover}
                    image={loginimage}
                    title="login"
                
                />
                <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        Login Form
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Please use the form to Log In. Don't have any account yet?

                    </Typography>
                    <Link to="/registration">
                    <Typography className={classes.primary}>
                        Sign Up
                    </Typography></Link>
                    <form className={classes.formdetails} noValidate autoComplete="off">
                    <div className={classes.details} >
                
      <TextField
          required
          id="outlined-required"
          label="Email"
          placeholder="Enter Email Id"
          variant="outlined"
          className={classes.formcolor}
          type="text"
          value={loginuser.email}
          name="email"
          onChange={handeldetails}
        />
      <TextField
          
          id="outlined-password-input"
          label="Password"
          type="password"
          placeholder="Enter Password"
          autoComplete="current-password"
          variant="outlined"
          className={classes.formcolor}
          value={loginuser.password}
          name="password"
          onChange={handeldetails}
        />
          <Button onClick={postHandler} className={classes.loginbutton} style={{width: "100%"}}>
              Login 
          </Button>
          {/* Theme provider button */}
          <Typography align="center" style={{margin: "5px"}}><a href="/login">Forgot Password?</a></Typography>
          <Typography align="center" style={{margin: "5px"}}>Or</Typography>
          <Button variant="outlined" style={{width: "100%"}} >
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
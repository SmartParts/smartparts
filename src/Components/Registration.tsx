import React from 'react';
import {Typography,Grid} from "@material-ui/core";
// import Navbar from './Navbar';
import Footer from './Footer';
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom';
// import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import registrationimage from '../image/registration/registration.png';
// import IconButton from '@material-ui/core/IconButton';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import {config} from'../config';
// import {UserAgentApplication} from 'msal';
import { useHistory} from 'react-router-dom';
// import { DH_CHECK_P_NOT_SAFE_PRIME } from 'constants';
const useStyles = makeStyles((theme) => ({
    regbox: {
      display: 'flex',
      marginTop: "60px",
      marginBottom: "60px",
      borderRadius: "25px",
    },
    details: {
        
    },
    registrationform: {
      display: "flex",
      [theme.breakpoints.down("sm")]:{
        display:"block"
    },
    },
    content: {
      flex: '1 0 auto',
      
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
    registrationbutton: {
        marginTop: "10px",
        backgroundColor: "#8517FF",
        color: "white",
        '&:hover': {
          backgroundColor: "#8517FF",
          color: "white",
        }
    },
    media: {
        width: "100%",
    },
    margintopforlaptopscreen: {
      marginTop: "65px",
      [theme.breakpoints.down("sm")]:{
        marginTop: "0px",
      },
      },
      registrationgrid: {
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
  }));
export default function Registration(){
    const classes = useStyles();
    // const theme = useTheme();
  //   const login= async ()=>{
  //     var client = new UserAgentApplication(config);
  //     var request ={
  //         scopes: ['https://o365mon.kusto.windows.net/user_impersonation']
  //     }
  //     let loginResponse= await client.loginPopup(request);
  //     console.log(loginResponse);
  // }
const history = useHistory();
  const [user, setUser] = React.useState({
 email: "", password: "", repeatpassword: "",
  });
  const [emailerror, setEmailError]= React.useState("");
  const [passworderror, setPasswordError]= React.useState("");
  const [repeatpassworderror, setRepeatPasswordError]= React.useState("");
  let name, value;
const handleInputs = (e) => {

  console.log(user);
  name = e.target.name;
  value = e.target.value;
  setUser({ ...user, [name]: value});
}

const submitHandler = async(e) => {
   

 // post request
 e.preventDefault();
 const {email, password} = user;
 const res = await fetch("https://smart-parts.herokuapp.com/signup", {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
     
   },
   body: JSON.stringify({
     email, password
   })
   

 })
//  .then(res => res.text())
//  .then((data) => console.log(data));
 
  //const data = await res.json();
  console.log(res);
if (res.status === 422 || !res){
     window.alert("Invalid Registration");
     console.log("Invalid Registration");
  }else{
    
    
    const isValid = validate();
    if(isValid){
      history.push('/login');   
      window.alert("Registration successfull");
      console.log("Successfull Registration");
    } else{
      history.push('/registration');
      window.alert("Please fill the correct details");
      console.log("Please fill the correct details");
      setUser(user);

    }
 
   }

}

const validate = () => {
  
  let emailerror = "";
  let passworderror = "";
  let repeatpassworderror = "";
  var pattern = new RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);

  var passwordregularExpression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (!user.email.match(pattern)){
    emailerror="invalid email";
   }else if(!user.password.match(passwordregularExpression)){
     passworderror="Password must contain more than 6 characters including one uppercase, one lowercase, one digit and one special character";
   }
  else if(user.password!== user.repeatpassword){
    repeatpassworderror="password doesnot match";
  }

  if (emailerror){
    setEmailError(emailerror);
    return false;
  }
  if (passworderror){
    setPasswordError(passworderror);
    return false;
  }
  if (repeatpassworderror){
    setRepeatPasswordError(repeatpassworderror);
    return false;
  }
  return true;
}
    return (
      <>
        <Grid container className={classes.margintopforlaptopscreen} >
            {/* <Navbar /> */}
            <Grid item className={classes.registrationgrid}  >
             <Card className={classes.regbox} >
                <div className={classes.details}>
                
                </div>
              
                <CardMedia
                    className={classes.cover}
                    image={registrationimage}
                    title="login"
                
                />
                <CardContent className={classes.content} >
                    <Typography component="h5" variant="h5">
                        Registration Form
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Register an account and start browsing thousands of Aftermarket and OEM car parts. Already have an account?
                    </Typography>
                    <Link to="/login">
                    <Typography className={classes.primary}>
                        Log In
                    </Typography>
                    </Link>
                    <form method="POST" onSubmit={submitHandler}  className={classes.registrationform}   noValidate autoComplete="off">
                    <div className={classes.details} >
                
      <TextField
          required
          id="email"
          label="Email"
          placeholder="Enter Email Id"
          variant="outlined"
          className={classes.formcolor}
          type="text"
          value={user.email}
          name="email"
          onChange={handleInputs}
        />
        <div style={{fontSize: "12", color: "red"}}>
        {emailerror}
        </div>
      <TextField
          required
          id="password"
          label="Password"
          type="password"
          placeholder="Enter Password"
          autoComplete="current-password"
          variant="outlined"
          className={classes.formcolor}
          value={user.password}
          name="password"
          onChange={handleInputs}
        />
        <div style={{fontSize: "12", color: "red"}}>
        {passworderror}
        </div>
              <TextField
          id="outlined-password-input"
          label="Repeat Password"
          type="password"
          placeholder="Enter Password"
          autoComplete="repeat-password"
          variant="outlined"
          className={classes.formcolor}
          value={user.repeatpassword}
          name="repeatpassword"
          onChange={handleInputs}
        />
        <span style={{fontSize: "12", color: "red"}}>
{repeatpassworderror}
</span>
          <Button onClick={submitHandler}  className={classes.registrationbutton} style={{width: "100%"}}>
              Registration
          </Button>
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
        </>
    )

}
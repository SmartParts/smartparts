import {useState} from 'react'; 
import Navbar from './Components/Navbar';
import {HashRouter} from 'react-router-dom';
// import Home from './Components/Home';
// import Others from './Components/Others';
import Body2 from './Components/Body2';
import {Grid,Paper,CssBaseline} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {createMuiTheme,ThemeProvider} from "@material-ui/core/styles";

const App = ()=> {
  
  
  const [lightTheme, setLightTheme] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const onThemeChangeHandler=()=>{
    setLightTheme(!lightTheme);
  
   }
   const useStyles = makeStyles((theme)=>({
    root:{
//width: "100vw",
 //       height:"100vh",
        padding:"0px",
        
    },
    paper:{
        backgroundColor:lightTheme?"#ECECEC":"#262837",
    },
}))
const classes= useStyles();
  const theme = createMuiTheme({
    palette:{
      type:lightTheme?"light":"dark",

    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Grid className={classes.root}>
      <Paper square className={classes.paper} >
      <BrowserRouter>      
  
        <Navbar isLogin={isLogin} setIsLogin ={setIsLogin} onThemeChangeHandler={onThemeChangeHandler}/> 
         {/* not required in myprofile */}
        <Body2 setIsLogin ={setIsLogin} />
      </BrowserRouter>
      </Paper>
      </Grid>
      </ThemeProvider>
  );
}

export default App;
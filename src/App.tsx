import {useState} from 'react'; 
import Navbar from './Components/Navbar';
import {BrowserRouter} from 'react-router-dom';
// import Home from './Components/Home';
// import Others from './Components/Others';
import Body from './Components/Body';
import {Grid,Paper,CssBaseline} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {createMuiTheme,ThemeProvider} from "@material-ui/core/styles";

const App = ()=> {
  
  
  const [lightTheme, setLightTheme] = useState(true);

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
  
        <Navbar  onThemeChangeHandler={onThemeChangeHandler}/> 
         {/* not required in myprofile */}
        <Body/>
      </BrowserRouter>
      </Paper>
      </Grid>
      </ThemeProvider>
  );
}

export default App;
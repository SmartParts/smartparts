import {useState} from 'react'; 
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Others from './Components/Others';
import Body from './Components/Body';
import {Box,Grid,Paper,CssBaseline} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {createMuiTheme,ThemeProvider} from "@material-ui/core/styles";



const useStyles = makeStyles((theme)=>({
    root:{
        width: "100vw",
        height:"100vh",
        padding:"0px",
        
    },
    paper:{
      height:"100%",
      backgroundColor:theme.palette.background.default
    }
}))

const App = ()=> {
  
  const classes= useStyles();
  const [lightTheme, setLightTheme] = useState(true);

  const onThemeChangeHandler=()=>{
    setLightTheme(!lightTheme);
   }

  const theme = createMuiTheme({
    palette:{
      type:lightTheme?"light":"dark"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Grid className={classes.root}>
      <Paper square className={classes.paper}>
      <BrowserRouter>
        <Navbar onThemeChangeHandler={onThemeChangeHandler}/>
        <Body/>
      </BrowserRouter>
      </Paper>
      </Grid>
      </ThemeProvider>
  );
}

export default App;
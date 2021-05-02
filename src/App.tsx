import React from 'react'; 
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Others from './Components/Others';
import Body from './Components/Body';
import {Box,Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    root:{
        width: "100vw",
        height:"100vh",
        padding:"0px"
    }
}))

const App = ()=> {
  
  const classes= useStyles();

  return (
      <Box className={classes.root}>
      <BrowserRouter>
       <Box>
        <Navbar/>
          {/* <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={Others}/>
            <Route exact path="/contact" component={Others}/>
          </Switch> */}
          <Body/>
        </Box>
      </BrowserRouter>
      </Box>
  );
}

export default App;
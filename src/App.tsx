import React from 'react'; 
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Others from './Components/Others';

const App = ()=> {
  return (
      <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={Others}/>
            <Route exact path="/contact" component={Others}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
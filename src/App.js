import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container/'
import Navigation from './components/Navigation';
import Etusivu from './components/Etusivu';
import Sarjataulukko from './components/sarjataulukko/Sarjataulukko'


//Axios, router asennettu
const App = () =>  {

  return (
    <Container>
           
      <Router>
     
        <Navigation/>
        <Route exact path="/" component={Etusivu}/>
        <Route exact path="/sarjataulukko" component={Sarjataulukko}/>
      
      </Router>
     
    </Container>
    
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

//Compomemt imports
import Container from 'react-bootstrap/Container/'
import Navigation from './components/Navigation';
import Etusivu from './components/Etusivu';
import Sarjataulukko from './components/sarjataulukko/Sarjataulukko';
import Joukkuetilasto from './components/joukkuetilastot/Joukkuetilasto';
import Joukkueet from './components/joukkueet/Joukkueet';
import Pelaajat from './components/joukkueet/Pelaajat';
import PelaajaData from './components/joukkueet/PelaajaData';



//Axios, router asennettu
const App = () =>  {

  return (
    <Container>
           
      <Router>
     
        <Navigation/>
        
        <Switch>
          <Route exact path="/" component={Etusivu}/>
          <Route exact path="/sarjataulukko" component={Sarjataulukko}/>
          <Route exact path="/joukkueet" component={Joukkueet}/>
          <Route path="/pelaajadata/:id" component={PelaajaData}/>
          <Route path="/sarjataulukko/:id" component={Joukkuetilasto}/>
          <Route path="/joukkueet/:id" component={Pelaajat}/>
          
         
            
        
        </Switch>
      </Router>

      
     
    </Container>
    
  );
}

export default App;

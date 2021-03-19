import React from 'react';
import Col from 'react-bootstrap/Col'

const Etusivu = () => {

    return(
        <Col className="text-center mt-3">
            <h2> Päivityshistoria </h2>
            <b>Sarjataulukko:</b>
            <hr/>   
           
           <b>19.3.2021</b>
           <p> React-bootstrap käännös ja hieman responsiivisuutta. (ei valmis) sekä korjattu scrolbarin ilmestymisestä aiheutuva sivun siirtyminen vasemmalle public/custom.css - tiedostoon</p>
           
           <b>18.3.2021</b>
            <p> Sarjataulukko lisätty </p>     
        </Col>
    );
};

export default Etusivu;
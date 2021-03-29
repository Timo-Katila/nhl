import React, {useState, useEffect} from 'react';
import NhlApi from '../api/NhlApi';
import {NavLink} from 'react-router-dom'
import './Joukkueet.css'

//React bootstrap importit
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Joukkueet = () => {

    const apiUrl = "teams"
    const [joukkueet, setJoukkueet] = useState([])
    
    useEffect(() => {

        const haeData  = async () => {
            try {
                const apiResponse = await NhlApi.get(apiUrl)
                setJoukkueet(apiResponse.data.teams)
            }
            catch (err){
                console.log("error")
            }
        }

        haeData();
       
    },[apiUrl]);
  
    const renderedData = joukkueet.map(joukkue => 
        
        
        <Card key={joukkue.id} className="mt-3 mr-3 mx-auto" style={{ width: '18rem'}}>
        <Card.Img variant="top" src={`/kuvat/${joukkue.id}.png`} alt={joukkue.id} />
        <Card.Body>
            <Card.Title>{joukkue.name}</Card.Title>
            <Card.Text>

                <NavLink className="navlink" to={`/joukkueet/${joukkue.id}`}>
                    <b>Pelaajat</b>
                </NavLink>

                <NavLink className="nav-link" to={`/sarjataulukko/${joukkue.id}`}>
                    <b>Joukueen tilastot</b> 
                </NavLink>
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    
    )
      
    return (
        
        <React.Fragment>
            <h3 className="text-center mt-3">Joukkueet</h3>
            <Row className="testi text-center" >
                {renderedData}
            </Row>
        </React.Fragment>
     )
    };

export default Joukkueet;
import React, {useState, useEffect} from 'react';
import NhlApi from '../api/NhlApi';
import './Joukkueet.css'

//React bootstrap importit
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const Joukkueet = () => {

    const apiUrl = "https://statsapi.web.nhl.com/api/v1/teams"
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
    console.log(joukkueet   )
    const renderedData = joukkueet.map(joukkue => 
        
        
        <Card  className="mt-3 mr-3 mx-auto" style={{ width: '18rem'}}>
        <Card.Img variant="top" src={`/kuvat/${joukkue.id}.png`} alt={joukkue.id} />
        <Card.Body>
          <Card.Title>{joukkue.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    
    )
      
    return (
        
        <React.Fragment>
            <h3 className="text-center mt-3">Joukkeet</h3>
            <Row className="testi text-center" >
                {renderedData}
            </Row>
        </React.Fragment>
     )
    };

export default Joukkueet;
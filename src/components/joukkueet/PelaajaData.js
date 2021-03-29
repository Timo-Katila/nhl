import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import NhlApi from '../api/NhlApi';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



const PelaajaData = () => {
    const {id} = useParams()
    const apiUrl = `https://statsapi.web.nhl.com/api/v1/people/${id}`
    const [pelaajadata, setPelaajadata] = useState ([]);

    useEffect(() => {

        const haeData = async () => {
            
            try{

                const apiResponse = await NhlApi.get(apiUrl);
                console.log(apiResponse)
                setPelaajadata(apiResponse.data.people[0])
            }
            catch (err) {
                console.log(err);
            }


        };

        haeData()
      
    },[apiUrl]);
    console.log(pelaajadata)
    return(

        <Col className="text-center">
        <Card key={pelaajadata.id} className="mt-3 mr-3 mx-auto" style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title> {pelaajadata.fullName}</Card.Title>
            </Card.Body>




        </Card>

        
             
        </Col>
    ) 
    
};

export default PelaajaData;
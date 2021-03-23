import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import NhlApi from '../api/NhlApi';
import Joukkue from './Joukkue';
import Alert from 'react-bootstrap/Alert';

const Joukkuetilasto = () => {

    const {id} = useParams();
    const apiUrl = `teams/${id}/stats`
    const [joukkuetilastot, setJoukkuetilastot] = useState({
        joukkue: "",
        tilastot: [],
        tilastotRanking: [],    
        virhe: ""                                                        
    })

    useEffect(() => {
           
        const haeData = async () => {
            try {
             
                const apiResponse = await NhlApi.get(apiUrl)
                setJoukkuetilastot(joukkueData => ({...joukkueData,
                    joukkue : apiResponse.data.stats[0].splits[0].team.name,
                    tilastot : apiResponse.data.stats[0].splits[0].stat,
                    tilastotRanking : apiResponse.data.stats[1].splits[0].stat
                }))
            }
           catch(err) {
                setJoukkuetilastot(JoukkueData => ({...JoukkueData, virhe : "Tietokantaan ei saada yhteyttä!"}))
            };
        };
        haeData()
    },[apiUrl]);
   
    return(
           
        <React.Fragment>
            {
                joukkuetilastot.virhe
                ?
                  <Alert variant="danger" className="mt-4"> {joukkuetilastot.virhe} </Alert>
                :
                    [<React.Fragment key="Sarjataulukko">
                        <Joukkue joukkuetilastot={joukkuetilastot}/>
                    </React.Fragment>]
            }
        </React.Fragment>
    );
};

export default Joukkuetilasto;
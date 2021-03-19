import React, { useState, useEffect, Fragment } from 'react';
import Joukkueet from './Joukkueet';
import NhlApi from '../api/NhlApi';

import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';

const Sarjataulukko = () => {
    
    const [divisions, setDivisions] = useState({
        central : [],
        east : [],
        west : [],
        north : [],
        virhe : ""
       
    });

    useEffect(() => {
        const haeData = async () => {
            
            try {
                const apiResponse = await NhlApi.get(`standings`)
                setDivisions({...divisions,
                    central : apiResponse.data.records[0].teamRecords,
                    east :  apiResponse.data.records[1].teamRecords,
                    west :  apiResponse.data.records[2].teamRecords,
                    north : apiResponse.data.records[3].teamRecords,
                    ladataan : false
                })
            }
            catch(err) {
                setDivisions({...divisions, virhe : "Tietokantaan ei saada yhteyttä!"})
            };
        };
        haeData();  
       
    
    },[])
 
    console.log(divisions)
    return(
          
        <React.Fragment>
            {
                divisions.virhe
                ?
                  <Alert variant="danger" className="mt-4"> {divisions.virhe} </Alert>
                :
                    [<React.Fragment>
                        <Col className="text-center mt-3"><h2>Sarjataulukko</h2></Col>
                        <Joukkueet divisioona={"Discover Central"} joukkueet={divisions.central} />
                        <Joukkueet divisioona={"MassMutual East"} joukkueet={divisions.east}/>
                        <Joukkueet divisioona={"Honda West"} joukkueet={divisions.west} />
                        <Joukkueet divisioona={"Scotia North"} joukkueet={divisions.north}/>
                        

                       <Table responsive className="mt-4">
                           <thead className="thead-dark">
                               <tr>
                                   <th colSpan="12">Lyhenteet:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                   <th>O = Ottelut</th>
                                   <th>V = Voitot</th>
                                   <th>T = Tasapelit</th>
                                   <th>H = Häviöt</th>
                                   <th>TM = Tehdyt maalit</th>
                                   <th>OM = Päästetyt maalit</th>
                                   <th>P = Pisteet</th>
                                   <th>P/O = Piste %</th>
                               </tr>
                           </tbody>
                       </Table>
                    </React.Fragment>]
            }
        </React.Fragment>
    );
};

export default Sarjataulukko;
import React, {useState, useEffect} from 'react';
import NhlApi from '../api/NhlApi';
import {useParams} from 'react-router-dom';
import PelaajaLista from './Pelaajalista';

// import Pelaajalista from './Pelaajalista';


const Pelaajat = () => {

    const {id}   = useParams();
    const apiUrl = `teams/${id}?expand=team.roster`
    const [ladataan, setLadataan] = useState(true)
    const [pelaajat, setPelaajat] = useState ([])
    
    useEffect(() => {
        
        const haeData = async () => {
            
            try{
                               
                const apiResponse = await NhlApi.get(apiUrl)
                let pelaajaData = apiResponse.data.teams[0].roster.roster
                let pelaaja = {
                    joukkueenNimi : apiResponse.data.teams[0].name,
                    maalivahdit : [],
                    puolustajat : [],
                    hyokkaajatOikea : [],
                    hyokkaajatVasen : [],
                    keskushyokkaajat : []
                };             
               
                pelaajaData.forEach((item) =>  {
                                         
                    if (item.position.name === "Goalie") {
                        pelaaja.maalivahdit.push(item)
                    };
                    if (item.position.name === "Defenseman") {
                        pelaaja.puolustajat.push(item)
                    };
                    if (item.position.name === "Right Wing") {
                        pelaaja.hyokkaajatOikea.push(item)
                    };
                    if (item.position.name === "Left Wing") {
                        pelaaja.hyokkaajatVasen.push(item)
                    };
                    if (item.position.name === "Center") {
                        pelaaja.keskushyokkaajat.push(item)
                    };
                });
                setPelaajat(pelaaja);
                setLadataan(false)      
            }
            catch (err) {
               console.log("Tietokantaan ei saada yhteytt??")
            };
        };   
        haeData();
    },[apiUrl]);
   
    return(
        <React.Fragment>
     
            {
                ladataan
                ? 
                    <p>ladataan</p>
            
                :
                <React.Fragment>
                    <PelaajaLista otsikko="Maalivahdit"  pelipaikka={pelaajat.maalivahdit}/>
                    <PelaajaLista otsikko="Puolustajat"  pelipaikka={pelaajat.puolustajat}/>
                    <PelaajaLista otsikko="Keskushy??kk????j??t"  pelipaikka={pelaajat.keskushyokkaajat}/>
                    <PelaajaLista otsikko="Oikea laitahy??kk????j??"  pelipaikka={pelaajat.hyokkaajatOikea}/>
                    <PelaajaLista otsikko="Vasen laitahy??kk????j??"  pelipaikka={pelaajat.hyokkaajatVasen}/>
               </React.Fragment>
            } 
        </React.Fragment>
    );
};
export default Pelaajat
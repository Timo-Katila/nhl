import React from 'react';

//Bootrap imports
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const Joukkue = ({ joukkuetilastot }) => {
   
    Object.entries(joukkuetilastot.tilastotRanking).map(([key, value]) => { //Poistaa englanninkieliset loppuliitteet //varmaan forEachillakin olisi voinut tehdä.
      
        if (value.length > 3) { 
            joukkuetilastot.tilastotRanking[key] = value.slice(0,2)
         
        }

        if (value.length === 3) {
            joukkuetilastot.tilastotRanking[key] = value.slice(0,1)
          
        }

        return () => {}
    })
   
    return(
        <Col>
        <h2 className="text-center mt-3">Joukkuetilasto</h2>
        <Table key="joukkue" responsive>
            <thead className="thead-dark">
                <tr className="text-center">
                    <th scope="col" colSpan="12">{joukkuetilastot.joukkue}</th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Ottelut:</th>
                    <th colSpan="1"> {joukkuetilastot.tilastot.gamesPlayed}</th>
                    <th></th>
                    <th colSpan="1">Vastustajan laukaukset / ottelu:</th>
                    <th colSpan="1">{joukkuetilastot.tilastot.shotsAllowed}</th>
                    
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Voitot:</th>
                    <th colSpan="1"> {joukkuetilastot.tilastot.wins}</th>
                    <th></th>
                    <th colSpan="1">Maalivahtien torjuntaprosentti:</th>
                    <th colSpan="1">{(joukkuetilastot.tilastot.savePctg * 100).toFixed(2)}%</th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Tasapelit:</th>
                    <th colSpan="1"> {joukkuetilastot.tilastot.ot}</th>
                    <th></th>
                    <th colSpan="1">Laukauksia / ottelu:</th>
                    <th colSpan="1">{joukkuetilastot.tilastot.shotsPerGame}</th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Häviöt:</th>
                    <th colSpan="1"> {joukkuetilastot.tilastot.losses}</th>
                    <th></th>
                    <th colSpan="1">Laukausten maalintekoprosentti:</th>
                    <th colSpan="1">{joukkuetilastot.tilastot.shootingPctg}%</th>
                 
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Pisteet:</th>
                    <th colSpan="1"> {joukkuetilastot.tilastot.pts}</th>
                    <th></th>
                    <th colSpan="1">Ylivoimia:</th>
                    <th colSpan="1">{joukkuetilastot.tilastot.powerPlayOpportunities} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloitukset:</th>
                    <th colSpan="1">{joukkuetilastot.tilastot.faceOffsTaken}</th>
                    <th></th>
                    <th colSpan="1">Ylivoima maalit:</th>
                    <th colSpan="1">{joukkuetilastot.tilastot.powerPlayGoals} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloituksia voitettu:</th>
                    <th colSpan="1">{joukkuetilastot.tilastot.faceOffsWon}</th>
                    <th></th>
                    <th colSpan="1">Päästetyt ylivoimamaalit:</th>
                    <th colSpan="1">{joukkuetilastot.tilastot.powerPlayGoalsAgainst} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">AloituksiaHäviöt:</th>
                    <th colSpan="1">{joukkuetilastot.tilastot.faceOffsLost}</th>
                    <th></th>
                    <th colSpan="1">Ylivoima %</th>
                    <th colSpan="1">{joukkuetilastot.tilastot.powerPlayGoalsAgainst}% </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloitusvoitto %</th>
                    <th colSpan="1">{ (joukkuetilastot.tilastot.faceOffsWon / joukkuetilastot.tilastot.faceOffsTaken * 100).toFixed(2)}%</th>
                    <th></th>
                    <th colSpan="1">Alivoima %</th>
                    <th colSpan="1">{joukkuetilastot.tilastot.penaltyKillPercentage}% </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloitustenhäviö %</th>
                    <th colSpan="1">{ (joukkuetilastot.tilastot.faceOffsLost / joukkuetilastot.tilastot.faceOffsTaken * 100).toFixed(2)}%</th>
                    <th colSpan="10"></th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Maaleja tehty / ottelu</th>
                    <th colSpan="1">{ joukkuetilastot.tilastot.goalsPerGame}</th>
                    <th colSpan="10"></th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Maaleja päästetty / ottelu</th>
                    <th colSpan="1">{ joukkuetilastot.tilastot.goalsAgainstPerGame}</th>
                    <th colSpan="10"></th>
                </tr>
                
                {/* //Ranking */}

                <tr className="text-center">
                    <th scope="col" colSpan="12">Ranking</th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Voittoja:</th>
                    <th colSpan="1">{ joukkuetilastot.tilastotRanking.wins}</th>
                    <th colSpan=""></th>
                    <th colSpan="1">Vastustajan laukaukset:</th>
                    <th colSpan="1">{joukkuetilastot.tilastotRanking.shotsAllowed} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Tasapelit:</th>
                    <th colSpan="1">{ joukkuetilastot.tilastotRanking.ot}</th>
                    <th></th>
                    <th colSpan="1">Maalivahtien torjuntaprosentti:</th>
                    <th colSpan="1">{joukkuetilastot.tilastotRanking.savePctRank} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Vähiten häviöitä:</th>
                    <th colSpan="1">{ joukkuetilastot.tilastotRanking.losses}</th>
                    <th></th>
                    <th colSpan="1">Laukauksia / ottelu:</th>
                    <th colSpan="1">{joukkuetilastot.tilastotRanking.shotsPerGame} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Pisteitä:</th>
                    <th colSpan="1">{ joukkuetilastot.tilastotRanking.pts}</th>
                    <th></th>
                    <th colSpan="1">Laukausten maalintekoprosentti:</th>
                    <th colSpan="1">{joukkuetilastot.tilastotRanking.shootingPctRank} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Pisteitä / peli:</th>
                    <th colSpan="1">{ joukkuetilastot.tilastotRanking.ptPctg}</th>
                    <th></th>
                    <th colSpan="1">Ylivoima:</th>
                    <th colSpan="1">{joukkuetilastot.tilastotRanking.powerPlayOpportunities} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloituksia:</th>
                    <th colSpan="1">{ joukkuetilastot.tilastotRanking.faceOffsTaken}</th>
                    <th></th>
                    <th colSpan="1">Ylivoiman maalinteko %</th>
                    <th colSpan="1">{joukkuetilastot.tilastotRanking.powerPlayPercentage} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloitusvoitot:</th>
                    <th colSpan="1">{ joukkuetilastot.tilastotRanking.faceOffsWon}</th>
                    <th></th>
                    <th colSpan="1">Ylivoima maalit:</th>
                    <th colSpan="1">{joukkuetilastot.tilastotRanking.powerPlayGoals} </th>
                    
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloitushäviöt:</th>
                    <th colSpan="1">{ joukkuetilastot.tilastotRanking.faceOffsLost}</th>
                    <th></th>
                    <th colSpan="1">Ylivoimalla päästetyt maalit:</th>
                    <th colSpan="1">{joukkuetilastot.tilastotRanking.powerPlayGoalsAgainst} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloitus voitot %</th>
                    <th colSpan="1">{ joukkuetilastot.tilastotRanking.faceOffWinPercentage}%</th>
                    <th></th>
                    <th colSpan="1">Jäähyjä:</th>
                    <th colSpan="1">{joukkuetilastot.tilastotRanking.penaltyKillOpportunities} </th>
                </tr>
                <tr className="thead-light">
                <th colSpan="1">Maaleja tehty / ottelu:</th>
                    <th colSpan="1">{ joukkuetilastot.tilastotRanking.goalsPerGame}</th>
                    <th></th>
                    <th colSpan="1">Alivoimalla päästetyt maalit:</th>
                    <th colSpan="1">{joukkuetilastot.tilastotRanking.powerPlayGoalsAgainst} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Maaleja päästetty / ottelu:</th>
                    <th colSpan="1">{ joukkuetilastot.tilastotRanking.goalsAgainstPerGame}</th>
                    <th colSpan="10"></th>
                </tr>
                
            </thead>
           
        </Table>
    </Col>
    );
};

export default Joukkue;
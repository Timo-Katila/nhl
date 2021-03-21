import React from 'react';

//Bootrap imports
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const Joukkue = ({ joukkuetilastot }) => {
             
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
                    <th colSpan="1">Aloituksia Hävitty:</th>
                    <th colSpan="1">{joukkuetilastot.tilastot.faceOffsLost}</th>
                    <th></th>
                    <th colSpan="1">Ylivoima %</th>
                    <th colSpan="1">{joukkuetilastot.tilastot.powerPlayGoalsAgainst}% </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloitusten voitto %</th>
                    <th colSpan="1">{ (joukkuetilastot.tilastot.faceOffsWon / joukkuetilastot.tilastot.faceOffsTaken * 100).toFixed(2)}%</th>
                    <th></th>
                    <th colSpan="1">Alivoima %</th>
                    <th colSpan="1">{joukkuetilastot.tilastot.penaltyKillPercentage}% </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloitusten häviö %</th>
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
                      

            </thead>
           
        </Table>
    </Col>
    );
};

export default Joukkue;
import React from 'react';
import {NavLink} from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table';

const Joukkueet = ({joukkueet, divisioona}) => {
    
    const renderedData  = joukkueet.map((joukkue) => {
         
        return(
            
            <tr className="bg-light" key={joukkue.team.id}>
                
                <td>{joukkue.divisionRank}.
                    <NavLink to={`/sarjataulukko/${joukkue.team.id}`}> {joukkue.team.name}</NavLink>
                </td>
                <td>{joukkue.gamesPlayed}</td>
                <td>{joukkue.leagueRecord.wins}</td>
                <td>{joukkue.leagueRecord.ot}</td>
                <td>{joukkue.leagueRecord.losses}</td>
                <td>{joukkue.goalsScored}</td>
                <td>{joukkue.goalsAgainst}</td>
                <td>{joukkue.points}</td>
                <td>{joukkue.pointsPercentage.toFixed(2)}</td>
            </tr>
        ) 
    });
   
    return (
        <Col>
            <Table key="joo" responsive>
                <thead className="thead-dark">
                    <tr className="text-center">
                        <th scope="col" colSpan="12">{divisioona}</th>
                    </tr>
                    <tr className="thead-light">
                        <th>Joukkue</th>
                        <th>O</th>
                        <th>V</th>
                        <th>T</th>
                        <th>H</th>
                        <th>TM</th>
                        <th>PM</th>
                        <th>P</th>
                        <th>P/O</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedData}
                </tbody>
            </Table>
        </Col>
    );
};

export default Joukkueet;
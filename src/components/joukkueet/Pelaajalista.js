import React from 'react';
import {NavLink} from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table';

const PelaajaLista = ({ otsikko,  pelipaikka }) => {

    const renderedData  = pelipaikka.map((paikka) => {
       
        return(
            <tr className="text-center">
                <td colSpan="12">
                    <NavLink className="navlink" to={`/pelaajadata/${paikka.person.id}`}> {paikka.jerseyNumber} {paikka.person.fullName}</NavLink>
                </td>
            </tr>
        );
        });

    return(
     
        <Col>
            <Table key="joo" responsive>
                <thead className="thead-dark">
                    <tr className="text-center">
                        <th scope="col" colSpan="12">{otsikko}</th>
                    </tr>
                
                </thead>
                <tbody>
                    {renderedData}
                </tbody>
            </Table>
        </Col>
    )
};

export default PelaajaLista;
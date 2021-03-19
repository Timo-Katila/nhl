import { useState, useEffect } from 'react';
//import axios from 'axios';
import nhlapi from '../api/NhlApi';

//GET https://statsapi.web.nhl.com/api
const NhlApi = (polku) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        haeData(polku);
    },[]);

    const haeData = async (polku) => {

        try {
            const apiResponse = await nhlapi.get(`${polku}`)
            setData(apiResponse)
        }
        catch(err) {
            console.log("Virhe")
        };
    };

    return data;
};

export default NhlApi;
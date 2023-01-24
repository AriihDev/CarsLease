import React from 'react'
import ContractTable from '../Components/Contract/ContractTable'
import api from '../api/carlease'
import { useEffect, useState , } from 'react';

function AllContracts() {

    let [contracts, setContracts] = useState([]);

        useEffect (() => {
        getContracts();
        },[]);
        
        const getContracts = async () => {
        try {
            const result = await api.get("/contracts/");
            setContracts(result.data);
        } catch (error) {
            console.log(error)
        }
        }
        
    return (
        <div>
            <h2>Tout les contracts</h2>
            <ContractTable contracts = {contracts} />
        </div>
    )
    }

export default AllContracts
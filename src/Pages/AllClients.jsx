import React from 'react'
import ClientsTable from '../Components/Client/ClientsTable'
import api from '../api/carlease'
import { useEffect, useState , } from 'react';

function AllClients() {
let [clients, setClients] = useState([]);

useEffect (() => {
  getClients();
},[]);

const getClients = async () => {
  try {
    const result = await api.get("/clients/");
    setClients(result.data);
  } catch (error) {
    console.log(error)
  }
}



  return (
    <div>
      <h2>Tout les clients</h2>
      <ClientsTable clients = {clients} refresh={getClients} />
    </div>
  );
}

export default AllClients
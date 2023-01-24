import React from 'react'
import CarsList from '../Components/Car/CarsList'
// import axios from "axios";
import api from '../api/carlease'
import { useEffect, useState , } from 'react';

/*
props = paramètres (fonctions classiques)
state = variables locales = représente l'ensembles des données dynamiques d'une page
*/

// const carsArray = [
// {
//     registration: "AG984",
//     brand : "BMW",
//     color : "Yellow",
//     fuel : "Diesel",
//     power : "1.9",
//     maxSpeed : "230",
//     Km : 100000,
//     inUse : true,
//     firstUse : "02-03-2011",
// },

// {
//     registration: "AG984",
//     brand : "BMW",
//     color : "Yellow",
//     fuel : "Diesel",
//     power : "1.9",
//     maxSpeed : "230",
//     Km : 100000,
//     inUse : true,
//     firstUse : "02-03-2011",
// },
// ];

function AllCars() {
    let [cars, setCars] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//           const result = await axios("http://localhost:7070/api/v1/cars");
//           setCars(result.data);
//           console.log(result.data);
//         }
//         fetchData();
// }, []);

    // useEffect(async () => {
    // const result = await axios ("http://localhost:9001/api/v1/cars/");
    // setCars(result.data);
    // console.log(result.data);
    // }, []);

    useEffect (() => {
        getCars();
    },[]);

    const getCars = async () => {
        try {
        const result = await api.get("/cars/");
        setCars(result.data);
        } catch (error) {
        console.log(error)
        }
    }

return (
    <div>
        <h2>Toutes les voitures</h2>
        <CarsList cars = {cars} />
    </div>
    )
}

export default AllCars
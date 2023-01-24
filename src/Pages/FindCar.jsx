import React, { useState } from 'react'
import CarItem from "../Components/Car/CarItem";
import FindCarForm from "../Components/Car/FindCarForm";
import { Link } from "react-router-dom";


function FindCar() {
        const [car, setCar] = useState(null);

        const updateCar = (findedCar) => {
        setCar(findedCar);
        };
    
        return (
        <div>
            <h2>Trouver une voiture</h2>
            <FindCarForm setCar={updateCar} />
            {car && <CarItem car={car} />}
            <Link to="/newcontract">OK</Link>
        </div>
        );
    }
    

export default FindCar
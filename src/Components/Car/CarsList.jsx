import React from 'react'
import CarItem from './CarItem';
import api from '../../api/carlease'
import styles from "./CarsList.module.css";

function CarsList(props) {

    const deleteHandler = async (car) => {
        try {
            await api.delete("/cars/" + car.id);
            props.refresh();
        } catch (error) {
            console.log(error)
        }
    }

return (
    <div className={styles["cars-container"]}>
        {props.cars.map((car)=> {
            return (
                
                    <CarItem key={car.id} car={car}  onDelete={deleteHandler} />
                
            );
        })}
    </div>
    )
}

export default CarsList
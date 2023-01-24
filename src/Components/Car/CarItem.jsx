import React, { useContext } from 'react'
import styles from './CarItem.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faList,
    faHouseMedical,
    faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MainContext from "../../Store/Main";


function CarItem(props) {
    const context = useContext(MainContext);
    const updateCar = () => {
    context.setCar(props.car);
    context.setAction("editCar");
    };
    console.log(props.car);

return (
        <div className={styles.CarItem}>
        <div className="image-container">
        <p>New Model !</p>
        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className={styles["car-info"]}>
        <h3>{props.car.registration}</h3>
        <p>{props.car.brand}</p>
        <p>{props.car.color}</p>
        <p>{props.car.fuel}</p>
        <p>{props.car.power}</p>
        <p>{props.car.maxSpeed}</p>
        <p>{props.car.Km}</p>
        <p
            className={
            props.car.inUse ? styles["green-border"] : styles["red-border"]
            }
        >
            {props.car.inUse ? "Disponible" : "Indisponible"}
        </p>
        <p>{props.car.firstUse}</p>
        </div>
        <div className={styles.cta}>
        <div
            className={styles["cta-item"]}
            onClick={() => props.onDelete(props.car.id)}
        >
            <FontAwesomeIcon
            icon={faTrash}
            className={styles["cta-icon"]}
            ></FontAwesomeIcon>
        </div>
        <div className={styles["cta-item"]}>
            <FontAwesomeIcon
            icon={faList}
            className={styles["cta-icon"]}
            ></FontAwesomeIcon>
        </div>
        <div className={styles["cta-item"]}>
            <FontAwesomeIcon
            icon={faHouseMedical}
            className={styles["cta-icon"]}
            ></FontAwesomeIcon>
        </div>
        <div className={styles["cta-item"]} onClick={updateCar}>
            <Link to="/newcar">
            <FontAwesomeIcon
                icon={faFilePen}
                className={styles["cta-icon"]}
            ></FontAwesomeIcon>
            </Link>
        </div>
        </div>
    </div>
    );
}

export default CarItem
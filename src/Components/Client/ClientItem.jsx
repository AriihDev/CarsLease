import React from "react";
import styles from "./ClientItem.module.css";

function ClientItem(props) {

        return (
                <div className={styles["client-item-container"]}>
                <div className={styles.CarItem}>
                <div className={styles["car-info"]}>
                    <h3>{props.client.id}</h3>
                    <p>{props.client.fname}</p>
                    <p>{props.client.lname}</p>
                    <p>{props.client.dob}</p>
                    <p>{props.client.fidelity}</p>
                    <p>{props.client.address}</p>
                </div>
                </div>
            </div>
            );
        }
        

    export default ClientItem;
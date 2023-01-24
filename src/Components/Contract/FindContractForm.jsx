import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../Store/Main";
import api from '../../api/carlease'
import styles from "../Contract/FindContractForm.module.css"


function FindContractForm(props) {
    const context = useContext(MainContext);
    const idInputRef = useRef("");

    const submitHandler = async (e) => {
        e.preventDefault();
        const idValue = idInputRef.current.value;

        try {
        const response = await api.get("/contracts/" + idValue);
        if (response.data) {
            props.setContract(response.data);
            context.setContract(response.data);
        }
        } catch (error) {
        props.setContract(null);
        context.setContract(null);
        console.log(error);
        }
    };
    return (
        <div className={styles["form-container"]}>
        <form onSubmit={submitHandler} className={styles.formContent}>
        <h2>Trouver un contract</h2>
        <label htmlFor="contractId" className={styles["input-group"]}>
            Recherche par ID :
            <input
            type="number"
            name="contractName"
            id="contractId"
            min="1"
            ref={idInputRef}
            className={styles.input}
            required
            />
        </label>
        <div className={styles["submit-container"]}>
            <input type="submit" value="Chercher" />
            <Link to="/newcontract">
            <input type="button" value="Ok" />
            </Link>
        </div>
        </form>
        </div>
    );
    }

export default FindContractForm;

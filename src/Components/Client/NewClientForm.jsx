import React from 'react'
import styles from './NewClientForm.module.css'
import api from '../../api/carlease'
import {useRef} from 'react'
import {useNavigate} from 'react-router-dom'

function NewClientForm() {
        const navigate = useNavigate();
        const fnameInputRef = useRef("");
        const lnameInputRef = useRef("");
        const addressInputRef = useRef("");
        const dobInputRef = useRef("");
        const fidelityInputRef = useRef("");
    
        const submitHandler = async (e) => {
        e.preventDefault();
    
        const fnameValue = fnameInputRef.current.value;
        const lnameValue = lnameInputRef.current.value;
        const addressValue = addressInputRef.current.value;
        const dobValue = dobInputRef.current.value;
        const fidelityValue = fidelityInputRef.current.value;
    
        const client = {
            fname: fnameValue,
            lname: lnameValue,
            address: addressValue,
            dob: dobValue,
            fidelity: fidelityValue,
        };
    
        try {
            await api.post("/clients/", client);
            navigate("/clients/");
        } catch (error) {
            console.log(error);
        }
        };



return (
        <div className={styles["form-container"]}>
        <form onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
            <label htmlFor="fname">Prénom</label>
            <input
            type="text"
            name="fname"
            id="fname"
            required
            ref={fnameInputRef}
            />
        </div>

        <div className={styles["input-group"]}>
            <label htmlFor="lname">Nom</label>
            <input
            type="text"
            name="lname"
            id="lname"
            required
            ref={lnameInputRef}
            />
        </div>

        <div className={styles["input-group"]}>
            <label htmlFor="address">Adresse</label>
            <input
            type="text"
            name="address"
            id="address"
            required
            ref={addressInputRef}
            />
        </div>

        <div className={styles["input-group"]}>
            <label htmlFor="dob">Date de naissance</label>
            <input type="date" name="dob" id="dob" required ref={dobInputRef} />
        </div>

        <div className={styles["input-group"]}>
            <label htmlFor="fidelity">Fidélité</label>
            <input
            type="number"
            name="fidelity"
            id="fidelity"
            min="0"
            step="2"
            required
            ref={fidelityInputRef}
            />
        </div>

        <div className={styles["submit-container"]}>
            <input
            type="submit"
            name="submit-btn"
            id="submit-btn"
            value="Enregistrer"
            />
        </div>
        </form>
    </div>
    // <div>
    //     <form onSubmit={submitHandler}>
    //         <div className={styles["input-group"]}>
    //             <label htmlFor="fname">Prénom</label>
    //             <input 
    //             type="text" 
    //             name="fname" 
    //             id="fname" 
    //             required 
    //             ref={fnameInputRef}/>
    //         </div>

    //         <div className={styles["input-group"]}>
    //             <label htmlFor="lname">Nom</label>
    //             <input
    //             type="text" 
    //             name="lname" 
    //             id="lname" 
    //             required 
    //             ref={lnameInputRef }/>
    //         </div>

    //         <div className={styles["input-group"]}>
    //             <label htmlFor="address">Adresse</label>
    //             <input 
    //             type="text" 
    //             name="address" 
    //             id="address" 
    //             required 
    //             ref={addressInputRef}/>
    //         </div>

    //         <div className={styles["input-group"]}>
    //             <label htmlFor="dob">Date de naissance</label>
    //             <input 
    //             type="date" 
    //             name="dob" 
    //             id="dob" 
    //             required 
    //             ref={dobInputRef}/>
    //         </div>

    //         <div className={styles["input-group"]}>
    //             <label htmlFor="fidelity">Fidelité</label>
    //             <input 
    //             type="number" 
    //             name="fidelity" 
    //             id="fidelity" 
    //             required 
    //             ref={fidelityInputRef}/>
    //         </div>

    //         <div className={styles["input-group"]}>
    //             <input 
    //             type="submit" 
    //             required/>
    //         </div>
    //     </form>
    // </div>
    )
}

export default NewClientForm
import React , {useRef, useContext}from "react";
import api from "../../api/carlease";
import styles from "./NewClientForm.module.css"
import MainContext from "../../Store/Main";

function FindClientForm(props) {
    const context = useContext(MainContext);
    const idInputRef = useRef("");

    const submitHandler = async (e) => {
        e.preventDefault();
        const idValue = idInputRef.current.value;

        try {
            const response = await api.get("/clients/" + idValue);
            if(response.data) {
                props.setClient(response.data);
                context.setClient(response.data);
            }
        } catch (error) {
            props.setClient(null);
            context.setClient(null);
            console.log(error)
        }
    }

return (
        <div className={styles["form-container"]}>
        <form onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
            <label htmlFor="id">Recherche par ID</label>
            <input type="text" name="id" id="id" required ref={idInputRef} />
        </div>

        <div className={styles["submit-container"]}>
            <input
            type="submit"
            name="submit-btn"
            id="submit-btn"
            value="Chercher"
            />
        </div>
        </form>
    </div>
)
}

export default FindClientForm
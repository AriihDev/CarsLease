import React, { useContext, useState } from "react";
import styles from "./NewCarForm.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/carlease";
import MainContext from "../../Store/Main";

    function NewCarForm() {
    let navigate = useNavigate();
    const context = useContext(MainContext);
    const car = context.car;
    console.log(car);
    const registrationInputRef = useRef();
    const brandInputRef = useRef();
    const colorInputRef = useRef("");
    const fuelInputRef = useRef("");
    const powerInputRef = useRef("");
    const maxSpeedInputRef = useRef("");
    const kmInputRef = useRef("");
    const firstUseInputRef = useRef("");
    const [inUse, setInUse] = useState(false);

    const submitHandle = async (e) => {
        e.preventDefault();
        const registrationValue = registrationInputRef.current.value;
        const brandValue = brandInputRef.current.value;
        const colorValue = colorInputRef.current.value;
        const fuleValue = fuelInputRef.current.value;
        const powerValue = powerInputRef.current.value;
        const maxSpeedValue = maxSpeedInputRef.current.value;
        const kmValue = kmInputRef.current.value;
        const firstUseValue = firstUseInputRef.current.value;

        const newCar = {
        registration: registrationValue,
        brand: brandValue,
        color: colorValue,
        fuel: fuleValue,
        power: powerValue,
        maxSpeed: maxSpeedValue,
        km: kmValue,
        inUse: inUse,
        firstUse: firstUseValue,
        };

        try {
        let response;
        if (context.action === "editCar") {
            response = await api.put("/cars/" + car.id, newCar);
            context.setAction("");
            context.setCar(null);
        } else {
            response = await api.post("/cars/", newCar);
        }

        navigate("/cars");
        console.log(response);
        } catch (error) {
        console.log(error);
        }
    };

    return (
        <div className={styles["form-container"]}>
        <form className={styles["car-form"]} onSubmit={submitHandle}>
            <div className={styles["input-group"]}>
            <label className={styles["form-label"]} htmlFor="registration">Matricule</label>
            <input
                type="text"
                name="registration"
                id="registration"
                defaultValue={context.action === "editCar" ? car.registration : ""}
                required
                ref={registrationInputRef}
            />
            </div>

            <div className={styles["input-group"]}>
            <label className={styles["form-label"]} htmlFor="brand">Marque</label>
            <input
                type="text"
                name="brand"
                id="brand"
                defaultValue={context.action === "editCar" ? car.brand : ""}
                required
                ref={brandInputRef}
            />
            </div>

            <div className={styles["input-group"]}>
            <label className={styles["form-label"]}  htmlFor="color">Couleur</label>
            <input
                type="text"
                name="color"
                id="color"
                defaultValue={car ? car.color : ""}
                required
                ref={colorInputRef}
            />
            </div>

            <div className={styles["input-group"]}>
            <label className={styles["form-label"]}  htmlFor="fuel">Carburant</label>
            <input
                type="text"
                name="fuel"
                id="fuel"
                defaultValue={car ? car.fuel : ""}
                required
                ref={fuelInputRef}
            />
            </div>

            <div className={styles["input-group"]}>
            <label className={styles["form-label"]}  htmlFor="power">Puissance</label>
            <input
                type="number"
                name="power"
                id="power"
                defaultValue={car ? car.power : "0.0"}
                placeholder="0.0"
                step="0.1"
                min="0"
                required
                ref={powerInputRef}
            />
            </div>

            <div className={styles["input-group"]}>
            <label className={styles["form-label"]}  htmlFor="maxSpeed">Vitesse maximale</label>
            <input
                type="number"
                name="maxSpeed"
                id="maxSpeed"
                placeholder="0"
                defaultValue={car ? car.maxSpeed : "0.0"}
                step="10"
                min="0"
                required
                ref={maxSpeedInputRef}
            />
            </div>

            <div className={styles["input-group"]}>
            <label className={styles["form-label"]}  htmlFor="km">Kilom??trage actuel</label>
            <input
                type="number"
                name="km"
                id="km"
                placeholder="0"
                step="100"
                defaultValue={car ? car.km : "0"}
                min="0"
                required
                ref={kmInputRef}
            />
            </div>

            <div className={styles["input-group"]}>
            <label className={styles["form-label"]}  htmlFor="inUSe">En service</label>
            <div className={styles["radio-group"]}>
                <div className={styles["radio-item"]}>
                <input
                    type="radio"
                    name="inUse"
                    checked={car ? car.inUse : inUse === true}
                    onChange={(e) => {
                    setInUse(true);
                    }}
                />
                <label>Oui</label>
                </div>
                <div className={styles["radio-item"]}>
                <input
                    type="radio"
                    name="inUse"
                    checked={car ? car.inUse : inUse === true}
                    onChange={(e) => {
                    setInUse(false);
                    }}
                />
                <label>Non</label>
                </div>
            </div>
            </div>

            <div className={styles["input-group"]}>
            <label className={styles["form-label"]}  htmlFor="firstUse">Date de mise en service</label>
            <input
                type="date"
                name="firstUse"
                id="firstUse"
                defaultValue={car ? car.firstUSe : "2020-09-09"}
                value={car ? car.firstUSe : "2020-09-09"}
                required
                ref={firstUseInputRef}
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
    );
    }

export default NewCarForm;

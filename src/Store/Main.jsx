import { createContext , useState } from "react";

const MainContext = createContext ({
    client : null,
    car : null,
    contract : null,
    action: "",
    setClient : () => {},
    setCar : () => {},
    setContract : () => {},
    setAction: () => {},
});

export function MainContextProvider (props) {
    const [client, setClient] = useState();
    const [car, setCar] = useState();
    const [contract, setContract] = useState();
    const [action, setAction] = useState();

    const context = {
        car: car,
        client : client,
        contract : contract,
        action: action,
        setClient : (client) => {
            setClient(client);
        },
        setCar : (car) => {
            setCar(car);
        },
        setContract : (contract) => {
            setContract(contract);
        },
        setAction : (ac) => {
            setAction(ac);
        },
    };


    return (
        <MainContext.Provider value={context}>
            {props.children}
        </MainContext.Provider>
    );
}

export default MainContext;

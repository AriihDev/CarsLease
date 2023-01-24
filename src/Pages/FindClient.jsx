import React , {useState} from "react";
import ClientItem from "../Components/Client/ClientItem";
import FindClientForm from "../Components/Client/FindClientForm";
import { Link } from "react-router-dom";

function FindClient() {
        const [client, setClient] = useState(null);
    
        const findClient = (findedClient) => {
        setClient(findedClient);
        };

        return (
        <div>
            <h2>Trouver un client</h2>
            <FindClientForm setClient={findClient} />
            {client && <ClientItem client={client} />}
            <Link to="/newcontract" className="link-container">
        <div className="link">OK</div>
    </Link>
        </div>
        );
    
    }

    export default FindClient;
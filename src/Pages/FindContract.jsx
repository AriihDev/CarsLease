import React , {useState} from "react";
import ContractRow from "../Components/Contract/ContractRow";
import FindContractForm from "../Components/Contract/FindContractForm";

function FindContract() {
        const [contract, setContract] = useState(null);
    
        const findContract = (findedContract) => {
        setContract(findedContract);
        };

        return (
        <div>
            <FindContractForm setContract={findContract} />
            {contract && <ContractRow contract={contract} />}
        </div>
        );
    
    }

    export default FindContract;
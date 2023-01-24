import React from 'react'
import api from '../../api/carlease'
import ContractRow from './ContractRow'



function ContractTable(props) {
    const deleteHandler = async (contract) => {
        try {
            await api.delete("/contracts/" + contract.id);
            props.refresh();
        } catch (error) {
            console.log(error)
        }
    }

return (
    <div className="table">
        <table >
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Début</th>
                    <th>Fin</th>
                    <th>Montant total</th>
                    <th>Avance</th>
                    <th>Reste à payer</th>
                    <th>Lieu de restitution</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {props.contracts.map((contract) => {
                    return(
                    <ContractRow contract={contract}
                    onDelete={deleteHandler} 
                    key={contract.id} />
                )
                })}
            </tbody>
        </table>
    </div>
)
}

export default ContractTable
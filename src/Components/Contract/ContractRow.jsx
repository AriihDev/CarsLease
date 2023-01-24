import React from 'react'


function ContractRow(props) {
return (
        <tr>
            <td>{props.contract.date}</td>
            <td>{props.contract.start}</td>
            <td>{props.contract.end}</td>
            <td>{props.contract.totalPrice}</td>
            <td>{props.contract.advance}</td>
            <td>{props.contract.leftToPay}</td>
            <td>{props.contract.placeOfReturn}</td>
            <td onClick={() => props.onDelete(props.contract)}>Supprimer</td>
            <td>Modifier</td>
        </tr>
)
}

export default ContractRow
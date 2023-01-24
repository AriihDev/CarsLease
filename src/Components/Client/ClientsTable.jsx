import React from 'react'
import ClientRow from './ClientRow'
import api from '../../api/carlease'


function ClientsTable(props) {
    const deleteHandler = async (client) => {
        try {
            await api.delete("/clients/" + client.id);
            props.refresh();
        } catch (error) {
            console.log(error)
        }
    }

return (
    <div className='table'>
        <table >
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Adresse</th>
                    <th>Date de naissance</th>
                    <th>Fidelité</th>
                    <th>Delete</th>
                    <th>Update</th>
                    <th>Affichage</th>
                </tr>
            </thead>
            <tbody>
                {props.clients.map((client) => {
                    return (
                        <ClientRow client = {client}
                        key={client.id}  
                        onDelete={deleteHandler} />
                    )
                })}
            </tbody>
        </table>
    </div>
)
}

export default ClientsTable
import React from 'react'
import styles from './ClientRow.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFilePen, faList } from "@fortawesome/free-solid-svg-icons";

function ClientRow(props) {
return (
    <tr>
        <td>{props.client.fname}</td>
        <td>{props.client.lname}</td>
        <td>{props.client.address}</td>
        <td>{props.client.dob}</td>
        <td>{props.client.fidelity}</td>
        <td onClick={() => props.onDelete(props.client)}>
        <FontAwesomeIcon
            icon={faTrash}
            className={styles["cta-icon"]}
            ></FontAwesomeIcon>
        </td>
        <td>
            <FontAwesomeIcon
            icon={faFilePen}
            className={styles["cta-icon"]}
            ></FontAwesomeIcon>
        </td>
        <td>
            <FontAwesomeIcon
            icon={faList}
            className={styles["cta-icon"]}
            ></FontAwesomeIcon>
        </td>
    </tr>
)
}

export default ClientRow
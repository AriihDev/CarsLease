import styles from './NavBar.module.css'
import React from 'react'
import classes from "./NavBar.module.css";
import { Link } from 'react-router-dom'
import DropDownMenu from './DropDownMenu';

function NavBar() {

    const clientMenus = {
        title : "Clients",
        items : [
            { link : "/clients", title : "Liste"},
            { link : "/newclient", title : "Nouveau"},
            { link : "/findclient", title : "Chercher"},
        ],
    };


    const carMenus = {
        title : "Cars",
        items : [
            { link : "/cars", title : "Liste"},
            { link : "/newcar", title : "Nouveau"},
            { link : "/findcar", title : "Chercher"},
        ],
    };

    
    const contractMenus = {
        title  : "Contrats",
        items : [
            { link : "/contracts", title : "Liste"},
            { link : "/newcontract", title : "Nouveau"},
            { link : "/findcontract", title : "Chercher"},
        ],
};

const invoiceMenus = {
    title: "Factures",
    items: [
    { link: "/invoicies", title: "Liste" },
    { link: "/newcontract", title: "Nouveau" },
    { link: "/findcontract", title: "Chercher" },
    ],
};


return (
    <div>
        <header className={classes.header}>
            <div className={styles.logo}>
                Luxury<span>Cars</span>
            </div>
            <nav className='nav'>
                <ul className={classes.ul}>
                    <li>
                        <Link to='/'> Accueil</Link>
                    </li>

                    <li>
                        <DropDownMenu menu={carMenus} />
                    </li>

                    <li>
                        <DropDownMenu menu={clientMenus} />
                    </li>

                    <li>
                        <DropDownMenu menu={contractMenus} />
                    </li>

                    
                    <li>
                        <DropDownMenu menu={invoiceMenus} />
                    </li>

                    <li>
                    <Link to='/about'>A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
    
    ) 
}

export default NavBar
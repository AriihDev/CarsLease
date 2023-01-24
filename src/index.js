import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { MainContextProvider } from './Store/Main';
import Footer from './Components/Layout/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MainContextProvider>
        <Router>
            <App />
        </Router>
        <Footer />
    </MainContextProvider>
);




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import ScrollToTop from "./components/UI/ScrollToTop";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.Suspense>
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </React.Suspense>,
);
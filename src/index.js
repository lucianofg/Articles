import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import SignIn from "./pages/sign-in";
import Reading from "./pages/reading";
import Writing from "./pages/writing";
import DefaultHomePage from "./pages/default-home-page";
import SignedHomePage from "./pages/signed-home-page";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/sign-in' element={<SignIn />}/>
                <Route path='/reading' element={<Reading />}>
                    <Route path=':article_id' element={<Reading />}/>
                </Route>
                <Route path="/writing" element={<Writing />} />
                <Route path="/home" element={<DefaultHomePage />} />
                <Route path="/signed" element={<SignedHomePage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

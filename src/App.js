import React from "react";
import { Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header.js";


export default function App() {
    return (
        <main>
        <Header />

        <Route to='/' component={WelcomePage} />
        </main>
    );
}

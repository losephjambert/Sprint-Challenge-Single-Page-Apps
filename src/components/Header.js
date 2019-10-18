import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="ui centered">
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/characters'>Characters</Link>
            </nav>
            <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        </header>
    );
}

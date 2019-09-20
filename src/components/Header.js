import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='ui centered'>
      <nav>
        <h1 className='ui center'>
          <Link to='/'>Rick &amp; Morty Fan Page</Link>
        </h1>
        <Link to='/characters'>Character List</Link>
      </nav>
    </header>
  );
}

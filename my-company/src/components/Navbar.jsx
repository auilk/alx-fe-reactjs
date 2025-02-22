import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#333',
      padding: '10px 20px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
      }}>
        <li>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.2rem',
              margin: '0 15px',
              padding: '8px 15px',
              borderRadius: '5px',
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.2rem',
              margin: '0 15px',
              padding: '8px 15px',
              borderRadius: '5px',
            }}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.2rem',
              margin: '0 15px',
              padding: '8px 15px',
              borderRadius: '5px',
            }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.2rem',
              margin: '0 15px',
              padding: '8px 15px',
              borderRadius: '5px',
            }}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

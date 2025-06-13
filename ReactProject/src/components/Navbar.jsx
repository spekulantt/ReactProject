import React from 'react';
import { Link } from 'react-router-dom';
import SettingsMenu from './SettingsMenu';
import styles from './Navbar.module.css'; 
import logo from '../assets/logo1.png';

function Navbar({ setTheme }) { 
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <img src={logo} alt="Notes App Logo" className={styles.logo} />
        <Link to="/">Home</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/add">Add Note</Link>
        <Link to="/inspiration">Inspiration</Link>
        <SettingsMenu setTheme={setTheme} />
      </div>
    </nav>
  );
}

export default Navbar;
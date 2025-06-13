import React, { useState, useEffect, useRef } from 'react';
import { FaCog } from 'react-icons/fa';
import styles from './SettingsMenu.module.css'; 
import { Link } from 'react-router-dom'; 

function SettingsMenu({ setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

   return (
    <div className={styles.menu} ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.iconButton} aria-label="Settings">
        <FaCog />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <Link to="/profile" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '0.5rem', fontWeight: 'normal' }}>
            Your Profile
          </Link>
          <hr style={{ margin: '0.5rem 0', borderColor: 'var(--border-color)', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
          <p className={styles.dropdownTitle}>Choose a theme:</p>
          <button onClick={() => { setTheme('light'); setIsOpen(false); }}>Light</button>
          <button onClick={() => { setTheme('dark'); setIsOpen(false); }}>Dark</button>
        </div>
      )}
    </div>
  );
}

export default SettingsMenu;
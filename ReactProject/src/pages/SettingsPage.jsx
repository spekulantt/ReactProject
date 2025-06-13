import React, { useState, useEffect, useRef } from 'react';
import { FaCog } from 'react-icons/fa';

const menuStyles = {
  position: 'relative',
  marginLeft: 'auto', 
};

const iconButtonStyles = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1.5rem',
  color: 'var(--text-color)',
  display: 'flex',
  alignItems: 'center',
};

const dropdownStyles = {
  position: 'absolute',
  top: '100%',
  right: 0,
  backgroundColor: 'var(--card-bg-color)',
  border: '1px solid var(--card-border-color)',
  borderRadius: '8px',
  padding: '0.5rem',
  marginTop: '0.5rem',
  width: '150px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  zIndex: 10,
};

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
    <div style={menuStyles} ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)} style={iconButtonStyles} aria-label="Settings">
        <FaCog />
      </button>

      {isOpen && (
        <div style={dropdownStyles}>
          <p style={{ margin: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>Choose a theme:</p>
          <button style={{ width: '100%', marginBottom: '0.5rem' }} onClick={() => { setTheme('light'); setIsOpen(false); }}>Light</button>
          <button style={{ width: '100%' }} onClick={() => { setTheme('dark'); setIsOpen(false); }}>Dark</button>
        </div>
      )}
    </div>
  );
}

export default SettingsMenu;
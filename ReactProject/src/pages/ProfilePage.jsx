import React, { useState, useEffect } from 'react';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  const [name, setName] = useState(() => localStorage.getItem('userName') || '');
  const [noteCount, setNoteCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/notes')
      .then(res => res.json())
      .then(data => setNoteCount(data.length));
  }, []);

  const handleSave = () => {
    localStorage.setItem('userName', name);
    alert('Profile saved!'); 
  };

  return (
    <div className={styles.profileContainer}>
      <h1>Your Profile</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="user-name">Your Name:</label>
        <input
          type="text"
          id="user-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button onClick={handleSave} style={{ marginTop: '1rem' }}>Save Profile</button>
      </div>

      <div className={styles.stats}>
        <h2>Simple Stats</h2>
        <p>Total number of notes: <strong>{noteCount}</strong></p>
      </div>
    </div>
  );
}

export default ProfilePage;
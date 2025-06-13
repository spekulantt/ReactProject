import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/notes?_sort=id&_order=desc')
      .then(res => res.json())
      .then(data => setNotes(data))
      .catch(error => console.error("Error fetching notes:", error));
  }, []);

  return (
    <div>
      <h1>My Notes</h1>
      <div className="note-list">
        {notes.length > 0 ? (
          notes.map(note => (
            <Link key={note.id} to={`/note/${note.id}`} className="note-link">
              <h3>{note.title}</h3>
            </Link>
          ))
        ) : (
          <p>You don't have any notes yet. <Link to="/add">Create your first one!</Link></p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
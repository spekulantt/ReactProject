import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function NoteDetailPage() {
  const [note, setNote] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/notes/${id}`)
      .then(res => res.json())
      .then(data => setNote(data));
  }, [id]);

  if (!note) {
    return <div>Loading note...</div>;
  }

  return (
    <div className="note-detail">
      <h1>{note.title}</h1>
      <div 
        className="note-content" 
        dangerouslySetInnerHTML={{ __html: note.content }}
      />
      <Link to={`/edit/${id}`} style={{marginTop: '2rem', display: 'inline-block'}}>
        <button>Edit this note</button>
      </Link>
    </div>
  );
}

export default NoteDetailPage;
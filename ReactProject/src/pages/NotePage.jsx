import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function NotePage() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (isEditing) {
      fetch(`http://localhost:3001/notes/${id}`)
        .then(res => res.json())
        .then(data => {
          setTitle(data.title);
          setContent(data.content);
          setDate(data.date || '');
        });
    } else {
      const params = new URLSearchParams(location.search);
      const dateFromUrl = params.get('date');
      if (dateFromUrl) {
        setDate(dateFromUrl);
      }
    }
  }, [id, isEditing, location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = { title, content, date: date || null }; 

    const url = isEditing ? `http://localhost:3001/notes/${id}` : 'http://localhost:3001/notes';
    const method = isEditing ? 'PUT' : 'POST';

    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    })
    .then(() => {
      navigate('/');
    });
  };

  const handleDelete = () => {
    if (isEditing) {
        if (window.confirm("Are you sure you want to delete this note?")) {
            fetch(`http://localhost:3001/notes/${id}`, {
                method: 'DELETE',
            }).then(() => {
                navigate('/');
            });
        }
    }
  };

  return (
    <div className="page-content">
      <h1>{isEditing ? 'Edit Note' : 'Create New Note'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label htmlFor="note-date" style={{ fontWeight: '600' }}>Date (optional):</label>
            <input 
                type="date" 
                id="note-date"
                value={date}
                onChange={e => setDate(e.target.value)}
            />
            <button type="button" onClick={() => setDate('')} style={{ padding: '0.5rem', background: '-primary-color' }}>Clear Date</button>
        </div>

        <CKEditor
            editor={ ClassicEditor }
            data={content}
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                setContent(data);
            } }
        />

        <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="submit">{isEditing ? 'Save Changes' : 'Create Note'}</button>
            {isEditing && (
                <button type="button" onClick={handleDelete} className="delete-button">
                    Delete Note
                </button>
            )}
        </div>
      </form>
    </div>
  );
}

export default NotePage;
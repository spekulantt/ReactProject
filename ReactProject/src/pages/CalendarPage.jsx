import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useNavigate, Link } from 'react-router-dom';
import './CalendarPage.css';

const toLocalISOString = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

function CalendarPage() {
  const [notes, setNotes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const fetchNotes = () => {
    fetch('http://localhost:3001/notes')
      .then(res => res.json())
      .then(data => setNotes(data));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const notesForSelectedDate = selectedDate 
    ? notes.filter(note => note.date === toLocalISOString(selectedDate))
    : [];

  const handleDeleteNote = (noteIdToDelete, event) => {
    event.preventDefault();
    event.stopPropagation();

    if (window.confirm("Are you sure you want to delete this note?")) {
        fetch(`http://localhost:3001/notes/${noteIdToDelete}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                fetchNotes();
            }
        });
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateString = toLocalISOString(date);
      const notesForDay = notes.filter(note => note.date === dateString);
      if (notesForDay.length > 0) {
        return (
          <div className="notes-in-day-container">
            {notesForDay.slice(0, 2).map(note => (
              <div key={note.id} className="note-on-calendar">
                {note.title}
              </div>
            ))}
          </div>
        );
      }
    }
    return null;
  };

  const handleAddNote = () => {
      if (!selectedDate) return;
      const dateString = toLocalISOString(selectedDate);
      navigate(`/add?date=${dateString}`);
  };

  return (
    <div className="calendar-page-container">
      <h1>Notes Calendar</h1>
      <div className="calendar-main-content">
        <div className={`calendar-wrapper ${selectedDate ? 'panel-open' : ''}`}>
          <Calendar
            className="react-calendar" 
            tileContent={tileContent}
            onClickDay={setSelectedDate}
            value={selectedDate}
          />
        </div>
        
        {selectedDate && (
          <div className="notes-panel">
            <button className="close-panel-btn" onClick={() => setSelectedDate(null)}>&times;</button>
            <h2 className="notes-panel-title">Notes for: {toLocalISOString(selectedDate)}</h2>
            {notesForSelectedDate.length > 0 ? (
              <div className="notes-panel-list">
                {notesForSelectedDate.map(note => (
                  <Link key={note.id} to={`/note/${note.id}`} className="note-link-with-delete">
                    <span>{note.title}</span>
                    <button className="note-delete-btn" onClick={(e) => handleDeleteNote(note.id, e)}>
                      &times;
                    </button>
                  </Link>
                ))}
              </div>
            ) : (
              <p>No notes for this day.</p>
            )}
            <button onClick={handleAddNote} style={{width: '100%'}}>Add Note for this Day</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CalendarPage;
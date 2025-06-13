import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NotePage from './pages/NotePage';
import NoteDetailPage from './pages/NoteDetailPage';
import InspirationPage from './pages/InspirationPage';
import CalendarPage from './pages/CalendarPage'; 
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light'; 
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

 return (
    <Router>
      <Navbar setTheme={setTheme} />
      <Routes>
        <Route path="/calendar" element={<CalendarPage />} /> 
      </Routes>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />   
          <Route path="/note/:id" element={<NoteDetailPage />} />
          <Route path="/add" element={<NotePage />} />
          <Route path="/edit/:id" element={<NotePage />} />
          <Route path="/inspiration" element={<InspirationPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
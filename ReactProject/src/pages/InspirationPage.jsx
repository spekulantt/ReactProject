import React, { useState, useEffect } from 'react';
import styles from './InspirationPage.module.css'; 

function InspirationPage() {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchJoke = () => {
    setIsLoading(true);
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setJoke(data.joke);
      setIsLoading(false);
    })
    .catch(error => {
      console.error("Error fetching joke:", error);
      setJoke("Sorry, the jokes got lost on the way. Please try again.");
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className={styles.page}>
      <h1>Your Daily Dose of Humor</h1>
      <p className={styles.subtitle}>You never know when you'll need a good joke!</p>

      <div className={styles.jokeBox}>
        {isLoading ? "Loading joke..." : joke}
      </div>

      <button onClick={fetchJoke}>Get Another Joke!</button>
    </div>
  );
}

export default InspirationPage;
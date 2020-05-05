import React, { useState, useEffect, useRef } from 'react';
import './App.css';
// import './assets/css/theme.min.css'
import useScript from './components/hooks/useScript';
import useCss from './components/hooks/loadCss';
import Dashboard from './components/dashboard/dashboard';

// const ws = new WebSocket('ws://localhost:5000/');

function App() {
  const [isPaused, setPause] = useState(false);
  const [message, setMessage] = useState('')
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:5000/");
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");

    return () => {
      ws.current.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;
console.log('object')
    ws.current.onmessage = e => {
      if (isPaused) return;
      const message = JSON.parse(e.data);
      // console.log("e", message);
      setMessage(message)
    };
  }, [isPaused]);

  return (
    <div>
      <button onClick={() => setPause(!isPaused)}>
        {isPaused ? "Resume" : "Pause"}
      </button>
      {isPaused ? <></> : <p>{message}</p>}

    </div>
  );
}

export default App;

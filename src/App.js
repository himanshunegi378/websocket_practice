import React, { useState, useEffect,useRef } from 'react';
import './App.css';
// import './assets/css/theme.min.css'
import useScript from './components/hooks/useScript';
import useCss from './components/hooks/loadCss';
import Dashboard from './components/dashboard/dashboard';

const ws = new WebSocket('ws://localhost:5000/');

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('object')
    ws.onmessage = (message) => {
      console.log(message.data)
       setMessage(message.data);
    };
  
    return () => ws.close();
  },[]);


  // useScript(['https://code.jquery.com/jquery-3.4.1.slim.min.js',
  //   'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
  //   'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
  //   'http://localhost:5000/assets/js/theme.min.js',
  //   'http://localhost:5000/assets/js/config.navbar-vertical.min.js',
  // ])
  useCss('http://localhost:5000/assets/css/theme.min.css')

  // useScript('http://localhost:5000/assets/js/jquery.min.js')
  // useScript('http://localhost:5000/assets/js/popper.min.js')
  // useScript('http://localhost:5000/assets/js/bootstrap.min.js')
  // useScript('http://localhost:5000/assets/js/theme.min.js')
  useScript(['http://localhost:5000/assets/lib/@fortawesome/all.min.js'])
  // useScript('http://localhost:5000/assets/lib/stickyfilljs/stickyfill.min.js')
  // useScript('http://localhost:5000/assets/lib/sticky-kit/sticky-kit.min.js')
  // useScript('http://localhost:5000/assets/lib/is_js/is.min.js')
  // useScript('http://localhost:5000/assets/lib/lodash/lodash.min.js')
  // useScript('http://localhost:5000/assets/lib/perfect-scrollbar/perfect-scrollbar.js')

  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );
}

export default App;

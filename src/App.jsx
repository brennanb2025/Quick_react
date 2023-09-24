import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
// DONE
const firebaseConfig = {
  apiKey: "AIzaSyD2NRWUeYzM5tZsdhM9SZQ9MkpPCRSf-Ao",
  authDomain: "quick-react-baf2c.firebaseapp.com",
  projectId: "quick-react-baf2c",
  storageBucket: "quick-react-baf2c.appspot.com",
  messagingSenderId: "757198641502",
  appId: "1:757198641502:web:081d6fe17d1291ab3b17cf",
  measurementId: "G-7BGP57ZHG3"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const analytics = getAnalytics(App);

/*const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test hot module replacement (HMR).
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};*/

export default App;

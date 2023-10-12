import { initializeApp } from 'firebase/app';
import { useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDS8D_r_Rq3OpmK4Kb9dj0UvjS-4o7-Kw8",
    authDomain: "quick-react-brennan.firebaseapp.com",
    projectId: "quick-react-brennan",
    storageBucket: "quick-react-brennan.appspot.com",
    messagingSenderId: "1054552852844",
    appId: "1:1054552852844:web:5f014e4b02dcd523cc4b49",
    measurementId: "G-4K2T1J3Y3M"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
  
    useEffect(() => (
      onValue(ref(database, path), (snapshot) => {
       setData( snapshot.val() );
      }, (error) => {
        setError(error);
      })
    ), [ path ]);
  
    return [ data, error ];
  };
  
  const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
  };
  
  export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
      update(ref(database, path), value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)))
    }, [database, path]);
  
    return [updateData, result];
  };
import './wdyr'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FirebaseContext from "./context/firebase";
import  {firebase,FieldValue} from "./lib/firebase";


ReactDOM.render(
  <React.StrictMode>
      <FirebaseContext.Provider value={{firebase,FieldValue}}>
          <App />
      </FirebaseContext.Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
   apiKey: "AIzaSyDC4wfZ0Zgmj4NDgAH1JZf6S7OQhIMYJU0",
   authDomain: "messanger-673c1.firebaseapp.com",
   projectId: "messanger-673c1",
   storageBucket: "messanger-673c1.appspot.com",
   messagingSenderId: "995721834348",
   appId: "1:995721834348:web:ce8f181c83e09383158d49",
   measurementId: "G-GBLVLLKB1R"
 };
 firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

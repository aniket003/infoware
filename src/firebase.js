import * as firebase from 'firebase';

const Config = {
    apiKey: "AIzaSyD1rqkMfalQN3cGnM736CSINQMmT-IE6B0",
    authDomain: "infoware-r.firebaseapp.com",
    databaseURL: "https://infoware-r.firebaseio.com",
    projectId: "infoware-r",
    storageBucket: "infoware-r.appspot.com",
    messagingSenderId: "728905255832",
    appId: "1:728905255832:web:7e0ca57be9c6bc121339ed",
    measurementId: "G-72M4NJ9696"
  };

  firebase.initializeApp(Config);


  const firebaseDB= firebase.database();

  firebaseDB.ref('countries').push(
    {
      country:'India',
      India:{
        city:['patiala','amritsar','ambala']
      }
    }
  )
  export {
    firebase,
    firebaseDB
}
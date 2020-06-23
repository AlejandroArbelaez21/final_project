import * as firebase from 'firebase'
// firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDM7dwIuYZj8SGFZ_DBAQ2ninqQIHAZ0y0",
    authDomain: "crud-7936b.firebaseapp.com",
    databaseURL: "https://crud-7936b.firebaseio.com",
    projectId: "crud-7936b",
    storageBucket: "crud-7936b.appspot.com",
    messagingSenderId: "592678624862",
    appId: "1:592678624862:web:5dc666bb77539c07ffdecf",
    measurementId: "G-MEFMQXSVW5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
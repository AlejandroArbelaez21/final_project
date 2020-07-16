import firebase from 'firebase';

const LogOut = () => {
  firebase.auth().signOut();
  return null
}

export default LogOut;
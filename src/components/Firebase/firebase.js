import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDPu18kmLK4lkLe39j5lcY9HvN_njRYMW0",
  authDomain: "react-firebase-login-kff.firebaseapp.com",
  databaseURL: "https://react-firebase-login-kff.firebaseio.com",
  projectId: "react-firebase-login-kff",
  storageBucket: "react-firebase-login-kff.appspot.com",
  messagingSenderId: "987343871773",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  
  users = () => this.db.ref('users');
}
export default Firebase;
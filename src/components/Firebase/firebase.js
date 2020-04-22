import app from 'firebase/app';

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
  }
}
export default Firebase;
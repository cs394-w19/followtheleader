import app from 'firebase/app';
// import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyD_UrXqYuR2WyhOZ2GqolD1MQrgfaw1P4c",
    authDomain: "follow-the-leader-ca610.firebaseapp.com",
    databaseURL: "https://follow-the-leader-ca610.firebaseio.com",
    projectId: "follow-the-leader-ca610",
    storageBucket: "follow-the-leader-ca610.appspot.com",
    messagingSenderId: "842658443720"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
      // this.auth = app.auth();
      this.db = app.database();
    }

    // Uncomment everything to include authorization

    // // *** Auth API ***
    // doCreateUserWithEmailAndPassword = (email, password) =>
    //   this.auth.createUserWithEmailAndPassword(email, password);
    //
    // doSignInWithEmailAndPassword = (email, password) =>
    //   this.auth.signInWithEmailAndPassword(email, password);
    //
    // doSignOut = () => this.auth.signOut();
    //
    // doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    //
    // doPasswordUpdate = password =>
    //   this.auth.currentUser.updatePassword(password);

    locations = () => this.db.ref('location');
    types = () => this.db.ref('types');
  }

  export default Firebase;

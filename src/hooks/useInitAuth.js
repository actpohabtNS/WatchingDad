import firebase from 'firebase'

export default () => {
  const firebaseConfig = {
    apiKey: "AIzaSyA7S6eJJkrtDUxx150dKdg7Rc3dAun_ga8",
    authDomain: "watchingdad-fcefc.firebaseapp.com",
    projectId: "watchingdad-fcefc",
    storageBucket: "watchingdad-fcefc.appspot.com",
    messagingSenderId: "508736492229",
    appId: "1:508736492229:web:c6603f817d2e5e777e16ac"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
}
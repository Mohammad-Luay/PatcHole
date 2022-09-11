import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCIgPcdGmlm2YcDu5ZsjpOgfUpt19nZB0g",
    authDomain: "pothole090.firebaseapp.com",
    projectId: "pothole090",
    storageBucket: "pothole090.appspot.com",
    messagingSenderId: "552521308023",
    appId: "1:552521308023:web:bb75a8dc437aec31ca7372",
    measurementId: "G-27GX892L6N"
};


firebase.default.initializeApp(firebaseConfig);
export default firebase.default;
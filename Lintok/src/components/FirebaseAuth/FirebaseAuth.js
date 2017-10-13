import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const firebaseConfig = {
    // apiKey: "AIzaSyCGujaGbUyaGTZl6z65ngpk_PhB8ZsPvkg",
    // authDomain: "lintok-29090.firebaseapp.com",
    // databaseURL: "https://lintok-29090.firebaseio.com",
    // storageBucket: "lintok-29090.appspot.com",

    apiKey: "AIzaSyDezeAYi-4GOOFPb4WmWv8-sI-9aphYvso",
    authDomain: "lintok-c5e64.firebaseapp.com",
    databaseURL: "https://lintok-c5e64.firebaseio.com",
    storageBucket: "lintok-c5e64.appspot.com",

};
    var FbApp = firebase.initializeApp(firebaseConfig);
    module.exports.FBApp = FbApp;
/* Create new password based user on Firebase */

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyB2qbMEfgBqH98Pdbmm3kYPzTTyip0la3U",
	authDomain: "rbudget-a870b.firebaseapp.com",
	databaseURL: "https://rbudget-a870b.firebaseio.com",
	projectId: "rbudget-a870b",
	storageBucket: "rbudget-a870b.appspot.com",
	messagingSenderId: "893639759319",
	appId: "1:893639759319:web:c9e9cb3c47d609eed26792",
	measurementId: "G-JZDK060R21"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function signUp() {
	email = document.getElementById("signUp_email").value;
	password = document.getElementById("signUp_password0").value;
	confirmPw = document.getElementById("signUp_password1").value;
	
	if (password !== confirmPw) {
		alert("Passwords don't match");
	}
	else {
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  		// Handle Errors here.
	  		var errorCode = error.code;
	  		var errorMessage = error.message;
	  		alert("ERROR");
	  		// ...
		});
		alert("success");
	}
};

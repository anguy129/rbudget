function login() {
	email = document.getElementById("email").value;
	password = document.getElementById("password").value;
	
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	});
};

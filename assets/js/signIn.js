/* Validate registered user sign in via Firebase */

function signIn() {
	email = document.getElementById("login_email").value;
	password = document.getElementById("login_password").value;

	firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
		// Successful login
		alert("logging in as: " + email);
		location.href = "homepage.html";
	}).catch(function(error) {
	// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;

		if (errorCode === 'auth/wrong-password') {
			alert('Wrong password.');
		} else {
			alert(errorMessage);
		}
		console.log(error);
    });
};

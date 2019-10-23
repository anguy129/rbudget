/* Create new password based user on Firebase */

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
	  		// ...
		});
		document.location.replace('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload');
	}
};

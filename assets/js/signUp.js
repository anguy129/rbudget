/* Create new password based user on Firebase */

function signUp() {
	email = document.getElementById("signUp_email").value;
	password = document.getElementById("signUp_password0").value;
	confirmPw = document.getElementById("signUp_password1").value;
	
	if (password !== confirmPw) {
		alert("Passwords don't match");
	}
	else if (password.length < 8) {
		alert("Your password must be at least 8 characters long.");
	}
	else {
		alert("about to create new user");
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  		// Handle Errors here.
	  		var errorCode = error.code;
	  		var errorMessage = error.message;
	  		alert(errorMessage);
	  		// ...
		});
		document.location.replace('https://anguy129.github.io/rbudget/homepage.html');
	}
};

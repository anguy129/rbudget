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
		//alert("about to create new user");
		//alert(email);
		//alert(password);
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  		// Handle Errors here.
	  		var db = firebase.firestore();
	  		db.collection(email);
	  		var errorCode = error.code;
	  		var errorMessage = error.message;
	  		// github didn't deploy new code
	  		alert(errorMessage);
	  		// ...
		});
		//location.href = 'homepage.html';
	}

	var db = firebase.firestore();
	db.collection(email).add({
		//document.getElementById("budget").value
		})
		.then(function(docRef) {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error) {
		    console.error("Error adding document: ", error);
	});	
};

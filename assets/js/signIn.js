/* Validate registered user sign in via Firebase */

function signIn() {
	email = document.getElementById("login_email").value;
	password = document.getElementById("login_password").value;

	firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
		// Successful login
		//alert("logging in as: " + email);
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

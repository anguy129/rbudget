function login() {

	var email = document.getElementById("email_login").value;
	var password = document.getElementById("password_login").value;
	var errors = 0;
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	  window.alert("Error : " + errorMessage);
	});
	if(!errorMessage){
		window.location.replace("https://anguy129.github.io/rbudget/homepage.html");
	}

	else{
		window.location.replace("https://anguy129.github.io/rbudget/signIn.html");
	}
};

function logout(){
  firebase.auth().signOut();
}

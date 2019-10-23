function login() {

	var email = document.getElementById("email_login").value;
	var password = document.getElementById("password_login").value;
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	  alert("Error : " + errorMessage);
	});

	//window.location.replace("https://anguy129.github.io/rbudget/homepage.html?");

	var user = firebase.auth().currentUser;
    if (user) {
    	alert("Signing you in");
        console.log(user);
        window.location.replace("https://anguy129.github.io/rbudget/homepage.html?");

    } else {
    	alert("User not found");
    	window.location.replace("https://anguy129.github.io/rbudget/signIn.html?");
    }
};

function logout(){
	alert("Logging out");
  firebase.auth().signOut();
}

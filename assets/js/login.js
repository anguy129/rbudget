function login() {

	var email = document.getElementById("email_login").value;
	var password = document.getElementById("password_login").value;
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	  window.alert("Error : " + errorMessage);
	  
	});
	if(error){
        window.location.replace("https://anguy129.github.io/rbudget/homepage.html?");

	  }
	  else{
	  	window.location.replace("https://anguy129.github.io/rbudget/homepage.html?");

	  }
	/*var user = firebase.auth().currentUser;
    if (user) {
        console.log(user);
    } else {
    	window.location.replace("https://anguy129.github.io/rbudget/signIn.html?");

    }*/
};

function logout(){
  firebase.auth().signOut();
}

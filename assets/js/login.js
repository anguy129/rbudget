/*function works(var error){
	if(error){
		return 1;
	}
	else{
		return 0;
	}
}*/

    
function login() {

	var email = document.getElementById("email_login").value;
	var password = document.getElementById("password_login").value;
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	  alert("Error : " + errorMessage);
	  //var problem = works(error);
	});
	//return problem;
	const user = firebase.auth();
	auth.onAuthStateChanged(function(user){
	    if (user) {
	    	alert("User Found");
	        //console.log(user);
	    	window.location.replace("https://anguy129.github.io/rbudget/homepage.html?");
	    } else {
	    	alert("User not found");
	    	window.location.replace("https://anguy129.github.io/rbudget/homepage.html?");

	   	}
	});
	
};

function logout(){
	alert("Logging out");
  firebase.auth().signOut();
}

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
	  //if(!error){
	 // 	window.location.replace("https://anguy129.github.io/rbudget/homepage.html?");
	  //}
	});
	firebase.auth().onAuthStateChanged(function(user){
    if (user) {
    	alert("User Found");
        //console.log(user);
    	window.location.replace("/homepage");
    } else {
    	//alert("User not found");
    	//window.location.replace("https://anguy129.github.io/rbudget/homepage.html?");

   	}
});

	//return problem;
	
};

function logout(){
	alert("Logging out");
  firebase.auth().signOut();
}
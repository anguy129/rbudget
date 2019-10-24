/* Handle user states */

function userState() {
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in.
	    var displayName = user.displayName;
	    var email = user.email;
	    var emailVerified = user.emailVerified;
	    var uid = user.uid;
	    var providerData = user.providerData;
	    alert("signed in with: " + email);
	    // ...
	  } else {
	    // User is signed out.
	    // ...
	  }
	});
}

function signOut() {
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	  alert("signing out");
	  window.location.replace("https://anguy129.github.io/rbudget/index.html");
	}).catch(function(error) {
	  // An error happened.
	  alert("an error occurred")
	});
}
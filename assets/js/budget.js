/*
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
	  	alert("no one signed in");
	    // User is signed out.
	    // ...
	  }
	});
}
*/
function setBudget(){
	alert("started db");
	
	var budgetInput = document.getElementById("budget").value;
	//var budgetGet = 420;
	alert("grabbed value " + budgetInput);
	var db = firebase.firestore();

	db.collection("My Budget").add({
		budget: budgetInput
		//document.getElementById("budget").value
		})
		.then(function(docRef) {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error) {
		    console.error("Error adding document: ", error);
	});	
	alert("Added to collection");
}

function getBudget(){
	//var budgetSet = document.getElementById("budget").value;
	//budgetSet.value = getBudget();
	//comment
	alert("Get budget called");
	var db = firebase.firestore();
	db.collection("My Budget").get().then(function(doc) {
		alert("inside collection");
		alert(doc);
		if(doc.exists){
			console.log("Document data:", doc.data());
	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
		}).catch(function(error) {
		    console.log("Error getting document:", error);
	});
}

/*
form.addEventListener('submit', (e) => {
	e.preventDefault();
	alert("Grabbing Value");
	db.collection('main_budget').add({
		budget: form.budget.value
	});
});
docRef.get().then(function(doc){
	if(doc.exists){
		var budgetSet = document.getElementById("budget").value;
		budgetSet.value = doc.data();
	}
});








//const form = document.querySelector('#main_budget');
//var docRef =  db.collection("main_budget").doc("latest"); 
*/


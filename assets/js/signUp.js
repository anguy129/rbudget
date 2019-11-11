/* Create new password based user on Firebase */
var mainEmail;
//const db = firebase.firestore();
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
		setEmail(email);
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  		// Handle Errors here.
	  		var errorCode = error.code;
	  		var errorMessage = error.message;
	  		// github didn't deploy new code
	  		alert(errorMessage);
	  		// ...
		});
		/*
		alert("collection start");
		var db = firebase.firestore();
		db.collection(email).doc("Budget").set({
			overallBudget: ""
			})
			.then(function() {
			    console.log("Document successfully written!");
			})
			.catch(function(error) {
			    console.error("Error writing document: ", error);
		});


		alert(email);
		/*
		/*var db = firebase.firestore();

		db.collection(email).doc("Budget").set({
			overallBudget: 0,
			entertainment: 0,
			housing: 0,
			utilities: 0,
			food: 0,
			transportation: 0,
			education: 0,
			loanPayment: 0,
			childCare: 0,
			savings: 0,
			income: 0,
			financialAid: 0
		})
		.catch(function(error) {
		    alert("Error writing document: ", error);
		});*/
		location.href = 'homepage.html';
	}
};

function setEmail(email){
	mainEmail = email;
	localStorage.setItem("user_Email", mainEmail);
}
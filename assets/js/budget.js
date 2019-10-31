
function setBudget(){
	var budgetInput = document.getElementById("budget").value;
	//var budgetGet = 420;
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
}

function getBudget(){

	var db = firebase.firestore();
	db.collection("My Budget").limit(1).get().then(snapshot => {
		snapshot.forEach(doc => {
			var budgetSet = document.getElementById("budget");
			
			budgetSet.value = doc.data().budget;
			if(doc.exists){
				console.log("Document data:", doc.data());
		    } else {
		        // doc.data() will be undefined in this case
		        console.log("No such document!");
		    }
			}).catch(function(error) {
			    console.log("Error getting document:", error);
		});
		
	
	});
}

function deposit(){
	//Getting user information
	alert("deposit()");
	
	var email = document.getElementById("login_email").value;
	alert("email: " email);
	

	
	

	//Grabbing variables from fields.
	var depo_budgetInput = document.getElementById("depositAmnt").value;
	alert("Depositing: " + depo_budgetInput);

	var cat = document.getElementById("drop_deposit_category");
	var depo_category = cat.options[cat.selectedIndex].text;
	alert("Category: " + depo_category);

	var depo_description = document.getElementById("deposit_description").value;
	alert("Description: " + depo_description);
	
	
	


	//var db = firebase.firestore();

}
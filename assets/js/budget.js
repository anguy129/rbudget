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


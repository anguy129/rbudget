






//const form = document.querySelector('#main_budget');
//var docRef =  db.collection("main_budget").doc("latest"); 
/*
function setBudget(){
	//var budgetSet = document.getElementById("budget").value;
	budgetSet.value = getBudget();
}

*/
function getBudget(){
	//var budgetGet = document.getElementById("budget").value;
	//var budgetGet = 420;
	alert("started db");
	db.collection("main_budget").add({
		budget: 123
		alert("inside db");
		//document.getElementById("budget").value
		})
		.then(function() {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error) {
		    console.error("Error adding document: ", error);
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
*/
/*
docRef.get().then(function(doc){
	if(doc.exists){
		var budgetSet = document.getElementById("budget").value;
		budgetSet.value = doc.data();
	}
});
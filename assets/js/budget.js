

const form = document.querySelector('#main_budget');
var docRef =  db.collection("main_budget").doc("latest"); 
/*
function setBudget(){
	//var budgetSet = document.getElementById("budget").value;
	budgetSet.value = getBudget();
}


function getBudget(){
	var budgetGet = document.getElementById("budget").value;
	//var budgetGet = 420;
	alert("Grabbed value" + budgetGet);
	return budgetGet;
}
*/
form.addEventListener('submit', (e) => {
	e.preventDefault();
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
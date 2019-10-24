


function setBudget(){
	var budgetSet = document.getElementById("budget");
	budgetSet.value = getBudget();
}


function getBudget(){
	var budgetGet = document.getElementById("budget").value;
	//var budgetGet = 420;
	alert("Grabbed value" + budgetGet);
	return budgetGet;
}



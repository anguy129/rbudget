/*
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
*/
function deposit(){
	//Getting user information
	var user_email = localStorage.getItem("user_Email");

	//Grabbing variables from fields.
	var depo_budgetInput = +document.getElementById("depositAmnt").value;
	var cat = document.getElementById("drop_deposit_category");
	var depo_category = cat.options[cat.selectedIndex].text;
	var depo_description = document.getElementById("deposit_description").value;
	
	var date = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];

	var db = firebase.firestore();

	db.collection(user_email).doc("Budget").collection(months[date.getMonth()]).doc("Day: " + numbers[date.getDate()] + ", " + numbers[date.getHours()] + ":" + numbers[date.getMinutes()]).set({
	    Category: depo_category,
	    Amount: depo_budgetInput,
	    Description: depo_description,
	    Type: "Deposit"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
	});
	alert("Thank You For Your Deposit");
}

function withdraw(){
	//Getting user information
	var user_email = localStorage.getItem("user_Email");
	//Grabbing variables from fields.
	var with_budgetInput = +document.getElementById("withdrawAmnt").value;
	var cat = document.getElementById("drop_withdraw_category");
	var with_category = cat.options[cat.selectedIndex].text;
	var with_description = document.getElementById("withdraw_description").value;

	var date = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];

	var db = firebase.firestore();

	db.collection(user_email).doc("Budget").collection(months[date.getMonth()]).doc("Day: " + numbers[date.getDate()] + ", " + numbers[date.getHours()] + ":" + numbers[date.getMinutes()]).set({
	    Category: with_category,
	    Amount: with_budgetInput,
	    Description: with_description,
	    Type: "Withdraw"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
	});
	alert("Thank You For Your Withdraw");

}

function reset_deposit(){
	var clear_deposit = document.getElementById("depositAmnt");		
	clear_deposit.value = '';

	var clear_description = document.getElementById("deposit_description");
	clear_description.value = '';
}

function reset_deposit(){
	var clear_deposit = document.getElementById("depositAmnt");		
	var clear_deposit_description = document.getElementById("deposit_description");
	clear_deposit_description.value = '';
	clear_deposit.value = '';
}

function reset_withdraw(){
	var clear_withdraw = document.getElementById("withdrawAmnt");		
	var clear_withdraw_description = document.getElementById("withdraw_description");
	clear_description.value = '';
	clear_withdraw.value = '';
}

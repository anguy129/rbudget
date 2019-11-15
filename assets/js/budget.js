//GLOBAL VARIABLES

	//var overallBudget;

function deposit(){
	//Getting user information

	var user_email = localStorage.getItem("user_Email");

	//Grabbing variables from fields.
	var depo_budgetInput = +document.getElementById("depositAmnt").value;
	var cat = document.getElementById("drop_deposit_category");
	var depo_category = cat.options[cat.selectedIndex].text;
	var depo_description = document.getElementById("deposit_description").value;
	var total_Budget = +document.getElementById("deposit_budget").value;
	var date = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var numbers = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
	var d = Date(Date.now()); 
	currDate = d.toString();

	var db = firebase.firestore();

	db.collection(user_email).doc("Budget").collection(months[date.getMonth()]).doc("Day: " + numbers[date.getDate()] + ", " + numbers[date.getHours()] + ":" + numbers[date.getMinutes()] + ":" + numbers[date.getSeconds()]).set({
	    Category: depo_category,
	    Amount: depo_budgetInput,
	    Description: depo_description,
	    Balance: total_Budget,
	    Date: currDate,
	    Type: "Deposit"
		})
		.then(function() {
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
	});
	alert("Thank You!");
}

function withdraw(){
	//Getting user information
	var user_email = localStorage.getItem("user_Email");
	//Grabbing variables from fields.
	var catEntertainment;
	var catHousingRent;
	var catUtilities;
	var catFood;
	var catTransportation;
	var catEducation;
	var catLoanRepay;
	var catChildCare;
	var catSavings;

	var overallbudget = document.getElementById("withdraw_budget").value;
	var with_budgetInput = +document.getElementById("withdrawAmnt").value;
	var cat = document.getElementById("drop_withdraw_category");
	var with_category = cat.options[cat.selectedIndex].text;
	var with_description = document.getElementById("withdraw_description").value;
	var total_Budget = +document.getElementById("withdraw_budget").value;

	var date = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var numbers = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
	var d = Date(Date.now()); 
	currDate = d.toString();

	var db = firebase.firestore();


	if(overallbudget < with_budgetInput){
		alert("Withdrawing too much!");
		location.href= 'homepage.html';
	}
	else{

		db.collection(user_email).doc("Budget").collection(months[date.getMonth()]).doc("Day: " + numbers[date.getDate()] + ", " + numbers[date.getHours()] + ":" + numbers[date.getMinutes()] + ":" + numbers[date.getSeconds()]).set({
		    Category: with_category.replace(/ /g,"_").toLowerCase(),
		    Amount: with_budgetInput,
		    Description: with_description,
		    Balance: total_Budget,
		    Date: currDate,
		    Type: "Withdraw"
			})
			.then(function() {
			    console.log("Document successfully written!");
			})
			.catch(function(error) {
			    console.error("Error writing document: ", error);
		});

		db.collection(user_email).doc("Budget").get().then(function(doc) {
			

			catEntertainment = doc.data().entertainment;
			catHousingRent = doc.data().housing;
			catUtilities = doc.data().utilities;
			catFood = doc.data().food;
			catTransportation = doc.data().transportation;
			catEducation = doc.data().education;
			catLoanRepay = doc.data().loan_repayment;
			catChildCare = doc.data().child_care;
			catSavings = doc.data().savings;
			
			//Recommended Amounts of Budget
			//Entertainment = 10%
			//Housing/Rent = 40%
			//Utilities = 5%
			//Food = 20%
			//Transportation = 5%
			//Debt: Education, Loans, ChildCare = 15%
			//Savings = 5%

			if(with_category == "Entertainment"){	//amount to withdraw for a specific Category
				var recomEntertain = overallbudget * .10;	//take the recommended amount from overall
				var tempEntertain = catEntertainment + with_budgetInput;
				if(tempEntertain > recomEntertain){
					alert("Exceeding recommended amount for Entertainment");
				}
			}
			//Savings
			if(with_category == "Savings"){
				var recomSavings = overallbudget * .05;	//take the recommended amount from overall
				var tempSavings = catSavings + with_budgetInput;
				if(tempSavings > recomSavings){
					alert("Exceeding recommended amount for Savings. Nice Job!");
				}
			}
			//Debts: Child Care & Loans = 10% OR 5% each
			if(with_category == ("Child Care")){
				var recomChild = overallbudget * .05;
				var tempChild = catChildCare + with_budgetInput;
				if(tempChild > recomChild){
					alert("Exceeding recommended amount for Child Care");
				}
			}//loans
			if(with_category == ("Loan Repayment")){
				var recomLoans = overallbudget * .05;
				var tempLoans = catLoanRepay + with_budgetInput;
				if(tempLoans > recomLoans){
					alert("Exceeding recommended amount for Loan Repayment");
				}
			}
			//Education
			if(with_category == ("Education")){
				var recomLoans = overallbudget * .10;
				var tempLoans = catLoanRepay + with_budgetInput;
				if(tempLoans > recomLoans){
					alert("Exceeding recommended amount for Education");
				}
			}
			//Transportation
			if(with_category == "Transportation"){
				var recomTransportation = overallbudget * .05;	//take the recommended amount from overall
				var tempTransportation = catTransportation + with_budgetInput;
				if(tempTransportation > recomTransportation){
					alert("Exceeding recommended amount for Transportation");
				}
			}

			if(with_category == "Housing"){
				var recomHousing = overallbudget * .35;
				var tempHousing = catHousingRent + with_budgetInput;
				if(tempHousing > recomHousing){
					alert("Exceeding recommended amount for Housing");
				}
			}

			if(with_category == "Utilities"){
				var recomUtilities = overallbudget * .05;
				var tempUtilities = catUtilities + with_budgetInput;
				if(tempUtilities > recomUtilities){
					alert("Exceeding recommended amount for Utilities");
				}
			}

			//Food
			if (with_category == "Food"){
				var recomFood = overallbudget * .20;	//take the recommended amount from overall
				var tempFood = catFood + with_budgetInput;
				if(tempFood > recomFood){
					alert("Exceeding recommended amount for Food");
				}
			}
			alert("Thank You");
		});
	}
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

function getBudget(){

	var user_email = localStorage.getItem("user_Email");
	var budgetSet = document.getElementById("budget");
	var deposit_budget = document.getElementById("deposit_budget");
	var withdraw_budget = document.getElementById("withdraw_budget");

	var db = firebase.firestore();
	
	var docRef = db.collection(user_email).doc("Budget");

	docRef.get().then(function(doc) {

		budgetSet.value = doc.data().overallBudget;
		deposit_budget.value = doc.data().overallBudget;
		withdraw_budget.value = doc.data().overallBudget;

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
*/


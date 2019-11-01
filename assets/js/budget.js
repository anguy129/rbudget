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
	alert("New test");
	var user_email = localStorage.getItem("user_Email");
	alert("Email: " + user_email);

	//Grabbing variables from fields.
	var depo_budgetInput = document.getElementById("depositAmnt").value;
	alert("Depositing: " + depo_budgetInput);

	var cat = document.getElementById("drop_deposit_category");
	var depo_category = cat.options[cat.selectedIndex].text;
	alert("Category: " + depo_category);

	var depo_description = document.getElementById("deposit_description").value;
	alert("Description: " + depo_description);

	var date = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var month = months[date.getMonth()];
	alert(month);
	var day = date.getDate();
	var hours = date.getHour() + 1;
	var minutes = date.getMinutes();
	//alert(months[date.getMonth()]);
	//alert(month + day + hours + minutes);

	alert("start db");
	var db = firebase.firestore();


	var docData = {
		Date: day,
		Category: depo_category,
		Spent: depo_budgetInput,
		Description: depo_description
	};

	alert("passed doc data");

	db.collection(user_email).doc("Budget").collection("Statements").doc(month).set(docData).then(function(){
		console.log("Document successfully written!");
	});


	alert("finished collection add");
}

function withdraw(){
	//Getting user information
	alert("Withdrawing");
	var user_email = localStorage.getItem("user_Email");
	alert("Email: " + user_email);

	//Grabbing variables from fields.
	var with_budgetInput = document.getElementById("withdrawAmnt").value;
	alert("Withdrawing: " + with_budgetInput);

	var cat = document.getElementById("drop_withdraw_category");
	var with_category = cat.options[cat.selectedIndex].text;
	alert("Category: " + with_category);

	var with_description = document.getElementById("withdraw_description").value;
	alert("Description: " + with_description);

	var db = firebase.firestore();
	db.collection(user_email).add({
			budget_test: depo_budgetInput
	});

}


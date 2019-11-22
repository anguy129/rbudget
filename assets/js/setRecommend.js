function setRecommend(){
	var user_email = localStorage.getItem("user_Email");
	
	var setHousing = +document.getElementById("setHousing").value;
	var setFood = +document.getElementById("setFood").value;
	var setUtilities = +document.getElementById("setUtilities").value;
	var setSavings = +document.getElementById("setSavings").value;
	var setEducation = +document.getElementById("setEducation").value;
	var setEntertainment = +document.getElementById("setEntertainment").value;
	var setTransportation = +document.getElementById("setTransportation").value;
	var setLoans = +document.getElementById("setLoans").value;
	var setChildCare = +document.getElementById("setChildCare").value;

	/*
	alert("Housing: " + setHousing);
	alert("Food: " + setFood);
	alert("Utilities: " + setUtilities);
	alert("Savings: " + setSavings);
	alert("Education: " + setEducation);
	alert("Entertainment: " + setEntertainment);
	alert("Transportation: " + setTransportation);
	alert("Loans: " + setLoans);
	alert("Child Care: " + setChildCare);
	*/

	var totalPercentage = setHousing + setFood + setUtilities + setSavings + setEducation + setEntertainment + setTransportation + setLoans + setChildCare;
	alert(totalPercentage);
	if(totalPercentage == 100){
		alert("Setting Recommendations");

		var db = firebase.firestore();
		db.collection(user_email).doc("Recommendations").set({
			Housing: setHousing,
			Food: setFood,
			Utilities: setUtilities,
			Savings: setSavings,
			Education: setEducation,
			Entertainment: setEntertainment,
			Transportation: setTransportation,
			Loans: setLoans,
			ChildCare: setChildCare
			})
			.then(function() {
			    console.log("Document successfully written!");
			})
			.catch(function(error) {
			    console.error("Error writing document: ", error);
		});

		db.collection(user_email).doc("Budget").update({
			selfRecommend: 1
			})
			.then(function() {
			    console.log("Document successfully written!");
			    location.href='homepage.html';
			})
			.catch(function(error) {
			    console.error("Error writing document: ", error);
		});
	}
	else{
		alert("Values need to add up to 100");
	}

}
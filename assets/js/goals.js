function setGoal(){
   // alert("got in the function");

    var db = firebase.firestore();

    var user_email = localStorage.getItem("user_Email");
    var goal_deposit = +document.getElementById("deposit_budget_goal").value;
    var goalDescription = document.getElementById("goal_description").value;
    var goalPercentage = document.getElementById("percentage_goal").value;
    db.collection(user_email).doc("Budget").collection("goals").doc("Goal_1").set({
        //inputs
     GoalAmount: goal_deposit,
     GoalDescription1: goalDescription,
     goalPercentage1: goalPercentage
    })
        .then(function() {
		    console.log("Document successfully written!");
		    location.href='homepage.html';
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
    });
    alert("You Have Set A Budget Goal!");
}//function

function getGoals(){
    var db = firebase.firestore();
    var user_email = localStorage.getItem("user_Email");
    var goal_deposit = document.getElementById("deposit_budget_goal");
    var goalPercentage =  document.getElementById("percentage_goal");
    var goalDescription = document.getElementById("goal_description");
    db.collection(user_email).doc("Budget").collection("goals").doc("Goal_1").get().then(function(doc) {
        goal_deposit.value = doc.data().GoalAmount;
        goalPercentage.value = doc.data().goalPercentage1;
        goalDescription.value = doc.data().GoalDescription1;
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

		
*/
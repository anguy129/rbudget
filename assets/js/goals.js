function setGoal(){
    alert("got in the function");

    var db = firebase.firestore();

    var user_email = localStorage.getItem("user_Email");
    var goal_deposit = +document.getElementById("deposit_budget_goal").value;
    var goalDescription = document.getElementById("goal_description").value;
    alert(goal_deposit);
    alert(goalDescription);
    db.collection(user_email).doc("Budget").collection("goals").doc(goalDescription).set({
        //inputs
      GoalAmount: goal_deposit,
      GoalDescription1: goalDescription
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
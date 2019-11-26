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

const goal1_Notification = document.querySelector('#goals1_tag');

//the getGoals function will be called when the goals page is loaded
function getGoals(){
    ////Generate An html statement if the user has met their goal reqs
  ///

    var db = firebase.firestore();
    var user_email = localStorage.getItem("user_Email");
    var goal_deposit = document.getElementById("deposit_budget_goal");
    var goalPercentage =  document.getElementById("percentage_goal");
    var goalDescription = document.getElementById("goal_description");
    var savingsAmount;
    
    db.collection(user_email).doc("Budget").get().then(function(doc) {

        savingsAmount = doc.data().savings;

        db.collection(user_email).doc("Budget").collection("goals").doc("Goal_1").get().then(function(doc) {
            goal_deposit.value = doc.data().GoalAmount;
            goalPercentage.value = doc.data().goalPercentage1;
            goalDescription.value = doc.data().GoalDescription1;

            percentage = doc.data().goalPercentage1;
            amount = doc.data().GoalAmount;

    		if(doc.exists){
    			console.log("Document data:", doc.data());

                if((savingsAmount * percentage) >= amount){
                    var newDiv = document.createElement("h2");
                    var newContent = document.createTextNode("You have the savings required for Goal #1 !");
                    newDiv.appendChild(newContent);
                    var element1 = document.getElementById("goal1");
                    element1.appendChild(newDiv);
                    

                    var newButton = document.createElement("button");
                    var buttonContent = document.createTextNode("Purchased");
                    newButton.appendChild(buttonContent);
                    var button1 = document.getElementById("submitPurchaseButton");
                    button1.style.float = 'left';
                    button1.style.display = 'inline-block';
                    button1.style.position = 'relative';
                    button1.appendChild(newButton);


                    button1.addEventListener("click", purchase1);

                    
                } 

    	    } else {
    	        // doc.data() will be undefined in this case
    	        console.log("No such document!");
    	    }

    		}).catch(function(error) {
    		    console.log("Error getting document:", error);
        });

    console.log("Cached document data:", doc.data());
    }).catch(function(error) {
        console.log("Error getting cached document:", error);
    }); //first db.collection call


    function purchase1(){
        
    }

}
    

/*
    
    //
		
*/
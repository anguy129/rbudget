function setGoal(){
   // alert("got in the function");
    //Goal #1
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

    ///Goal#2

    var user_email = localStorage.getItem("user_Email");
    var goal_deposit2 = +document.getElementById("deposit_budget_goal2").value;
    var goalDescription2 = document.getElementById("goal_description2").value;
    var goalPercentage2 = document.getElementById("percentage_goal2").value;
    db.collection(user_email).doc("Budget").collection("goals").doc("Goal_2").set({
        //inputs
     GoalAmount: goal_deposit2,
     GoalDescription1: goalDescription2,
     goalPercentage1: goalPercentage2
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
    //Goal#1 Pull Information
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

            percentage = +doc.data().goalPercentage1;
            amount = doc.data().GoalAmount;
            percentage = percentage / 100;

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

    //GOAL#2
     //Goal#2 
     var user_email = localStorage.getItem("user_Email");
     var goal_deposit2 = document.getElementById("deposit_budget_goal2");
     var goalDescription2 = document.getElementById("goal_description2");
     var goalPercentage2 = document.getElementById("percentage_goal2");
     db.collection(user_email).doc("Budget").get().then(function(doc) {

        savingsAmount = doc.data().savings;

        db.collection(user_email).doc("Budget").collection("goals").doc("Goal_2").get().then(function(doc) {
            goal_deposit2.value = doc.data().GoalAmount;
            goalPercentage2.value = doc.data().goalPercentage1;
            goalDescription2.value = doc.data().GoalDescription1;

            percentage = +doc.data().goalPercentage1;
            amount = doc.data().GoalAmount;
            percentage = percentage / 100;
            /*
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
                    
                } 

    	    } else {
    	        // doc.data() will be undefined in this case
    	        console.log("No such document!");
            }
            */

    		}).catch(function(error) {
    		    console.log("Error getting document:", error);
        });

    console.log("Cached document data:", doc.data());
    }).catch(function(error) {
        console.log("Error getting cached document:", error);
    }); //first db.collection call
}
    

/*
    
    //
		
*/
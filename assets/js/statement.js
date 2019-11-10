const statementlist = document.querySelector('#statements_log');



//create the element and render the log of statements 
function renderStatement(doc){
	//use li as a tag to identify the document
	 //list
	 let li = document.createElement('li');

	//let Amount = document.createElement('span');
	//let Balance = document.createElement('span');
	//let Category = document.createElement('span');
	//let Date = document.createElement('span');
	//let Description = document.createElement('span');
	//let Type = document.createElement('span');

	//set attributes of li tag to the id of the document
	li.setAttribute('data-id', doc.id); 
	li.setAttribute('id', 'statementlist');
	li.textContent = "Date: " + doc.data().Date + " " + "Description: " + doc.data().Description + " " + "Category: " + doc.data().Category + " " + "Amount: " + doc.data().Amount + " " + "Type: " + doc.data().Type + " " + "Balance: " + doc.data().Balance ;

	//Amount.textContent = doc.data().Amount;
	//Balance.textContent = doc.data().Balance;
	//Category.textContent = doc.data().Category;
	//Date.textContent = doc.data().Date;
	//Description.textContent = doc.data().Description;
	//Type.textContent = doc.data().Type;
	//date description category amount type balance
	//li.appendChild(Date);
	//li.appendChild(Description);
	//li.appendChild(Category);
	//li.appendChild(Amount);
	//li.appendChild(Type);
	//li.appendChild(Balance);

	statementlist.appendChild(li);

}//renderStatement

function statement(){

	var db = firebase.firestore();
	var user_email = localStorage.getItem("user_Email");
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var date = new Date();

	//getting the data from this collection
	db.collection(user_email).doc("Budget").collection(months[date.getMonth()]).orderBy('Date').get().then(snapshot => {
	
		// get snapshot of data for each allows us to cycle through each document
		snapshot.docs.forEach(doc => { 
			renderStatement(doc);
			console.log(doc.id);
		})
	})
}

function  deleteStatements(){
	alert("inside delete");
	//this function is needed to clean the old elements off the document 
	//this helps to ensure that there are not repeat elements on the statements log
	document.getElementById("statementlist").reset();
	
	alert("after remove");


}


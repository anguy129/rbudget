const statementlist = document.querySelector('#statements_log');

//li
//ul

//create the element and render the log of statements 
function renderStatement(doc){
	//use li as a tag to identify the document
	 //list
	let li = document.createElement('dt');

	//set attributes of li tag to the id of the document
	li.setAttribute('data-id', doc.id); 
	li.setAttribute('id', 'statementlist');
	li.textContent = "Date: " + doc.data().Date ;
	statementlist.appendChild(li);
	//make an unordered list (indents from the main list)
	let lis = document.createElement('dd');
	lis.setAttribute('data-id', doc.id); 
	lis.setAttribute('id', 'statementlist');
	lis.textContent =  "Description: " + doc.data().Description + " " + "Category: " + doc.data().Category + " " ;//+ "Amount: " + doc.data().Amount + " " + "Type: " + doc.data().Type + " " + "Balance: " + doc.data().Balance ;
	statementlist.appendChild(lis);
	let lis2 = document.createElement('dd');
	lis2.setAttribute('data-id', doc.id); 
	lis2.setAttribute('id', 'statementlist');
	lis2.textContent = "Amount: " + doc.data().Amount + " " + "Type: " + doc.data().Type + " " + "Balance: " + doc.data().Balance ;
	statementlist.appendChild(lis2);

	//Order: date 
	//   description category amount type balance
	

}//renderStatement
/*function renderStatement(doc){
	//use li as a tag to identify the document
	 //list
	let li = document.createElement('li');

	//set attributes of li tag to the id of the document
	li.setAttribute('data-id', doc.id); 
	li.setAttribute('id', 'statementlist');
	li.textContent = "Date: " + doc.data().Date ;
	statementlist.appendChild(li);
	let lis = document.createElement('li');

	lis.setAttribute('data-id', doc.id); 
	lis.setAttribute('id', 'statementlist');
	lis.textContent =  "Description: " + doc.data().Description + " " + "Category: " + doc.data().Category + " " + "Amount: " + doc.data().Amount + " " + "Type: " + doc.data().Type + " " + "Balance: " + doc.data().Balance ;
	//date description category amount type balance
	statementlist.appendChild(lis);

}//renderStatement
*/

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


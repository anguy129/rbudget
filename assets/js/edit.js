var editing = false;
var db = firebase.firestore();


function edit() {
	var inputToEdit = document.getElementsByClassName("editable");

	for(i=0; i<inputToEdit.length; i++){
		inputToEdit[i].disabled = false;
		inputToEdit[i].style.border = "solid 1px #ffffff";
		if (inputToEdit[i].name == "name" || inputToEdit[i].name == "email") {
			inputToEdit[i].required = true;
			inputToEdit[i].placeholder = "Required Field";
		}
	};

	if (!editing) {
		editing = true;
		transformButton();
	}
};

function transformButton() {
	var saveBtn = document.getElementById("editSave");
	var cancelBtn = document.createElement("BUTTON");

	document.querySelector('.edit').textContent = 'Save';
	document.querySelector('.edit').setAttribute( 'style', 'color: rgb(27, 31, 34) !important');
	document.querySelector('.edit').style.backgroundColor = '#ffffff';
	document.querySelector('.edit').style.fontWeight = '600';
	cancelBtn.textContent = 'Cancel';
	cancelBtn.style.float = 'right';
	cancelBtn.className = 'edit';
	document.getElementById("profile").appendChild(cancelBtn);

	saveBtn.addEventListener("click", save);
};

function save() {
	var fields = document.getElementsByClassName("editable");
	var user_email = localStorage.getItem("user_Email");

	if (fields[0].value == "" || fields[1].value == "") {
		alert("Name and email are required fields");
	}
	else if (fields[2].value == "") {
		db.collection(user_email).doc("Profile").update({
			"name": fields[0].value,
			"email": fields[1].value,
			"address": fields[3].value
		});		
	}
	else if (fields[3].value == "") {
		db.collection(user_email).doc("Profile").update({
			"name": fields[0].value,
			"email": fields[1].value,
			"phone": fields[2].value
		});
	}
	else {
		db.collection(user_email).doc("Profile").update({
			"name": fields[0].value,
			"email": fields[1].value,
			"phone": fields[2].value,
			"address": fields[3].value
		});
	}
};
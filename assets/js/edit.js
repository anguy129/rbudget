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
};

function transformButton() {
	var saveBtn = document.getElementsByClassName("edit");
	var cancelBtn = document.createElement("BUTTON");

	saveBtn.innerText = "Save";
	cancelBtn.innerText = "Cancel";
	document.getElementById("profile").appendChild(cancelBtn);
};
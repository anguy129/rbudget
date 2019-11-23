var db = firebase.firestore();
var user_email = localStorage.getItem("user_Email");

function loadProfile() {
	var profileInfo = document.getElementsByClassName("editable");

	db.collection(user_email).doc("Profile").get().then(function(doc) {
		address = doc.data().address;
		email = doc.data().email;
		name = doc.data().name;
		phone = doc.data().phone;

		profileInfo.namedItem("address").value = address;
		profileInfo.namedItem("email").value = email;
		profileInfo.namedItem("name").value = name;
		profileInfo.namedItem("phone").value = phone;

		profileInfo.namedItem("name").style.fontWeight = "900";
		profileInfo.namedItem("name").style.paddingLeft = "0";
	});
};
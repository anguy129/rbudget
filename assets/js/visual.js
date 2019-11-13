function visual(){
	am4core.ready(function() {
									
	// Themes begin
	am4core.useTheme(am4themes_dark);
	am4core.useTheme(am4themes_animated);
	// Themes end
	
	// Create chart instance
	var chart = am4core.create("chartdiv", am4charts.PieChart);
	
	// Add data
	
	var user_email = localStorage.getItem("user_Email");
	var catEntertainment;
	var catHousingRent;
	var catUtilities;
	var catFood;
	var catTransportation;
	var catEducation;
	var catLoanRepay;
	var catChildCare;
	var catSavings;
	
	var db = firebase.firestore();
	
	db.collection(user_email).doc("Budget").get().then(function(doc) {
		catEntertainment = doc.data().entertainment;
		catHousingRent = doc.data().housing;
		catUtilities = doc.data().utilities;
		catFood = doc.data().food;
		catTransportation = doc.data().transportation;
		catEducation = doc.data().education;
		catLoanRepay = doc.data().loanPayment;
		catChildCare = doc.data().childCare;
		catSavings = doc.data().savings;

		if(doc.exists){
			console.log("Document data:", doc.data());
	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }

		}).catch(function(error) {
		    console.log("Error getting document:", error);
	});
	

	chart.data = [ {
	"category": "Entertainment",
	"amount": catEntertainment
	}, {
	"category": "Housing/Rent",
	"amount": catHousingRent
	}, {
	"category": "Utilities",
	"amount": catUtilities
	}, {
	"category": "Food",
	"amount": catFood
	}, {
	"category": "Transportation",
	"amount": catTransportation
	}, {
	"category": "Education",
	"amount": catEducation
	}, {
	"category": "Loan Repayment",
	"amount": catLoanRepay
	}, {
	"category": "Child Care",
	"amount": catChildCare
	}, {
	"category": "Savings",
	"amount": catSavings
	} ];
	
	// Add and configure Series
	var pieSeries = chart.series.push(new am4charts.PieSeries());
	pieSeries.dataFields.value = "amount";
	pieSeries.dataFields.category = "category";
	pieSeries.slices.template.stroke = am4core.color("#fff");
	pieSeries.slices.template.strokeWidth = 1;
	pieSeries.slices.template.strokeOpacity = 1;
	
	// This creates initial animation
	pieSeries.hiddenState.properties.opacity = 1;
	pieSeries.hiddenState.properties.endAngle = -90;
	pieSeries.hiddenState.properties.startAngle = -90;
	
	}); // end am4core.ready()

}
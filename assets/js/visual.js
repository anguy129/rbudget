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
	var overallBudget;
	
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
		overallBudget = doc.data().overallBudget;

		if(doc.exists){
			chart.data = [ {
			"category": "Entertainment",
			"amount": overallBudget * 0.1
			}, {
			"category": "Housing/Rent",
			"amount": overallBudget * 0.25
			}, {
			"category": "Utilities",
			"amount": overallBudget * 0.05
			}, {
			"category": "Food",
			"amount": overallBudget * 0.1
			}, {
			"category": "Transportation",
			"amount": overallBudget * 0.1
			}, {
			"category": "Education",
			"amount": overallBudget * 0.05
			}, {
			"category": "Loan Repayment",
			"amount": overallBudget * 0.05
			}, {
			"category": "Child Care",
			"amount": overallBudget * 0.1
			}, {
			"category": "Savings",
			"amount": overallBudget * 0.2
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
	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }

		}).catch(function(error) {
		    console.log("Error getting document:", error);
	});
	
	
	}); // end am4core.ready()

}
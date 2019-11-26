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
		catLoanRepay = doc.data().loan_repayment;
		catChildCare = doc.data().child_care;
		catSavings = doc.data().savings;

		if(doc.exists){
			chart.data = [ {
			"category": "Entertainment",
			"amount": catEntertainment
			}, {
			"category": "Housing",
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
	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }

		}).catch(function(error) {
		    console.log("Error getting document:", error);
	});

	}); // end am4core.ready()	

	am4core.ready(function() {
									
		// Themes begin
		am4core.useTheme(am4themes_dark);
		am4core.useTheme(am4themes_animated);
    	// Themes end
    
    	// Create chart instance
    	var chart = am4core.create("chartdiv3", am4charts.XYChart);
    
    	 // Title
    var title = chart.titles.push(new am4core.Label());
    title.text = "Research tools used by students";
    title.fontSize = 25;
    title.marginBottom = 15;
    
    // Add data
    chart.data = [{
      "category": "Search engines",
      "negative": -0.1,
      "positive": 94
    }, {
      "category": "Online encyclopedias",
      "negative": -2,
      "positive": 75
    }, {
      "category": "Peers",
      "negative": -2,
      "positive": 42
    }, {
      "category": "Social media",
      "negative": -2,
      "positive": 52
    }, {
      "category": "Study guides",
      "negative": -6,
      "positive": 41
    }, {
      "category": "News websites",
      "negative": -3,
      "positive": 25
    }, {
      "category": "Textbooks",
      "negative": -5,
      "positive": 18
    }, {
      "category": "Librarian",
      "negative": -14,
      "positive": 16
    }, {
      "category": "Printed books",
      "negative": -9,
      "positive": 12
    }, {
      "category": "Databases",
      "negative": -18,
      "positive": 17
    }, {
      "category": "Student search engines",
      "negative": -17,
      "positive": 10
    }];
    
    
    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.axisFills.template.disabled = false;
    categoryAxis.renderer.axisFills.template.fillOpacity = 0.05;
    
    
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = -100;
    valueAxis.max = 100;
    valueAxis.renderer.minGridDistance = 50;
    valueAxis.renderer.ticks.template.length = 5;
    valueAxis.renderer.ticks.template.disabled = false;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text == "Male" || text == "Female" ? text : text + "%";
    })
    
    // Legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.width = 50;
    
    // Use only absolute numbers
    chart.numberFormatter.numberFormat = "#.#s";
    
    // Create series
    function createSeries(field, name, color) {
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = "category";
      series.stacked = true;
      series.name = name;
      series.stroke = color;
      series.fill = color;
      
      var label = series.bullets.push(new am4charts.LabelBullet);
      label.label.text = "{valueX}%";
      label.label.fill = am4core.color("#fff");
      label.label.strokeWidth = 0;
      label.label.truncate = false;
      label.label.hideOversized = true;
      label.locationX = 0.5;
      return series;
    }
    
    var interfaceColors = new am4core.InterfaceColorSet();
    var positiveColor = interfaceColors.getFor("positive");
    var negativeColor = interfaceColors.getFor("negative");
    
    createSeries("negative", "Under", negativeColor);
    createSeries("positive", "Over", positiveColor);
    
    }); // end am4core.ready()

    am4core.ready(function() {
									
	// Themes begin
	am4core.useTheme(am4themes_dark);
	am4core.useTheme(am4themes_animated);
	// Themes end
	
	// Create chart instance
	var chart = am4core.create("chartdiv2", am4charts.PieChart);
	// Add data
	
	var user_email = localStorage.getItem("user_Email");
	var overallBudget;
	
	var db = firebase.firestore();

	db.collection(user_email).doc("Budget").get().then(function(doc) {
			overallBudget = doc.data().overallBudget;
			selfRecommended = doc.data().selfRecommend;
			//alert(selfRecommended);
			//alert(overallBudget);
			if(selfRecommended == 0){
				chart.data = [ {
					"category": "Entertainment",
					"amount": overallBudget * 0.10
					}, {
					"category": "Housing",
					"amount": overallBudget * 0.35
					}, {
					"category": "Utilities",
					"amount": overallBudget * 0.05
					}, {
					"category": "Food",
					"amount": overallBudget * 0.20
					}, {
					"category": "Transportation",
					"amount": overallBudget * 0.05
					}, {
					"category": "Education",
					"amount": overallBudget * 0.10
					}, {
					"category": "Loan Repayment",
					"amount": overallBudget * 0.05
					}, {
					"category": "Child Care",
					"amount": overallBudget * 0.05
					}, {
					"category": "Savings",
					"amount": overallBudget * 0.05
					} ];

			}
			else{

				db.collection(user_email).doc("Recommendations").get().then(function(doc) {
    // Document was found in the cache. If no cached document exists,
    // an error will be returned to the 'catch' block below.
		   		    education = doc.data().Education;
					entertainment = doc.data().Entertainment;
					food = doc.data().Food;
					housing = doc.data().Housing;
					loans = doc.data().Loans;
					savings = doc.data().Savings;
					transportation = doc.data().Transportation;
					utilities = doc.data().Utilities;
					childCare = doc.data().ChildCare;
					
					housing = housing / 100;
					food = food / 100;
					utilities = utilities / 100;
					savings = savings / 100;
					education = education / 100;
					entertainment = entertainment / 100;
					transportation = transportation / 100;
					loans = loans / 100;
					childCare = childCare / 100;

					chart.data = [ {
					"category": "Entertainment",
					"amount": overallBudget * entertainment
					}, {
					"category": "Housing",
					"amount": overallBudget * housing
					}, {
					"category": "Utilities",
					"amount": overallBudget * utilities
					}, {
					"category": "Food",
					"amount": overallBudget * food
					}, {
					"category": "Transportation",
					"amount": overallBudget * transportation
					}, {
					"category": "Education",
					"amount": overallBudget * education
					}, {
					"category": "Loan Repayment",
					"amount": overallBudget * loans
					}, {
					"category": "Child Care",
					"amount": overallBudget * childCare
					}, {
					"category": "Savings",
					"amount": overallBudget * savings
					} ];

				}).catch(function(error) {
			    console.log("Error getting document:", error);
				}); //nested db.collection call

			}

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



		console.log("Cached document data:", doc.data());
	}).catch(function(error) {
	    console.log("Error getting cached document:", error);
	}); //first db.collection call

	}); // end am4core.ready()
}

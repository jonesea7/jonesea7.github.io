function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "You Ordered:<br>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
    getOrder(runningTotal,text1);
    //getCheese(runningTotal,text1); // All three of these variables will be passed on to each function
};

function getOrder(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
    }

    //============================== ADD CHEESE 'FUNCTION' HERE ==========================================

    var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var k = 0; k < cheeseArray.length; k++) {
		if (cheeseArray[k].checked) {
			var selectedCheese = cheeseArray[k].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	
	if (selectedCheese === "Extra Cheese") {
        cheeseTotal = 3;
        console.log("extra $3 for extra for extra cheese");
	} else {
		cheeseTotal = 0;
    };

    //================================= ADD CRUST 'FUNCTION' HERE ============================================

    var crustTotal = 0;
    var selectedCrust = [];
    var crustArray = document.getElementsByClassName("crust");
    for (var x = 0; x < crustArray.length; x++) {
        if (crustArray[x].checked) {
            var selectedCrust = crustArray[x].value;
            text1 = text1+selectedCrust+"<br>"
        }
    }

    if (selectedCrust === "Cheese Stuffed Crust") {
        crustTotal = 3;
        console.log('extra $3 for stuffed crust')
    } else {
        crustTotal = 0;
    };

    //=========================================ADD SAUCE SELECTION ===============================================

    var selectedSauce = [];
    var sauceArray = document.getElementsByClassName("sauce");
    for (var s = 0; s < sauceArray.length; s++) {
        if (sauceArray[s].checked) {
            var selectedSauce = sauceArray[s].value;
            text1 = text1+selectedSauce+"<br>"
        }
    }

    //======================================== ADD VEGGIE SELECTION ========================

    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggie");
    for (var v = 0; v < veggieArray.length; v++) {
        if (veggieArray[v].checked){
            selectedVeggie.push(veggieArray[v].value);
            console.log("veggie: "+veggieArray[v].value);
            text1=text1+veggieArray[v].value+"<br>";
        }
    }

    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }
    "<br><br>"



	runningTotal = (runningTotal + meatTotal + cheeseTotal + crustTotal + veggieTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
    console.log("meat text1: "+text1);
    console.log('cheese selected: '+selectedCheese);
    console.log('sauce: '+selectedSauce);
    console.log("veggies: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};


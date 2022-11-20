
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var num = 0;
var inchRes = 0;
var	feetRes = 0;
var	yardsRes = 0;
var	metresRes = 0;
var	kilometresRes = 0;
var	milesRes = 0;

$ = function(id){
	return document.getElementById(id);
};

ResetTextFields = function(){
	$("inchRes").innerHTML=0;
	$("feetRes").innerHTML=0;
	$("yardsRes").innerHTML=0;
	$("metresRes").innerHTML=0;
	$("kilometresRes").innerHTML=0;
	$("milesRes").innerHTML=0;
	$("num").value=0;
	$("result").innerHTML="Are you right?"
	$("resultPara").innerHTML ="When entering your answer please make sure to enter integer values only.<br>Negative values are permitted as they may be needed for the minus calculation.";
}


// GenerateQuestion = function(){
// 	ResetTextFields();
// 	topLeft = $("topLeft").innerHTML = Math.floor(Math.random() * 10) + 1;
// 	topRight = $("topRight").innerHTML = Math.floor(Math.random() * 10) + 1;
// 	bottomLeft = $("bottomLeft").innerHTML = Math.floor(Math.random() * 10) + 1;
// 	bottomRight = $("bottomRight").innerHTML = Math.floor(Math.random() * 10) + 1;
// }

 checkOperation = function(){
	 
	selection =$("symbol").value;
 	if (selection == "inch")
 		 calculateInch();
 	else if(selection == "foot")
 		 calculateFeet();
 	else if(selection == "yard")
 		 calculateYards();
 	else if(selection == "metres")
 		 calculateMetres();
 	else if(selection == "kilometres")
 		 calculateKilometres();
 	else if(selection == "miles")
 		 calculateMiles();
 	else(alert("oooppps"))
	//  nanOrNum();
 }

 checkDecimal = function(){
	decSel =$("decimal").value;
 	if (decSel == "one")
          decPlace = 1;    
 	else if(decSel == "two")
         decPlace = 2; 
 	else if(decSel == "three")
	 	decPlace = 3;
 	else if(decSel == "four")
	 	decPlace = 4;
 	else if(decSel == "five")
	 	decPlace = 5;
 	
 	else(alert("oproblem with decimal places"))
	
 }

 fixedPlace = function(){
	if(decSel =="one")
	decimalRes = (inchRes).toFixed(1);
	else if (decSel == "two")
	decimalRes = (numRes / denumRes).toFixed(2);
    else if (decSel == "three")
    decimalRes = (inchRes).toFixed(3);
	else if (decSel == "four")
	decimalRes = (numRes / denumRes).toFixed(4);
	else
	decimalRes = (numRes / denumRes).toFixed(5);
 }



 nanOrNum = function() {
if(isNaN(num) || (num <= 0) ){
    alert(" Please enter a  positive number")
}

 }

calculateInch = function(){
    num = parseInt($("num").value);
    nanOrNum();
    checkDecimal();
    $("inchRes").innerHTML = num.toFixed(decPlace);
    $("feetRes").innerHTML= (num * 0.0833333).toFixed(decPlace);
    $("yardsRes").innerHTML= (num * 0.0277778).toFixed(decPlace);
    $("metresRes").innerHTML= (num * 0.0254).toFixed(decPlace);
    $("kilometresRes").innerHTML= (num * 2.54e-5).toFixed(decPlace);
    $("milesRes").innerHTML= (num * 1.5783e-5).toFixed(decPlace);
   

}

calculateFeet = function(){
    num = parseInt($("num").value);
    nanOrNum();
    checkDecimal();
    $("inchRes").innerHTML = (num * 12).toFixed(decPlace);
    $("feetRes").innerHTML= num.toFixed(decPlace);
    $("yardsRes").innerHTML= (num / 3).toFixed(decPlace);
    $("metresRes").innerHTML= (num / 3.281).toFixed(decPlace);
    $("kilometresRes").innerHTML= (num / 3281).toFixed(decPlace);
    $("milesRes").innerHTML= (num / 5280).toFixed(decPlace);
}
calculateYards = function(){
    num = parseInt($("num").value);
    nanOrNum();
    checkDecimal();
    $("inchRes").innerHTML = (num * 36).toFixed(decPlace);
    $("feetRes").innerHTML= (num * 3).toFixed(decPlace);
    $("yardsRes").innerHTML= num.toFixed(decPlace);;
    $("metresRes").innerHTML= (num / 1.094).toFixed(decPlace);
    $("kilometresRes").innerHTML= (num / 1094).toFixed(decPlace);
    $("milesRes").innerHTML= (num / 1760).toFixed(decPlace);
}
calculateMetres = function(){
    num = parseInt($("num").value);
    nanOrNum();
    checkDecimal();
    $("inchRes").innerHTML = (num * 39.37).toFixed(decPlace);
    $("feetRes").innerHTML= (num * 3.281).toFixed(decPlace);
    $("yardsRes").innerHTML= (num * 1.094).toFixed(decPlace);
    $("metresRes").innerHTML= num.toFixed(decPlace);
    $("kilometresRes").innerHTML= (num / 1000).toFixed(decPlace);
    $("milesRes").innerHTML= (num / 1609).toFixed(decPlace);
}

calculateKilometres = function(){
    num = parseInt($("num").value);
    nanOrNum();
    checkDecimal();
    $("inchRes").innerHTML = (num * 39370).toFixed(decPlace);
    $("feetRes").innerHTML= (num * 3281).toFixed(decPlace);
    $("yardsRes").innerHTML= (num * 1094).toFixed(decPlace);
    $("metresRes").innerHTML= (num * 1000).toFixed(decPlace);
    $("kilometresRes").innerHTML= num.toFixed(decPlace);
    $("milesRes").innerHTML= (num / 1.609).toFixed(decPlace);
}
calculateMiles = function(){
    num = parseInt($("num").value);
    nanOrNum();
    checkDecimal();
    $("inchRes").innerHTML = (num * 63360).toFixed(decPlace);
    $("feetRes").innerHTML= (num * 5280).toFixed(decPlace);
    $("yardsRes").innerHTML= (num * 1760).toFixed(decPlace);
    $("metresRes").innerHTML= (num * 1609).toFixed(decPlace);
    $("kilometresRes").innerHTML= (num * 1.609).toFixed(decPlace);
    $("milesRes").innerHTML= num.toFixed(decPlace);
}



/*
When the  web page loads the window.onload function is called.  This function will firstly call the GenerateQuestion() function.  Then it will wait for the calc or reset button to be pressed and call the calculate() or GenerateQuestion() respectively.
*/
window.onload = function(){
	$("check").onclick = function(){checkOperation();}
	$("reset").onclick = function(){ResetTextFields();}
};
	 
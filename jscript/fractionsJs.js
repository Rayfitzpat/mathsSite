
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var num = 0;
var denum = 0;
var numRes =0;
var denumRes = 0;
var decimalRes = 0;
var decPlace = 0;

$ = function(id){
	return document.getElementById(id);
};

ResetTextFields = function(){
	$("topLeft").innerHTML=0;
	$("topRight").innerHTML=0;
	$("bottomLeft").innerHTML=0;
	$("bottomRight").innerHTML=0;
	$("num").value=0;
	$("denum").value=0;
	$("result").innerHTML="Are you right?"
	$("resultPara").innerHTML ="When entering your answer please make sure to enter integer values only.<br>Negative values are permitted as they may be needed for the minus calculation.";
}


GenerateQuestion = function(){
	ResetTextFields();
	topLeft = $("topLeft").innerHTML = Math.floor(Math.random() * 10) + 1;
	topRight = $("topRight").innerHTML = Math.floor(Math.random() * 10) + 1;
	bottomLeft = $("bottomLeft").innerHTML = Math.floor(Math.random() * 10) + 1;
	bottomRight = $("bottomRight").innerHTML = Math.floor(Math.random() * 10) + 1;
}

 checkOperation = function(){
	 
	selection =$("symbol").value;
 	if (selection == "plus")
 		 calculatePlus();
 	else if(selection == "minus")
 		 calculateMinus();
 	else if(selection == "multiply")
 		 calculateMultiply();
 	else if(selection == "divide")
 		 calculateDivide();
 	else(alert("oooppps"))
	 nanOrNum();
 }

 checkDecimal = function(){
	decSel =$("decimal").value;
 	if (decSel == "one")
 		 decPlace = 1;
 	else if(decSel == "two")
		 decPlace = 2;
 	else if(decSel == "three")
	 	decPlace = 3;
 	
 	else(alert("oproblem with decimal places"))
	
 }

 fixedPlace = function(){
	if(decSel =="one")
	decimalRes = (numRes / denumRes).toFixed(1);
	else if (decSel == "two")
	decimalRes = (numRes / denumRes).toFixed(2);
	else
	decimalRes = (numRes / denumRes).toFixed(3);
 }

 resultTable = function(){
	if((num ==numRes) && (denum == denumRes))
	{
		$("result").innerHTML= "<p style = 'color: green';>Correct!!";
		$("resultPara").innerHTML = "<p>Well done. You got it right: </p>"
		+"<table><tr>"
		+"<td> " +numRes +"</td>"
		+"<td rowspan = '3'> = </td>"
		+"<td rowspan = '3'>"+decimalRes+"</td>"
		+"</tr>"
		// row2
		+"<tr>"
		+"<td><hr width = '50px;'> </td><td</td><td</td>"
		+"</tr>"
		// row3
		+"<tr>"
		+"<td> " +denumRes +"</td><td</td><td</td></tr>"
		+"</table><br><p>Try another one."
	}
	else
	{
		$("result").innerHTML = "<p style = 'color: red';>incorrect!!";
		$("resultPara").innerHTML = "<p>Hard Luck - The correct answer is: </p>"
		+"<table><tr>"
		+"<td> " +numRes +"</td>"
		+"<td rowspan = '3'> = </td>"
		+"<td rowspan = '3'>"+decimalRes+"</td>"
		+"</tr>"
		// row2
		+"<tr>"
		+"<td><hr width = '50px;'> </td><td</td><td</td>"
		+"</tr>"
		// row3
		+"<tr>"
		+"<td> " +denumRes +"</td><td</td><td</td></tr>"
		+"</table><br><p> Dont give up - TRY AGAIN"
	}

 }
// I did not use it to check a negative number as a negative number may be needed for the minus calculation.
 nanOrNum = function() {
if(isNaN(num) || isNaN(denum) || (num == 0) || (denum == 0)){
	alert(" Please enter a number")
	GenerateQuestion();
}

 }

calculatePlus = function(){
	num = parseInt($("num").value);
	denum = parseInt($("denum").value);
	// nanOrNum();
	numRes = ((topLeft * bottomRight)+(topRight * bottomLeft));
	denumRes = (bottomLeft * bottomRight)
	checkDecimal();
	fixedPlace();
	resultTable();
}

calculateMinus = function(){
	num = parseInt($("num").value);
	denum = parseInt($("denum").value);
	// nanOrNum();
	numRes = ((topLeft * bottomRight)-(topRight * bottomLeft));
	denumRes = (bottomLeft * bottomRight)
	checkDecimal();
	fixedPlace();
	resultTable();
}

calculateMultiply = function(){
	num = parseInt($("num").value);
	denum = parseInt($("denum").value);
	// nanOrNum();
	numRes = (topLeft * topRight);
	denumRes = (bottomLeft * bottomRight)
	checkDecimal();
	fixedPlace();
	resultTable();
}

calculateDivide = function(){
	num = parseInt($("num").value);
	denum = parseInt($("denum").value);
	// nanOrNum();
	numRes = ((topLeft * bottomRight));
	denumRes = (bottomLeft * topRight)
	decimalRes = (numRes / denumRes).toFixed(3)
	checkDecimal();
	fixedPlace();
	resultTable();	
}

/*
When the  web page loads the window.onload function is called.  This function will firstly call the GenerateQuestion() function.  Then it will wait for the calc or reset button to be pressed and call the calculate() or GenerateQuestion() respectively.
*/
window.onload = function(){
	GenerateQuestion();
	$("check").onclick = function(){checkOperation();}
	$("another").onclick = function(){GenerateQuestion();}
};
	 
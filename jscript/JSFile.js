var $ = function(id){
	return document.getElementById(id);
};
var ResetTextfields = function(){
	$("width").value="";
	$("length").value="";
	$("height").value="";
	$("radius").value="";
	$("resultPara").innerHTML ="Volume result will go here:";
};

var ResetTextfieldsSpeed = function(){
	$("distance").value="";
	$("time").value="";
	
	$("resultParaSpeed").innerHTML ="Speed is defined as distance over time";
};

var ResetTextfieldsMass = function(){
	$("massDen").value="";
	$("massVol").value="";

	$("resultParaMass").innerHTML ="Mass is defined as Density over Volume:";
};
window.onload = function(){
	$("calculate").onclick = function(){calculate();}
	$("calculateSpeed").onclick = function(){calculateSpeed();}
	$("calculateMass").onclick = function(){calculateMass();}
	$("reset").onclick = function(){ResetTextfields();}
	$("resetSpeed").onclick = function(){ResetTextfieldsSpeed();}
	$("resetMass").onclick = function(){ResetTextfieldsMass();}
};
var SetFields = function(id){
	
	if(id==1){
		$("radius").disabled=true;
		$("width").disabled=false;
		$("length").disabled=false;
		$("height").disabled=false;
		$("theImage").src = "images/cube.jpg";
	}
	if(id==2 || id ==3){
		$("radius").disabled=false;
		$("width").disabled=true;
		$("length").disabled=true;
		if(id==2){
			$("theImage").src = "images/cylinder.jpg";
			$("height").disabled=false;
		}
		else{
			$("height").disabled=true;
			$("theImage").src = "images/sphere.jpg";
		}
	}
	if(id==4|| id==5){
		$("radius").disabled=false;
		$("width").disabled=true;
		$("length").disabled=true;
		$("height").disabled=false;
		if(id==4){
		$("theImage").src = "images/cone.png";
		}
		else{
			$("theImage").src = "images/capsule.png";
		}
	}
	if(id==5){

	}

};
var calculateTank = function(){
	/*This function takes the width, height and length values from the HTML, 
	checks to see if they are numbers, if so it calculates the volume of the tank
	The results are printed to the paragraph at the bottom of the screen, as seen in
	the screen shot*/
	var w= parseFloat($("width").value);
	var l= parseFloat($("length").value);
	var h= parseFloat($("height").value);

	if(isNaN(w)||isNaN(l)||isNaN(h))
	alert("You must enter numerical values for the width, length and height");
	else{
		var vol =(w*l*h).toFixed(2);
		$("resultPara").innerHTML = "The volume of this tank is " +vol +"cm<sup>3</sup>";
	}
};
var calculateCylinder = function(){
	/*This function takes the radius and height values from the HTML, 
	checks to see if they are numbers, if so it calculates the volume of the cylinder
	The results are printed to the paragraph at the bottom of the screen, as seen in
	the screen shot*/
	var r= parseFloat($("radius").value);
	var h= parseFloat($("height").value);

	if(isNaN(r)||isNaN(h))
	alert("You must enter numerical values for the radius and height");
	else{
		var vol =(Math.PI*Math.pow(r,2)*h).toFixed(2);
		$("resultPara").innerHTML = "The volume of this cylinder is " +vol +"cm<sup>3</sup>";
	}
};
var calculateSphere = function(){
	/*This function takes the radius value from the HTML, 
	checks to see if it is a numbers, if so it calculates the volume of the sphere
	The result are printed to the paragraph at the bottom of the screen, as seen in
	the screen shot*/
	var r= parseFloat($("radius").value);

	if(isNaN(r))
	alert("You must enter numerical values for the radius");
	else{
		var vol =((4/3)*Math.PI*Math.pow(r,3)).toFixed(2);
		$("resultPara").innerHTML = "The volume of this sphere is " +vol +"cm<sup>3</sup>";
	}


};
var calculateCone = function(){
	
	var r= parseFloat($("radius").value);
	var h= parseFloat($("height").value);


	if(isNaN(r) || isNaN(h))
	alert("You must enter numerical values for the radius");
	else{
		var vol =((1/3)*Math.PI*Math.pow(r,2)*h).toFixed(2);
		$("resultPara").innerHTML = "The volume of this cone is " +vol +"cm<sup>3</sup>";
	}


};
var calculateCapsule = function(){
	
	var r= parseFloat($("radius").value);
	var h= parseFloat($("height").value);
	if(isNaN(r)|| isNaN(h))
	alert("You must enter numerical values for the radius");
	else{
		var vol =((4/3)*Math.PI*Math.pow(r,3)+(Math.PI*Math.pow(r,2))*h).toFixed(2);
		$("resultPara").innerHTML = "The volume of this capsule is " +vol +"cm<sup>3</sup>";
	}


};
var calculate = function(){
	/*This function checks to see what radio-button is selected and then
	calls the appropriate function.  For example if the Tank is checked the calculateTank
	function is called.*/
	if($("Tank").checked==true)
	calculateTank();
	if($("Cylinder").checked==true)
	calculateCylinder();
	if($("Sphere").checked==true)
	calculateSphere();
	if($("Cone").checked==true)
	calculateCone();
	if($("Capsule").checked==true)
	calculateCapsule();
};

var calculateSpeed = function(){
	var d= parseFloat($("distance").value);
	var t= parseFloat($("time").value);
	if(isNaN(d)|| isNaN(t))
	alert("You must enter numerical values for distance and time.");
	else{
		var spe =(d / t).toFixed(2);
		$("resultParaSpeed").innerHTML = "The speed is " +spe ;
	}
	}


var calculateMass = function(){
	var md= parseFloat($("massDen").value);
	var mv= parseFloat($("massVol").value);
	if(isNaN(md)|| isNaN(mv))
	alert("You must enter numerical values for density and volume.");
	else{
		var massres =(md / mv).toFixed(2);
		$("resultParaMass").innerHTML = "The mass is " +massres ;
	}
	}

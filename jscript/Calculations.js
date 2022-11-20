var $ = function(id) {
    return document.getElementById(id);
};

var ResetTextfields = function(){
    $("val1").value = " ";
    $("val2").value = " ";
    $("result").value = " ";
    $("resPara").innerHTML = " ";
}

var ResetTextfieldsMinMax = function(){
    $("numb1").value = " ";
    $("numb2").value = " ";
    $("numb3").value = " ";
    $("numb4").value = " ";
    $("numb5").value = " ";
    $("resultMinMax").value = " ";
    $("resParaMinMax").innerHTML = "Results will appear here";
}

// The calculate function will go here
window.onload=function()
{
    $("calculate").onclick=function(){calculate();};
    $("calculateMinMax").onclick=function(){calculateMinMax();};
    $("reset").onclick=function(){ResetTextfields();};
    $("resetMinMax").onclick=function(){ResetTextfieldsMinMax();};
}

var calculate= function(){
var v1 = parseFloat($("val1").value);
var v2 = parseFloat($("val2").value);
var res = 0.0;
if(isNaN(v1) || isNaN(v2))
alert("These must be numerical");

else{
if($("add").checked==true){
    res = (v1+v2).toFixed(2);
    $("result").value = res;
    $("resPara").innerHTML ="<hr> The addition of "+v1+" and "+v2+" is "+res;
}

if($("sub").checked==true){
    res = (v1-v2).toFixed(2);
    $("result").value=res;
    $("resPara").innerHTML="<hr>"+ v1+" minus "+v2+" is "+res +"<br> The absolute difference between " 
    +v1 + " and " + v2 + " is: "+ Math.abs(v1-v2).toFixed(2);
}

if($("mult").checked==true){
    res = (v1*v2).toFixed(2);
    $("result").value=res;
    $("resPara").innerHTML="<hr> The product of "+v1+" and "+v2+" is "+res;
}

if($("div").checked==true){
    res = (v1/v2).toFixed(2);
    $("result").value=res;
    $("resPara").innerHTML="<hr> The quotient of "+v1+" and "+v2+" is "+res;
}
}
}
var calculateMinMax= function(){
    var n1 = parseFloat($("numb1").value);
    var n2 = parseFloat($("numb2").value);
    var n3 = parseFloat($("numb3").value);
    var n4 = parseFloat($("numb4").value);
    var n5= parseFloat($("numb5").value);
    if(isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5))
    alert("Entries for min & max must be numerical");
    else{
        if((n1 <n2)&& (n1 <n3) && (n1 <n4) && (n1 < n5))
        var min = n1;
        else if ((n2 < n3) && (n2 <n4) && (n2 < n5) )
        var min = n2;
        else if((n3 <n4) && (n3 <n5))
        var min = n3;
        else if (n4 < n5)
        var min = n4;
        else
        var min = n5;
        
        if((n1 >n2)&& (n1 >n3) && (n1 >n4) && (n1 > n5))
        var max = n1;
        else if ((n2 > n3) && (n2 > n4) && (n2 > n5) )
        var max = n2;
        else if((n3 > n4) && (n3 > n5))
        var max = n3;
        else if (n4 > n5)
        var max = n4;
        else
        var max = n5;
        $("resParaMinMax").innerHTML = "The minimum number is: " + min.toFixed(2) +"<br> The maximum number is: " +max.toFixed(2)
    }
    
    
}
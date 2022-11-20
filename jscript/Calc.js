var $ = function(id) {
    return document.getElementById(id);
};

var ResetTextfields = function(){
    $("val1").value = " ";
    $("resPara").innerHTML = " ";
    $("imageSize").style="height:800px;"
    $("smallScreen").style="margin-top: 2%;"

   
}

// The calculate function will go here
window.onload=function()
{
    $("calculate").onclick=function(){calculate()};
    
    $("reset").onclick=function(){ResetTextfields()};
  
}

var calculate= function(){
var v1 = parseInt($("val1").value);
var res = 0;
if(isNaN(v1))
alert("This must be numerical");

else{
{
    // for(i=1; 1<=20;i++)
 
    res = (v1);
    $("imageSize").style="height:2100px; "
    $("resPara").innerHTML = res + " x 1 = "
    +res * 1 + "<br>"+res + " x 2 = "+res * 2 + "<br>"+res + " x 3 = "
    +res * 3 + "<br>"+res + " x 4 = "+res * 4 + "<br>"+res + " x 5 = "
    +res * 5 + "<br>"+res + " x 6 = "+res * 6 + "<br>"+res + " x 7 = "
    +res * 7 + "<br>"+res + " x 8 = "+res * 8 + "<br>"+res + " x 9 = "
    +res *9  + "<br>"+res + " x 10 = "+res * 10 + "<br>"+res + " x 11 = "
    +res * 11 + "<br>"+res + " x 12 = "+res * 12 + "<br>"+res + " x 13 = "
    +res * 13 + "<br>"+res + " x 14 = "+res * 14 + "<br>"+res + " x 15 = "
    +res * 15 + "<br>"+res + " x 16 = "+res * 16 + "<br>"+res + " x 17 = "
    +res * 17 + "<br>"+res + " x 18 = "+res * 18 + "<br>"+res + " x 19 = "
    +res * 19 + "<br>"+res + " x 20 = "+res * 20 + "<br>"
    
}



}
}
var $ = function(id) {
    return document.getElementById(id);
};

var ResetTextfields = function(){
    $("val1").value = " ";
    $("resPara").innerHTML = " ";
    $("imageSize").style="height:800px;"
}


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
    $("imageSize").style="height:1900px;"
    $("resPara").innerHTML = "<h1>Here are your factorials beginning with Number " + v1 + "</h1>"
      {
          for( i=v1; i<=20; i++)
          {
              v1 = i;
              for(j = i -1 ; j>=1;j--)
              {
               
               v1 = v1 * j;
              }
              
          }
          
      }
      
     
    
}



}
}
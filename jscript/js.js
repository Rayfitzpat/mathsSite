var number = parseInt(prompt("Please enter a number between 1 & 20"));
var result = " ";
 var num1 = number;

 if(isNaN(number) || (number<1 || number > 20))
  {
      alert("You did not enter a number between 1 & 20");
      result+="<body style='margin:0; margin-top:0'><h1 style = 'font-size:80; text-align:center'>Please refresh the page to choose another number</h1></body";
  }
  else
  document.write("<br><br><br><br><br><h1>Here are your factorials beginning with Number " + number + "</h1>")
  {
      for( i=number; i<=20; i++)
      {
          num1 = i;
          for(j = i -1 ; j>=1;j--)
          {
           
           num1 = num1 * j;
          }
          document.write("<div>");
          document.write( i+"!=   "+ num1 + " <br>");
          document.write("</div> ")
      }
      
  }
  document.write("<body><h1>Please refresh the page to choose another number</h1></body")
   document.write(result);

     // Open and close sidebar
     function openNav() {
       document.getElementById("mySidebar").style.width = "60%";
       document.getElementById("mySidebar").style.display = "block";
     }
     
     function closeNav() {
       document.getElementById("mySidebar").style.display = "none";
     }
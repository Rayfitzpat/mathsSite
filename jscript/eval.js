var evenResult = " ";
                var oddResult = " ";
                var evenCounter = 0;
                var oddCounter = 0;
                var result= " ";
                var evenSum = 0;
                var oddSum = 0;
                var evenAve =0;
                var oddAve =0;
        
                var startPosition = parseInt(prompt("Please enter a number as a start position"));
                var endPosition = parseInt(prompt("Please enter a number as an end position"));
                
               if(isNaN(startPosition) || isNaN(endPosition))
                {
                    alert("You did not enter a valid number");
                    document.write("<h1>Please refresh the page and try again</h1>");
                }
               
                else
                    {
                        document.write("<div><br><br><br><h1>Number Evaluator</h1>\n<p> Start Position: "+startPosition+"<br> End position: "+endPosition);
                        for( var i=startPosition; i<=endPosition; i++)
                        {
                            if(i%2==0)
                            {
                                evenCounter++;
                                evenSum += i;
                                evenResult += i+ " ";
                            }
        
                            else{
                                oddCounter++;
                                oddSum += i;
                                oddResult += i+ " ";
                            }
        
                        
                        }
                        document.write();
                        document.write("<hr>  Odd numbers Count = "+oddCounter+"<br> Even Numbers count = "+evenCounter+"</span><hr>");
                        document.write(" Sum of all even numbers = "+ evenSum + "<br> Sum of all odd numbers ="+oddSum+"</span><hr>");
                        document.write(" Average of all even numbers = "+ (evenSum / evenCounter) + "<br> Average of all odd numbers ="+(oddSum / oddCounter)+"</span><hr>");
                        document.write(" <p>Odd Numbers:</p> "+oddResult + "<br><hr><p>Even Numbers: </p>" + evenResult+ "</span></div>");
                    }
                    
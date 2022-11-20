var res1 = 0, res2 = 0, res3 = 0, USER_ans1 = 0, USER_ans2 = 0, USER_ans3 = 0, score = 0;
$ = function(id){
    return document.getElementById(id);
};


ResetTextFields = function(){
    $("USER_ans1").value = "";
    $("USER_ans2").value = "";
    $("USER_ans3").value = "";
    $("USER_ans4").value = "";
    $("USER_ans5").value = "";
    $("USER_ans6").value = "";
    $("USER_ans7").value = "";
    $("USER_ans8").value = "";
    $("USER_ans9").value = "";
    $("USER_ans10").value = "";
    $("Feedback1").innerHTML = "";
    $("Feedback2").innerHTML = "";
    $("Feedback3").innerHTML = "";
    $("Feedback4").innerHTML = "";
    $("Feedback5").innerHTML = "";
    $("Feedback6").innerHTML = "";
    $("Feedback7").innerHTML = "";
    $("Feedback8").innerHTML = "";
    $("Feedback9").innerHTML = "";
    $("Feedback10").innerHTML = "";
    $("resultPara").innerHTML = "Enter your answers and click Score to get your result";
    $("resultPara1").innerHTML = " ";
}

GenerateQuestion = function(){
    ResetTextFields();
    var val1 = Math.floor(Math.random() * 10) + 1
    var val2 = Math.floor(Math.random() * 10) + 1
    res1 = val1 * val2;
    $("quest1").innerHTML = val1 + " x " + val2 + " = ";

    var val3 = Math.floor(Math.random() * 20) + 1
    var val4 = Math.floor(Math.random() * 20) + 1
    res2 = val3 + val4;
    $("quest2").innerHTML = val3 + " + " + val4 + " = ";

    var val5 = Math.floor(Math.random() * 30) + 1
    var val6 = Math.floor(Math.random() * 30) + 1
    res3 = val5 - val6;
    $("quest3").innerHTML = val5 + " - " + val6 + " = ";

    var val7 = Math.floor(Math.random() * 10) + 1
    var val8 = Math.floor(Math.random() * 10) + 1
    res4 = val7 * val8;
    $("quest4").innerHTML = val7 + " * " + val8 + " = ";

    var val9 = Math.floor(Math.random() * 50) + 1
    var val10 = Math.floor(Math.random() * 50) + 1
    res5 = val9 + val10;
    $("quest5").innerHTML = val9 + " + " + val10 + " = ";

    var val11 = Math.floor(Math.random() * 60) + 1
    var val12 = Math.floor(Math.random() * 60) + 1
    res6 = val11 - val12;
    $("quest6").innerHTML = val11 + " - " + val12 + " = ";

    var val13 = Math.floor(Math.random() * 10) + 1
    var val14 = Math.floor(Math.random() * 10) + 1
    res7 = val13 * val14;
    $("quest7").innerHTML = val13 + " * " + val14 + " = ";

    var val15 = Math.floor(Math.random() * 80) + 1
    var val16 = Math.floor(Math.random() * 80) + 1
    res8 = val15 + val16;
    $("quest8").innerHTML = val15 + " + " + val16 + " = ";

    var val17 = Math.floor(Math.random() * 90) + 1
    var val18 = Math.floor(Math.random() * 90) + 1
    res9 = val17 - val18;
    $("quest9").innerHTML = val17 + " - " + val18 + " = ";

    var val19 = Math.floor(Math.random() * 100) + 1
    var val20 = Math.floor(Math.random() * 100) + 1
    res10 = val19 + val20;
    $("quest10").innerHTML = val19 + " + " + val20 + " = ";

}

Calculate = function(){
    USER_ans1 = parseInt($("USER_ans1").value);
    USER_ans2 = parseInt($("USER_ans2").value);
    USER_ans3 = parseInt($("USER_ans3").value);
    USER_ans4 = parseInt($("USER_ans4").value);
    USER_ans5 = parseInt($("USER_ans5").value);
    USER_ans6 = parseInt($("USER_ans6").value);
    USER_ans7 = parseInt($("USER_ans7").value);
    USER_ans8 = parseInt($("USER_ans8").value);
    USER_ans9 = parseInt($("USER_ans9").value);
    USER_ans10 = parseInt($("USER_ans10").value);
    if(isNaN(USER_ans1) || isNaN(USER_ans2) || isNaN(USER_ans3) || isNaN(USER_ans4) || isNaN(USER_ans5) || isNaN(USER_ans6) || isNaN(USER_ans7)
    || isNaN(USER_ans8) || isNaN(USER_ans9) || isNaN(USER_ans10))
        alert("Please enter numerical values");
    else{
        if(USER_ans1 == res1){
            score+=1;
            $("Feedback1").innerHTML = "<span style='color: green;'>Correct</span>";
        }
        else
            $("Feedback1").innerHTML = "<span style='color: red;'>Incorrect</span>";

        if(USER_ans2 == res2){
            score+=1;
            $("Feedback2").innerHTML = "<span style='color: green;'>Correct</span>";
        }
        else
            $("Feedback2").innerHTML = "<span style='color: red;'>Incorrect</span>";

        if(USER_ans3 == res3){
            score+=1;
            $("Feedback3").innerHTML = "<span style='color: green;'>Correct</span>";
        }
        else
            $("Feedback3").innerHTML = "<span style='color: red;'>Incorrect</span>";

        if(USER_ans4 == res4){
            score+=1;
            $("Feedback4").innerHTML = "<span style='color: green;'>Correct</span>";
        }
        else
            $("Feedback4").innerHTML = "<span style='color: red;'>Incorrect</span>";

        if(USER_ans5 == res5){
            score+=1;
            $("Feedback5").innerHTML = "<span style='color: green;'>Correct</span>";
        }
        else
            $("Feedback5").innerHTML = "<span style='color: red;'>Incorrect</span>";

        if(USER_ans6 == res6){
            score+=1;
            $("Feedback6").innerHTML = "<span style='color: green;'>Correct</span>";
        }
        else
            $("Feedback6").innerHTML = "<span style='color: red;'>Incorrect</span>";

        if(USER_ans7 == res7){
            score+=1;
            $("Feedback7").innerHTML = "<span style='color: green;'>Correct</span>";
        }
        else
            $("Feedback7").innerHTML = "<span style='color: red;'>Incorrect</span>";

        if(USER_ans8 == res8){
            score+=1;
            $("Feedback8").innerHTML = "<span style='color: green;'>Correct</span>";
        }
        else
            $("Feedback8").innerHTML = "<span style='color: red;'>Incorrect</span>";

        if(USER_ans9 == res9){
            score+=1;
            $("Feedback9").innerHTML = "<span style='color: green;'>Correct</span>";
        }
        else
            $("Feedback9").innerHTML = "<span style='color: red;'>Incorrect</span>";

        if(USER_ans10 == res10){
            score+=1;
            $("Feedback10").innerHTML = "<span style='color: green;'>Correct</span>";
        }
        else
            $("Feedback10").innerHTML = "<span style='color: red;'>Incorrect</span>";

        var finalScore =   ((score/10)*100).toFixed(2) ;
        
        $("resultPara").innerHTML = "You got " + score + " right. Thats " + finalScore + "%";
        if(finalScore >= 100.00)
        $("resultPara1").innerHTML = "That's Amazing, you got every question correct!"
        else if(finalScore >=70.00 && finalScore <=99.99)
        $("resultPara1").innerHTML = "Great job, keep up the good work"
         else if(finalScore >=40.00 && finalScore <=69.99)
        $("resultPara1").innerHTML = "You did ok, more study needed"
        else
        $("resultPara1").innerHTML = "You failed, back to the books"

    }
    score = 0;
    
};



window.onload = function(){
    GenerateQuestion();
    $("calc").onclick = function(){Calculate();}
    $("reset").onclick = function(){GenerateQuestion();}
}
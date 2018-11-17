var score = 0;

$(document).ready(function() {
    $('.questionForm').hide();

    $('#q1').show();

    $('#q1 #submit').click(function(){
        $('.questionForm').hide();
        $('#q2').fadeIn(300);
        return false;
    });

    $('#q2 #submit').click(function(){
        $('.questionForm').hide();
        $('#q3').fadeIn(300);
        return false;
    });

    $('#q3 #submit').click(function(){
        $('.questionForm').hide();
        $('#q4').fadeIn(300);
        return false;
    });

    $('#q4 #submit').click(function(){
        $('.questionForm').hide();
        $('#q5').fadeIn(300);
        return false;
    });

    $('#q5 #submit').click(function(){
        $('.questionForm').hide();
        $('#results').fadeIn(300);
        return false;
    });

});

function check() {
    var question1 = document.q1.q1.value;
    var question2 = document.q2.q2.value;
    var question3 = document.q3.q3.value;
    var question4 = document.q4.q4.value;
    var question5 = document.q5.q5.value;
    
    if (question1 == "raditz") {
        score++;
    }
    if (question2 == "gogeta") {
        score++;
    }
    if (question3 == "16") {
        score++;
    }
    if (question4 == "#ffffff") {
        score++;
    }
    if (question5 == "9001") {
        score++;
    }

    var endMsg = ["You're a Yamcha... Collect the dragonballs and pray for strength.", "Close, but not close enough.", "You're a Super Saiyan!"];
    var endPic = ["img/yamcha.jpg", "img/vegeta.png", "img/ultra-instinct.png"];

    var grade;
        if (score < 2) {
            grade = 0;
        }
        if (score > 1 && score < 4) {
            grade = 1;
        }
        if (score > 3) {
            grade = 2;
        }
    
    document.getElementById("results").innerHTML = "Your score is " + score + " out of 5. " + endMsg[grade] + endPic[grade];
}


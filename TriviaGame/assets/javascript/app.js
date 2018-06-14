var x = setInterval(function() {
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Time's up!";
      }
    }, 1000);

function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var correct = 0;

    if (question1 == "Earth") {
        correct++;
    }
    if (question2 == "Pisces") {
        correct++;
    }
    if (question3 == "Taurus, Leo, Scorpio, and Aquarius") {
        correct++;
    }
    if (question4 == "Mercury") {
        correct++;
    }
    if (question5 == "a crab") {
        correct++;
    }
    if (question6 == "Pisces") {
        correct++;
    }
    if (question7 == "Taurus and Libra") {
        correct++;
    }
    if (question8 == "Air") {
        correct++;
    }
    if (question9 == "27-29 years") {
        correct++;
    }
    if (question10 == "your emotions") {
        correct++;
    }
}

var messages = ["You're a Star!", "Pretty good!", "Did you miss the Harry Potter one?"];

var range;
    if (correct < 3) {
        range = 2
    }
    if (correct > 5 < 7) {
        range = 1;
    }
    if (correct > 7) {
        range = 0;
    }

    document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct!";

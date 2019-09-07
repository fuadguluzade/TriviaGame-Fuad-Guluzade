var qArray = ["Which city is the capital of Russia?",
    "Which city is the capital of Germany?",
    "Which city is the capital of Australia?",
    "Which city is the capital of Thailand?",
    "Which city is the capital of Nigeria?",
    "Which city is the capital of Ecuador?",
    "Which city is the capital of Honduras?",
    "Which city is the capital of Tajikistan?",
    "Which city is the capital of Switzerland?",
    "Which city is the capital of Azerbaijan?",];

var aArray = [["Kiev", "Moscow", "Minsk", "Belgrad"],
["Munich", "Hamburg", "Bonn", "Berlin"],
["Melbourne", "Sidney", "Canberra", "Brisbane"],
["Bangkok", "Hanoi", "Phnompenh", "Rangoon"],
["Lagos", "Abuja", "Monrovia", "Brazzaville"],
["Lima", "Quito", "Bogota", "Caracas"],
["Managua", "San Jose", "Belmopan", "Tegucigalpa"],
["Tashkent", "Ashgabat", "Dushanbe", "Bishkek"],
["Geneva", "Zurich", "Lucerne", "Bern"],
["Baku", "Tbilisi", "Yerevan", "Tehran"]];

var imgArray = ["./assets/images/moscow.jpg",
    "./assets/images/berlin.jpg",
    "./assets/images/canberra.jpg",
    "./assets/images/bangkok.jpeg",
    "./assets/images/abuja.jpeg",
    "./assets/images/quito.jpg",
    "./assets/images/tegucigalpa.jpg",
    "./assets/images/dushanbe.jpg",
    "./assets/images/bern.png",
    "./assets/images/Baku.png"]

$(".win-container").hide();
$(".lose-container").hide();
$(".oot-container").hide();
$(".gameover-container").hide();


var qNumber = 0;
var corAnsArray = [1, 3, 2, 0, 1, 1, 3, 2, 3, 0];
var correct = 0;
var wrong = 0;
var notAnswered = 0;
var time = 30;

$(document).ready(function () {
    showQuestion();
    startTimer();


    $(".answer").on('click', function () {
        if ($(this).index() === corAnsArray[qNumber]) {
            correct++;
            showWinContainer();
        } else {
            wrong++;
            showLoseContainer();
        }
    });

    $("#restart").on('click', function () {
        $(".win-container").hide();
        $(".lose-container").hide();
        $(".oot-container").hide();
        $(".gameover-container").hide();
        qNumber = 0;
        correct = 0;
        wrong = 0;
        notAnswered = 0;
        showQuestion();
        resetTimer();
    });
});



const showQuestion = function () {
    $("#question").text(qArray[qNumber]);
    $(".ans").each(function (ansIndex) {
        $(this).text(aArray[qNumber][ansIndex]);
    });
    $(".question-container").show();
};

const showNextQuestion = function () {
    qNumber++;
    if (qNumber === 10) {
        stopTimer();
        showGameoverContainer();
    } else {
        resetTimer();
        showQuestion();
    }

}

const showWinContainer = function () {
    $(".img").attr('src', imgArray[qNumber]);
    $(".question-container").hide();
    $(".win-container").show();
    setTimeout(() => $(".win-container").hide(), 1000);
    setTimeout(showNextQuestion, 1000);
};

const showLoseContainer = function () {
    $(".img").attr('src', imgArray[qNumber]);
    $(".corAns").text(aArray[qNumber][corAnsArray[qNumber]]);
    $(".question-container").hide();
    $(".lose-container").show();
    setTimeout(() => $(".lose-container").hide(), 1000);
    setTimeout(showNextQuestion, 1000);
}

const showOotContainer = function () {
    $(".img").attr('src', imgArray[qNumber]);
    $(".corAns").text(aArray[qNumber][corAnsArray[qNumber]]);
    $(".question-container").hide();
    $(".oot-container").show();
    setTimeout(() => $(".oot-container").hide(), 1000);
    setTimeout(showNextQuestion, 1000);
}

const showGameoverContainer = function () {
    $("#correct").text(correct);
    $("#wrong").text(wrong);
    $("#notAnswered").text(notAnswered);
    $(".gameover-container").show();
}


const startTimer = function () {
    interval = setInterval(count, 1000);
};

const resetTimer = function () {
    stopTimer();
    time = 30;
    $("#time").text(30);
    startTimer();
};

const stopTimer = function () {
    clearInterval(interval);
};

const count = function () {
    time--;
    $("#time").text(time);
    if (time === 0) {
        notAnswered++;
        showOotContainer();
    }

};



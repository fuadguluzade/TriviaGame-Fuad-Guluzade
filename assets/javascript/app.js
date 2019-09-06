var qArray = ["Which city is the capital of Russia?",
              "Which city is the capital of Germany?",
              "Which city is the capital of Australia?",
              "Which city is the capital of Thailand?",
              "Which city is the capital of Nigeria?",
              "Which city is the capital of Ecuador?",
              "Which city is the capital of Honduras?",
              "Which city is the capital of Tajikistan?",
              "Which city is the capital of Switzerland?",
              "Which city is the capital of Azerbaijan?",
            ];
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
                "/assets/images/berlin.jpg",
                "./assets/images/canberra.jpg",
                "./assets/images/bangkok.jpeg",
                "./assets/images/abuja.jpeg",
                "./assets/images/quito.jpg",
                "./assets/images/tegucigalpa.jpg",
                "./assets/images/dushanbe.jpg",
                "./assets/images/bern.png",
                "./assets/images/Baku.png"]
var qNumber = 0;
var corAnsArray = [1, 3, 2, 0, 1, 1, 3, 2, 3, 0];
$(".win-container").hide();
$(".lose-container").hide();
$(".oot-container").hide();
var correct = 0;
var wrong = 0;
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
});



const showQuestion = function () {
    $("#question").text(qArray[qNumber]);
    $(".ans").each(function (ansIndex) {
        $(this).text(aArray[qNumber][ansIndex]);
    });
};

const showNextQuestion = function () {
    qNumber++;
    showQuestion();
}

const showWinContainer = function () {
    $(".img").attr('src', imgArray[qNumber]);
    $(".question-container").hide();
    $(".win-container").show();
};

const showLoseContainer = function () {
    $(".img").attr('src', imgArray[qNumber]);
    $("#corAns").text(aArray[qNumber][corAnsArray[qNumber]]);
    $(".question-container").hide();
    $(".lose-container").show();
}


const startTimer = function () {
    interval = setInterval(count, 1000);
};

const resetTimer = function() {
    $("#time").text(30);
};

const stopTimer = function() {
    clearInterval(interval);
};

function count() {
    time--;
    $("#time").text(time);
    if (time === 0)  
        stopTimer();
};



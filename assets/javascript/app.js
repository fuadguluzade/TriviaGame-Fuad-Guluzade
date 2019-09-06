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
var qNumber = 0;
var corAnsArray = [1, 3, 2, 0, 1, 1, 3, 2, 3, 0];


$(document).ready(function () {
    showQuestion();


    $(".answer").on('click', function () {
        if ($(this).index() === corAnsArray[qNumber]) {
            qNumber++;
            showQuestion();
        }
    });
});



const showQuestion = function () {
    $("#question").text(qArray[qNumber]);
    $("h5").children().each(function (ansIndex) {
        $(this).text(aArray[qNumber][ansIndex]);
    });
};



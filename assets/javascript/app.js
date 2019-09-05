var qArray = ["Which city is the capital of Russia?",
              "Which city is the capital of Germany?",
              "Which city is the capital of Azerbaijan?",
              "Which city is the capital of Australia"];
var aArray = [["Kiev", "Moscow", "Minsk", "Belgrad"],
                ["Munich", "Hamburg", "Bonn", "Berlin"],
                ["Baku", "Tbilisi", "Yerevan", "Tehran"],
                ["Melbourne", "Sidney", "Canberra", "Brisbane"]];
var qNumber = 0;
var corAnsArray = [1, 3, 0, 2];


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
    $("#ans").each(function (ansIndex) {
        $(this).text(aArray[qNumber][ansIndex]);
    });
};



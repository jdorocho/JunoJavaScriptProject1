$(document).ready(function(){
    let counter = 0; 
    let scorePercentage = 0;

    $("#goToTitleOne").click(function(){
        $("#intro").hide();
        $("#moduleOneTitle").removeClass("initiallyHidden");
        $("#score").removeClass("initiallyHidden");
    });

    $("#goToQuestionOne").click(function(){
        $("#moduleOneTitle").hide();
        $("#moduleOneQuestion").removeClass("initiallyHidden");
    });

    $(".right").click(function(){
        counter = counter +1;
        $(".counter").text(counter);
    });

    $(".rightOne, .wrongOne").click(function(){
        $("#moduleOneQuestion").hide();
        $("#moduleTwoTitle").removeClass("initiallyHidden");
    });

    $("#goToQuestionTwo").click(function(){
        $("#moduleTwoTitle").hide();
        $("#moduleTwoQuestion").removeClass("initiallyHidden");
    });

    $(".rightTwo, .wrongTwo").click(function(){
        $("#moduleTwoQuestion").hide();
        $("#moduleThreeTitle").removeClass("initiallyHidden");
    });

    $("#goToQuestionThree").click(function(){
        $("#moduleThreeTitle").hide();
        $("#moduleThreeQuestion").removeClass("initiallyHidden");
    });

    $(".rightThree, .wrongThree").click(function(){
        $("#moduleThreeQuestion").hide();
        $("#moduleFourTitle").removeClass("initiallyHidden");
    });

    $("#goToQuestionFour").click(function(){
        $("#moduleFourTitle").hide();
        $("#moduleFourQuestion").removeClass("initiallyHidden");
    });

    $(".rightFour, .wrongFour").click(function(){
        $("#moduleFourQuestion").hide();
        $("#moduleFiveTitle").removeClass("initiallyHidden");
    });

    $("#goToQuestionFive").click(function(){
        $("#moduleFiveTitle").hide();
        $("#moduleFiveQuestion").removeClass("initiallyHidden");
    });

    $(".rightFive, .wrongFive").click(function(){
        $("#moduleFiveQuestion").hide();
        $("#moduleSixTitle").removeClass("initiallyHidden");
    });

    $("#goToQuestionSix").click(function(){
        $("#moduleSixTitle").hide();
        $("#moduleSixQuestion").removeClass("initiallyHidden");
    });

    $(".rightSix, .wrongSix").click(function(){
        $("#moduleSixQuestion").hide();
        $("#moduleSevenTitle").removeClass("initiallyHidden");
    });

    $("#goToQuestionSeven").click(function(){
        $("#moduleSevenTitle").hide();
        $("#moduleSevenQuestion").removeClass("initiallyHidden");
    });

    $(".rightSeven, .wrongSeven").click(function(){
        $("#moduleSevenQuestion").hide();
        $("#moduleEightTitle").removeClass("initiallyHidden");
    });

    $("#goToQuestionEight").click(function(){
        $("#moduleEightTitle").hide();
        $("#moduleEightQuestion").removeClass("initiallyHidden");
    });

    $(".rightEight, .wrongEight").click(function(){
        $("#moduleEightQuestion").hide();
        $("#end").removeClass("initiallyHidden");
        calculatePercentage();
        perfectScore();
    });

    function calculatePercentage() {
        scorePercentage = (counter / 8) * 100;
        $(".scorePercentage").text(scorePercentage);
    };

    function perfectScore() {
        if(counter === 8) {
        $("#perfectScore").removeClass("initiallyHidden");
        };
    };
});
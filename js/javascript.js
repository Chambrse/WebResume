$(document).ready(function () {

    console.log("js loaded");

    // $(".portfolio-item").on("click")
    $("body").on("click", ".itemCover", function (e) {
        console.log($(this).attr("id"));
        window.open($(this).attr("itemLink"), '_blank');
    });

    $(".portfolioButton").on("click", function (e) {
        console.log("clicked");
        console.log($(this).attr("id"));

        let desiredItems = $(this).attr("id");

        if (desiredItems === "all") {
            $(".portfolio-item").show();
        } else {
            $(".portfolio-item").hide();
            $("." + desiredItems).show();
        };

    });

});
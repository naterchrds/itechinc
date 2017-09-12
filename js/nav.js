jQuery(document).ready(function($) {
    $(".open-close").click(function() {
        $("nav").toggle("300", reveal());
        $("span", this).toggleClass("open-icon close-icon")
    });
    var $revealList = $("nav#revealList"),
        $revealOne = $("li#one"),
        $revealTwo = $("li#two"),
        $revealThree = $("li#three"),
        $revealFour = $("li#four"),
        $revealFive = $("li#five"),
        revealNavTl = new TimelineMax({
            paused: true
        });
    revealNavTl.add("goNav", 0).to($revealTwo, .8, {
        autoAlpha: 1,
        x: "-=200",
        ease: Power4.easeOut
    }, "goNav").to($revealThree, .8, {
        autoAlpha: 1,
        x: "-=350",
        ease: Power4.easeOut
    }, "goNav").to($revealFour, .8, {
        autoAlpha: 1,
        x: "-=500",
        ease: Power4.easeOut
    }, "goNav").to($revealFive, .8, {
        autoAlpha: 1,
        x: "-=695",
        ease: Power4.easeOut
    }, "goNav");

    function reveal() {
        revealNavTl.play(0)
    }
    var activeOffset = $("nav ul .active").position().center;
    var activeItemWidth = $("nav ul .active").width();
    $("document").ready(function() {
        $(".dot").css("left", activeOffset + activeItemWidth / 2);
        var bgColor = $(".active a").css("background-color");
        $(".dot").css("background-color", bgColor)
    });
    $("nav").mouseout(function() {
        $(".dot").css("left", activeOffset + activeItemWidth / 2);
        var bgColor = $(".active a").css("background-color");
        $(".dot").css("background-color", bgColor)
    });
    $("nav ul li").hover(function() {
        var navOffset = $(this).position().left;
        var navItemWidth = $(this).width();
        $(".dot").css("left", navOffset + navItemWidth / 2);
        var bgColor = $("a", this).css("background-color");
        $(".dot").css("background-color", bgColor)
    })
});
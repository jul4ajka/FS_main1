$(document).ready(function () {
    $(".dropdown-btn").on("click", function () {
        var dropdown = $(".dropdown-content");
        if ($(".mobile").css("display") == "none") {
            dropdown.fadeToggle();
        } else {
            if (dropdown.css("display") == "none") {
                dropdown.css({ "display": "block" });
                dropdown.animate({ "right": "0" }, 500);
            } else {
                dropdown.animate({ "right": "-350px" }, 500, function () {
                    dropdown.css({ "display": "none" });
                });
            }
        }
    });
    window.onclick = function (event) {
        if (!(event.target.matches('.dropdown-btn')
            || event.target.matches(".heart-icon")
            || event.target.matches(".dropdown-content")
            || event.target.matches(".dropdown-content-share-it")
            || event.target.matches(".dropdown-content-subscribe, .dropdown-content-subscribe h2, .dropdown-content-subscribe p, .dropdown-content-subscribe input, .dropdown-content-subscribe button")
            || event.target.matches(".dropdown-content div, .dropdown-content a")
            || event.target.matches(".share-it-icons"))) {
            var dropdown = $(".dropdown-content");
            if ($(".mobile").css("display") == "none") {
                dropdown.fadeOut();
            } else {
                if (dropdown.css("display") == "block") {
                    dropdown.animate({ "right": "-350px" }, 1000, function () {
                        dropdown.css({ "display": "none" });
                    });
                }
            }
        }
    }
    $(".section-1-text").cycle({
        timeout: 1
    });
    const refreshRate = 1000 / 60;
    var part = "", maxXPositionCoeff;
    if ($(".desktop").css("display") == "none") {
        part = ".mobile";
        maxXPositionCoeff = 2.5;
        var maxXPosition = $(part + " .section-2").width() * maxXPositionCoeff;
        var positionX = [];
        var positionY = [];
        var fi = [];
        var startYPosition = $(part + " .section-2").height() * 0.18;
        var speedX = 0.5;
        var A = $(part + " .bubbles").height() * 0.09;
        var W = (2 * 3.14) / ($(part + " .section-2").width() * 0.98);
        for (var i = 0; i < 8; i++) {
            positionX[i] = -i * maxXPosition / 8;
            positionY[i] = startYPosition;
            fi[i] = Math.random() * 1000;
        }
        $(part + " .bubble").css("left", 0);
        window.setInterval(() => {
            var newPosX, newPosY;
            $(part + ' .bubble').each(function (index) {
                if ($(this).css("display") == "none") {
                    $(this).css("display", "flex");
                }
                newPosX = positionX[index] + speedX;
                if (newPosX > maxXPosition * 0.95) {
                    newPosX = -125;
                    newPosY = startYPosition;
                } else {
                    newPosY = startYPosition + (A * Math.sin(W * positionX[index]) - $(this).width() / 2) + 8 * Math.sin(0.03 * positionX[index] + fi[index]);
                }
                positionX[index] = newPosX;
                $(this).css("transform", "translate(" + positionX[index] + "px, " + newPosY + "px)");
            });
        }, refreshRate);
    } else {
        part = ".desktop";
        maxXPositionCoeff = 1.05;
        var maxXPosition = $(part + " .section-2").width() * maxXPositionCoeff;
        var positionX = [];
        var positionY = [];
        var fi = [];
        var startYPosition = $(part + " .bubbles").position().top + $(part + " .bubbles").height() * 0.5;
        var speedX = 0.5;
        var A = $(part + " .bubbles").height() * 0.2;
        var W = (2 * 3.14) / ($(part + " .section-2").width() * 0.95);
        for (var i = 0; i < 8; i++) {
            positionX[i] = 0 + i * maxXPosition / 8;
            positionY[i] = startYPosition;
            fi[i] = Math.random() * 1000;
        }

        // $(part + " .bubble").css("left", 0);
        window.setInterval(() => {
            var newPosX, newPosY;
            $(part + ' .bubble').each(function (index) {
                if ($(this).css("display") == "none") {
                    $(this).css("display", "flex");
                }
                newPosX = positionX[index] + speedX;
                if (newPosX > maxXPosition * 0.95) {
                    newPosX = -0.5 * ($(".big_bubble").width() + $(".small_bubble").width());
                    newPosY = startYPosition;
                } else {
                    newPosY = startYPosition + (A * Math.sin(W * positionX[index]) - $(this).width() / 2) + 15 * Math.sin(0.02 * positionX[index] + fi[index]);
                }
                positionX[index] = newPosX;
                
                $(this).css("transform", "translate(" + positionX[index] + "px, " + newPosY + "px)", "overflow-x", "hidden");
            });
          
        }, refreshRate);
    }

    var board_words = ["innovative", "effective", "comfortable", "worthy", "fun", "", "", "", ""];
    var iteration = 0;
    $(".board-text").fadeOut(400, function () {
        $(this).html(board_words[iteration]);
        $(this).fadeIn(400);
    })
    window.setInterval(() => {
        $(".board-text").fadeOut(400, function () {
            $(this).html(board_words[iteration]);
            $(this).fadeIn(400);
        })
        iteration++;
        if (iteration == board_words.length) {
            iteration = 0;
        }
    }, 1666.66666);
    $(".slides").slick({
        dots: true,
        centerPadding: "50px",
        arrows: true,
        prevArrow: $(".slider-prev-btn"),
        nextArrow: $(".slider-next-btn")
    });
    $('.video').parent().click(function () {
        if ($(this).children(".video").get(0).paused) {
            $(this).children(".video").get(0).play();
            $(this).children(".playpause").fadeOut();
        } else {
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });
    $(".slickPrev").slick({
        // loop: true,
        // dots: true,
        // items: 3,
        // autoplay: true,
        // autoplayTimeout: 4000,
        // autoplayHoverPause: true,
        // autoplayHoverPause: true,
        // animateOut: 'slideOutUp',
        // animateIn: 'slideInUp',
        // transitionStyle : "fade"
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        adaptiveHeight: true
    });

    // objectFitVideos(document.querySelectorAll('.videos'));

    setInterval(function () {
        $(".slickPrev").slick("slickPrev");
    }, 2000);
    // window.setInterval(function(){$('button').trigger('click');}, 1000);


    
    var bubblecount, topPos, randomMax, posName, maxLeft;
    if ($(".desktop").css("display") == "none") {
        
        $.each($(".bubbles-right"), function () {
            var bubblecount = ($(this).width() / 100) * 5;
            for (var i = 0; i <= bubblecount; i++) {
                var size = ((Math.random() * 40 + 40) / 4);
                $(this).append('<span class="particle-r" style="top:' + (Math.random() * 30 + 65) + '%; left:' + (Math.random() * 50 + 20) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
            }
        });
        $.each($(".bubbles-left"), function () {
            var bubblecount = ($(this).width() / 100) * 5;
            for (var i = 0; i <= bubblecount; i++) {
                var size = ((Math.random() * 40 + 40) / 4);
                $(this).append('<span class="particle-l" style="top:' + (Math.random() * 30 + 65) + '%; left:' + (Math.random() * 50 + 20) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
            }
        });
        $.each($(".board-bubbles-right"), function () {
            var bubblecount = 5;
            for (var i = 0; i <= bubblecount; i++) {
                var size = ((Math.random() * 40 + 40) / 2);
                $(this).append('<span class="particle-ll" style="top:' + (Math.random() * 30 + 70) + '%; left:' + (Math.random() * 30 - 40) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
            }
        });
        $.each($(".board-bubbles-left"), function () {
            var bubblecount = ($(this).width() / 100) / 2;
            for (var i = 0; i <= bubblecount; i++) {
                var size = ((Math.random() * 40 + 40) / 2);
                $(this).append('<span class="particle-rr" style="top:' + (Math.random() * 30 + 70) + '%; left:' + (Math.random() * 30 + 100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
            }
        });

        bubblecount = ($(".section-1").width() / 10);
        topPos = 12;
        randomMax = 70;
        maxLeft = 80;
        posName = "vh";
        
    } else {
        $.each($(".bubbles-left"), function () {
                var bubblecount = ($(this).width() / 100) * 5;
                for (var i = 0; i <= bubblecount; i++) {
                    var size = ((Math.random() * 40 + 40) / 4);
                    $(this).append('<span class="particle-l" style="top:' + (Math.random() * 30 + 65) + '%; left:' + (Math.random() * 50 + 20) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
                }
            });
            $.each($(".board-bubbles-right"), function () {
                var bubblecount = 5;
                for (var i = 0; i <= bubblecount; i++) {
                    var size = ((Math.random() * 40 + 40) / 2);
                    $(this).append('<span class="particle-ll" style="top:' + (Math.random() * 30 + 70) + '%; left:' + (Math.random() * 30 - 40) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
                }
            });
            $.each($(".board-bubbles-left"), function () {
                var bubblecount = ($(this).width() / 100) / 2;
                for (var i = 0; i <= bubblecount; i++) {
                    var size = ((Math.random() * 40 + 40) / 2);
                    $(this).append('<span class="particle-rr" style="top:' + (Math.random() * 30 + 70) + '%; left:' + (Math.random() * 30 + 100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
                }
            });

        bubblecount = ($(".section-1").width() / 100) / 1.3;
        topPos = 12;
        randomMax = 90;
        maxLeft = 100;
        posName = "vh";
        
    }
    for (var i = 0; i <= bubblecount; i++) {
        var sizeBlue = ((Math.random() * randomMax + 20) / 4);
        var sizeGreen = ((Math.random() * randomMax + 20) / 4);
        $(".section-1").append('<span class="particle-blue" style="top:' + (Math.random() * randomMax + topPos) + posName + '; left:' + (Math.random() * maxLeft) + '%;width:' + sizeBlue + 'px; height:' + sizeBlue + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
        $(".section-1").append('<span class="particle-green" style="top:' + (Math.random() * randomMax + topPos) + posName + '; left:' + (Math.random() * maxLeft) + '%;width:' + sizeGreen + 'px; height:' + sizeGreen + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
    }

//table

    // setTimeout(function(){
    //     $('.change-img').addClass('display-1');
    // }, 17960);

    // setInterval(function(){
    //     setTimeout(function(){
    //         $('.change-img').addClass('display-1');
    //     }, 17960)
    //     $('.change-img').removeClass('display-1');
    // },18000);


    // setTimeout(function(){
    //     $('.change-img1').addClass('display-2');
    // }, 17950);

    // setInterval(function(){
    //     setTimeout(function(){
    //         $('.change-img1').addClass('display-2');
    //     }, 17950)
    //     $('.change-img1').removeClass('display-2');
    // },18000);

    
 //animation active when we scroll for mobile
 
 $('.change-img').waypoint(function() {
    $('.change-img').css({
    animation: "blinker 16s",
    animationFillMode: "both"
    });
    }, { offset: '75%' });

  //animation active when we scroll for desctop

$('.change-img1').waypoint(function() {
    $('.change-img1').css({
    animation: "blinker 16s",
    animationFillMode: "both"
    });
    }, { offset: '75%' });
  
// Menu configurations
    // var spoilers = $(".spoiler");
    // spoilers.each(function () {
    //     var spoiler = $(this);
    //     spoiler.find(".spoiler-expand-btn").click(function () {
    //         if ($(this).hasClass("spoiler-open-btn")) {
    //             $(this).removeClass("spoiler-open-btn").addClass("spoiler-close-btn");
    //             spoiler.find(".spoiler-body").slideUp(1000);
    //         } else {
    //             $(this).removeClass("spoiler-close-btn").addClass("spoiler-open-btn");
    //             spoiler.find(".spoiler-body").slideDown(1000);
    //         }
    //     });
    // });

// New menu configurations

var spoilers = $(".spoiler");
    spoilers.each(function () {
        var spoiler = $(this);
            spoiler.find(".menu-click").click(function () {
             spoiler.find(".spoiler-body").slideDown(1000);
             spoiler.find(".menu-click").slideUp(1000);
        });
    });

    spoilers.each(function(){
        var spoiler = $(this);
        spoiler.find(".menu-click-close").click(function() {
            spoiler.find(".spoiler-body").slideUp(1000);
             spoiler.find(".menu-click").slideDown(1000);
        })
    });
    

    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        if ($(".menu").css("display") == "none") {
            $(".menu").css({ "display": "flex" });
            $("body").css({ "overflow": "hidden" });
        } else {
            $(".menu").css({ "display": "none" });
            $("body").css({ "overflow": "auto" });

        }
    });

    $(".menu-item-science").click(function(){
        $(this).find("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
        $(".menu-science-subitems").fadeToggle();
    });

    $(".menu-item-science-mobile").click(function(e){
        e.preventDefault();
        $(this).find("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
        $(".menu-science-subitems-mobile").fadeToggle();
    });
      
});



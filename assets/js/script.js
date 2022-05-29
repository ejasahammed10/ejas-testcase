$(document).ready(function() {
 
    $(".beinex-footer__head").click(function() {
        $(".beinex-footer__head").not(this).siblings().removeClass("active");
        $(this).siblings().toggleClass("active");
        
    })
    $(".beinex-footer__head").click(function() {
        if (!$(this).hasClass("show")) {
            $(".beinex-footer__head").removeClass("show");
        }
        $(this).toggleClass("show");
        
    });
});



$(window).on("scroll", function() {
    if ($(window).scrollTop() > 132) {
        $(".beinex-header").addClass("sticky");
        $("body").addClass("sticky-soomth");
    } else {
        $(".beinex-header").removeClass("sticky");
        $("body").removeClass("sticky-soomth");
    }
});
$(".beinex-header__fade").click(function() {
    $(".beinex-header__navbar .navbar-collapse").removeClass("show");
    $("body").removeClass("overflow");
});
$(".navbar-toggler").click(function() {
    $("body").addClass("overflow");
});
$(".beinex-header__close").click(function() {
    $("body").removeClass("overflow");
});

var $bannerStatus = $('.beinex-slider__counter');
var $bannerItem = $('.beinex-slider__outer');

$bannerItem.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    if (!slick.$dots) {
        return;
    }

    var i = (currentSlide ? currentSlide : 0) + 1;
    $bannerStatus.html("<span class='beinex-slider__counter-num'>0" + i + "</span>&nbsp;&nbsp;/&nbsp;&nbsp;0" + (slick.$dots[0].children.length));

});

// $(".beinex-slider__outer").on("init reInit afterChange", function(event, slick) {
//     $(".news__counter").html(
//         slick.slickCurrentSlide() + 1 + "/" + slick.slideCount
//     );
// });

// cruise slider seting
$(".beinex-slider__outer").slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    slide: ".beinex-slider__sec",
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 1
        }
    }, {
        breakpoint: 567,
        settings: {
            slidesToShow: 1
        }
    }, ]
});

const submit=document.getElementById("submit");
submit.addEventListener('click',validate);

function validate() {
    var number = document.getElementById("number");
    var email = document.getElementById("email");  
    let emailDomain = email.value.includes("@beinex.com");
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(re.test(email.value)) || email.value == "" || email.value == null || (emailDomain == false)) {
        email.classList.add("error");
    }
    else{
        email.classList.remove("error");
    }
    
    if((number.value =='') || (number.value.length <10)){
        number.classList.add("error");
    }
    else{
        number.classList.remove("error");
    }
}




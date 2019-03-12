// facebook, twitter 공유하기
$(".facebook").click(function (e) {
    e.preventDefault();
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) +
        '&t=' + encodeURIComponent(document.title), 'facebooksharedialog',
        'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
});
$(".twitter").click(function (e) {
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' + encodeURIComponent(
            document.URL) + '%20-%20' + encodeURIComponent(document.title), 'twittersharedialog',
        'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
});

// nav
$(".s-title-text button").click(function (e) {
    e.preventDefault();
    $(".nav").slideToggle();
    $(".s-title-text button").toggleClass("open");

    if ($(".s-title-text button").hasClass("open")) {
        $(".s-title-text button").find(">i").attr("class", "fa fa-angle-up");
    } else {
        $(".s-title-text button").find(">i").attr("class", "fa fa-angle-down");
    }
});
$(window).resize(function () {
    var w_width = $(window).width();
    if (w_width > 600) {
        $('.nav').removeAttr('style');
    }
});

// carousel slider
$('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            autoplay: false,
        }
    }]
});

// lightgallery
$('.gallery').lightGallery();
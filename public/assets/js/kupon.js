$(document).ready(function() {
    "use strict";
    $(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 300,
        outDuration: 300,
        linkElement: ".animsition-link",
        loading: !0,
        loadingParentElement: "body",
        loadingClass: "animsition-loading",
        unSupportCss: ["animation-duration", "-webkit-animation-duration", "-o-animation-duration"],
        overlay: !1,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "body"
    })
    ,
    // $(".main-slider").owlCarousel({
    //     items: 1,
    //     loop: !1,
    //     center: !0,
    //     margin: 10,
    //     autoplayHoverPause: !0,
    //     dots: !1,
    //     nav: !1
    // }),
    $('[data-toggle="tooltip"]').tooltip(),
    $().button("toggle"),
    $(".bg-image").css("background", function() {
        var a = "url(" + $(this).data("image-src") + ") no-repeat center center";
        return a
    }),
    $(".bg-image").css("background-size", "cover"),
    $(".navbar-toggle").on("click", function(a) {
        $(this).toggleClass("open"),
        $("#navigation").slideToggle(400)
    }),
    $(".navigation-menu>li").slice(-1).addClass("last-elements"),
    $('.navigation-menu li.has-submenu a[href="#"]').on("click", function(a) {
        $(window).width() < 987 && (a.preventDefault(),
        $(this).parent("li").toggleClass("open").find(".submenu:first").toggleClass("open"))
    }),
    $(function() {
        var header = $(".header");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 80) {
                header.addClass("shadow")
            } else {
                header.removeClass("shadow")
            }
        })
    })
})

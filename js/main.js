import { CountUp } from "./countUp.min.js";

$(() => {

    $('.hero').addClass('ready');


  $(".product-carousel").owlCarousel({
    items: 1,
    margin: 10,
    autoHeight: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    center: true,
    autoplayHoverPause: true,
    navText: [
      "<img src='assets/arrow-down-angle-1.svg'>",
      "<img src='assets/arrow-down-angle.svg'>"
    ],
    responsive:{
      0:{
        items: 1,
        margin:10,
        nav:false

      },
      992:{
        items:1
      }
    }
  });
  $(".team-carousel").owlCarousel({
    margin: 80,
    autoHeight: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    center: true,
    autoplayHoverPause: true,
    navText: [
      "<img src='assets/arrow-down-angle-1.svg'>",
      "<img src='assets/arrow-down-angle.svg'>"
    ],
    responsive:{
      0:{
        items: 1,
        margin:10,
        nav:false

      },
      992:{
        items:3
      }
    }
  });

  $("#menu-toggle").on("click", function(e) {
    e.preventDefault();
    $('header nav').slideToggle(500);
  });

  $(".nav-item a").on("click", function(e) {
    e.preventDefault();
    let target = $(this).attr("href");
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#" + target).offset().top - 30 }, 800);
  });
  let headerTop = $("header").offset().top;
  let countUp1 = new CountUp("countUp1", 99);
  let countUp2 = new CountUp("countUp2", 56);

  $(window).on("scroll", () => {
    let wTop = $(window).scrollTop();
    parseInt(wTop) > parseInt(headerTop)
      ? $("header").addClass("sticky")
      : $("header").removeClass("sticky");

    $.each($("section"), function() {
      if (wTop + 80 > $(this).offset().top) {
        $(".nav-link").removeClass("active");
        $('.nav-link[href="' + $(this).attr("id") + '"]').addClass("active");
      }
    });

    if (wTop + $(window).innerHeight() * 0.6 > $(".problem-1 .container").offset().top) {
      if (!$(".problem-1").hasClass("counted")) {
        setTimeout(() => {
          countUp1.start();
        $(".problem-1").addClass("counted");
        }, 300);
      }
    }

    if (wTop + $(window).innerHeight() * 0.6 > $(".problem-2 .container").offset().top) {
      if (!$(".problem-2").hasClass("counted")) {
      setTimeout(() => {
        countUp2.start();
        $(".problem-2").addClass("counted");
      }, 300);
      }
    }
    
  });

  let waypoints = $(".time-line-row").waypoint(
    function(direction) {
      $(".time-line-row").removeClass("active");
      $(this[(0, "element")]).addClass("active");
    },
    {
      offset: "60%"
    }
  );
  let waypoints2 = $(".market-map").waypoint(
    function(direction) {
      $(this[(0, "element")]).addClass("init");
    },
    {
      offset: "60%"
    }
  );

  let yzAnimate = $(".yz-animate").waypoint(
    function(direction) {
      $(this[(0, "element")]).addClass("init");
    },
    {
      offset: "60%"
    }
  );
});

import { CountUp } from "./countUp.min.js";

$(() => {
  $(".product-carousel").owlCarousel({
    items:1,
    margin:10,
    autoHeight:true,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    nav:true,
    center: true,
    autoplayHoverPause:true,
    navText: ["<img src='assets/arrow-down-angle-1.svg'>","<img src='assets/arrow-down-angle.svg'>"]
  });
  $(".team-carousel").owlCarousel({
    items:3,
    margin:80,
    autoHeight:true,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    nav:true,
    center: true,
    autoplayHoverPause:true,
    navText: ["<img src='assets/arrow-down-angle-1.svg'>","<img src='assets/arrow-down-angle.svg'>"]
  });

  $('.nav-item a').on('click',function(e){
    e.preventDefault();
    let target = $(this).attr('href');
    $('html,body').stop().animate({scrollTop:$('#'+target).offset().top - 30}, 800);
  });
  let headerTop = $("header").offset().top;


  $(window).on("scroll", () => {
    let wTop = $(window).scrollTop();
    parseInt(wTop) > parseInt(headerTop)
      ? $("header").addClass("sticky")
      : $("header").removeClass("sticky");

    if (wTop + $(window).innerHeight() * 0.5 > $(".problem").offset().top) {
      countTo('targetId',99,0);
    }
    $.each($('section'),function(){
      if (wTop + 80 > $(this).offset().top) {
        $('.nav-link').removeClass('active');
        $('.nav-link[href="'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });

  let waypoints = $('.time-line-row').waypoint(function(direction) {
    $('.time-line-row').removeClass('active');
    $(this[0,'element']).addClass('active');
  }, {
    offset: '60%'
  });
  let waypoints2 = $('.market-map').waypoint(function(direction) {
    $(this[0,'element']).addClass('init');
  }, {
    offset: '60%'
  });



  const countTo = (element,to,delay)=>{
    setTimeout(() => {
    let countUp = new CountUp(element, to);

      countUp.start();
    }, delay);
  }
});

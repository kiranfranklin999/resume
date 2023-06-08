$('#card-1').deAnimate({
    trigger: 'click',
    classIn: 'flipInX',
    parallel: false
  });

$(document).ready(function() {
    $('.slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: $('.slider-nav .prev'),
      nextArrow: $('.slider-nav .next')
    });
  });

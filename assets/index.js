

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.3,
    // spaceBetween: 80,
    centeredSlides: true,
  
    pagination: {
        el: "#dotsSlides",
        clickable: true,

    },
});

var count = 1;
var total = 5 ;
var show = $('#totalSlides');       
show.text(count + '/' + total);
$('.swiper-pagination-bullet').mouseenter(function() {
    var index = $(this).index() + 1;
    $('#totalSlides').html(index + '/' + total);
});


/**------------------------------ */

var swiper2 = new Swiper(".Swiper", {
    slidesPerView: 2.3,
    // spaceBetween: 39,
    centeredSlides: true,
    pagination: {
        el: "#dotsSlides2",
        clickable: true,

    },
});

var count2 = 1;
var total2 = 5 ;
var show = $('#totalSlides2');       
show.text(count2 + '/' + total2);

$('.swiper-pagination-bullet').mouseleave(function() {
    var index2 = $(this).index() + 1;
    $('#totalSlides2').html(index2 + '/' + total2);
});

var nav = document.querySelector(".container");
var view = document.getElementById('view');
const myNavHeight = nav.getBoundingClientRect().height;
const openingHeight = (view.getBoundingClientRect().height * 0.95);
console.log(openingHeight);
console.log(view.getBoundingClientRect());

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= myNavHeight && document.body.scrollTop < openingHeight || document.documentElement.scrollTop >= myNavHeight && document.documentElement.scrollTop < openingHeight) {
    nav.classList.add("active-header");
  } else if (document.body.scrollTop >= openingHeight || document.documentElement.scrollTop >= openingHeight) {
    nav.classList.add("active-main");
  } else {
    nav.classList.remove("active-header");
    nav.classList.remove("active-main");
  } 
};

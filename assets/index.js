// section4 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 80,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
});

var count = 1;
var total = 5;
var show = $('.count__number1');
show.text(count + '/' + total);
$('.swiper-pagination-bullet').mouseenter(function() {
    var index = $(this).index() + 1;
    $('.count__number1').html(index +'/' + total);
});


//section 5
var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 39,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var count = 1;
var total = 5;
var show = $('.count__number2');
show.text(count + '/' + total);
$('.swiper-pagination-bullet').mouseenter(function() {
    var index = $(this).index() + 1;
    $('.count__number2').html(index + '/' + total);
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




function openNav() {
  document.getElementById("myMenu").style.width = "80%";
}

function closeNav() {
  document.getElementById("myMenu").style.width = "0";
}
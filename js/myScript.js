$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 754);
});

$("#slides").superslides({
  animation: "fade",
  play: 3000,
  pagination: false,
});

var typed = new Typed(".typed", {
  strings: ["Harsh Navani"],
  typeSpeed: 100,
  loop: false,
  startDelay: 1000,
  showCursor: false,
});

var typed1 = new Typed(".typed1", {
    stringsElement: '#typed-strings',
    typeSpeed: 60,
    loop: true
});

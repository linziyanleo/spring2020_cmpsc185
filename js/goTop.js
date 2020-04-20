// Inspired by https://www.cnblogs.com/polk6/p/5051935.html#Menu4-Body
goTop = document.getElementById("goTop");
var body = (document.compatMode && document.compatMode == 'CSS1Compat') ? document.documentElement : document.body;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > body.offsetHeight/4  || document.documentElement.scrollTop > body.offsetHeight/4) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
}

function to_topFunction() {
  window .scrollTo(0,0);
}
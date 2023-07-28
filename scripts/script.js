
window.addEventListener("scroll", function() {
  var elementTarget = document.getElementById("characters");
  document.getElementById('bonds-banner').classList.toggle( "fixed-hidden",
    (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) )
});

function scrollToSection(target){
  document.getElementById( target ).scrollIntoView({ behavior: 'smooth' });
};

// Masonry gallery layout

var $gallery = $('.gallery').masonry({
  itemSelector: '.gallery-item',
  columnWidth: '.gallery-item',
  percentPosition: true,
  fitWidth: true,
  transitionDuration: 0,
  gutter: 4
});

$gallery.imagesLoaded().progress( function() {
  $gallery.masonry('layout');
});

// Viewer

new VenoBox({
  selector: '.view-item',
  spinner: 'wander'
});
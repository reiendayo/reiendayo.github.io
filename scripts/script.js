
window.addEventListener("scroll", function() {
  var elementTarget = document.getElementById("characters");
  document.getElementById('bonds-banner').classList.toggle( "fixed-hidden",
    (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) )
});

function scrollToSection(target){
  document.getElementById( target ).scrollIntoView({ behavior: 'smooth' });
};


// Masonry gallery layout

var masonry_init = false;

function initMasonry(){
  if (
    $('.gallery').masonry &&
    $('.gallery').imagesLoaded() &&
    !masonry_init){
    console.log('masonry loaded');

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

    masonry_init = true;
  } else { console.log('masonry init failed'); }
};

// initMasonry();


// Lightbox

var lightbox_init = false;

function initLightbox(){
  if (
    typeof VenoBox === 'function'
    && !lightbox_init){

    console.log('lightbox loaded');

    new VenoBox({
      selector: '.view-item',
      spinner: 'wander'
    });

    lightbox_init = true;
  } else { console.log('lightbox init failed : ', typeof VenoBox); }
};

// initLightbox();


document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log('document loaded');
    initMasonry();
    initLightbox();
  }
};
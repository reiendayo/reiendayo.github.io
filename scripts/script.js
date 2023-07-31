
window.addEventListener("scroll", function() {
  var elementTarget = document.getElementById("characters");
  document.getElementById('bonds-banner').classList.toggle( "fixed-hidden",
    (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) )
});

function scrollToSection(target){
  document.getElementById( target ).scrollIntoView({ behavior: 'smooth' });
};


// const itm_conceptart = [
//   "https://cdn.jsdelivr.net/gh/reiendayo/reiendayo.github.io@img/arts/concept-art/human_light_warrior_001.webp",
//   "https://cdn.jsdelivr.net/gh/reiendayo/reiendayo.github.io@img/arts/concept-art/jeddstral_001.webp",
//   "https://cdn.jsdelivr.net/gh/reiendayo/reiendayo.github.io@img/arts/concept-art/ill1_001.webp",
//   "https://cdn.jsdelivr.net/gh/reiendayo/reiendayo.github.io@img/arts/concept-art/revamp_skilltree_001.webp",
//   "https://cdn.jsdelivr.net/gh/reiendayo/reiendayo.github.io@img/arts/concept-art/hop_ye_001.webp",
//   "https://cdn.jsdelivr.net/gh/reiendayo/reiendayo.github.io@img/arts/concept-art/dukkura_001.webp"
//   ]

// function fill_img(section_id,arr_img,a_data_gall,img_alt="") {
// var container = document.getElementById(section_id).firstChild;
// for (const a of arr_img) {
//   var a_e = document.createElement('a');
//   a.href = a;
//   a.class = 'view-item';
//   a.setAttribute('data-gall',a_data_gall);

//   var img_e = document.createElement('img');
//   img_e.alt = img_alt;
//   img_e.class = 'gallery-item';
//   img_e.src = a;
//   img_e.loading = 'lazy';

//   a_e.appendChild(img_e);
//   container.appendChild(a_e)
// }
// };



// Masonry gallery layout

// var masonry_init = false;

// function initMasonry(){
//   if (
//     $('.gallery').masonry &&
//     $('.gallery').imagesLoaded() &&
//     !masonry_init){
//     console.log('masonry loaded');


var masonry_options = {
  itemSelector: '.gallery-item',
  columnWidth: '.gallery-item',
  percentPosition: true,
  fitWidth: true,
  transitionDuration: 0,
  gutter: 4
};

// console.log(typeof masonry_options);

var $g_conceptart = $('.g-conceptart').masonry(masonry_options);
$g_conceptart.imagesLoaded().progress( function() {
  $g_conceptart.masonry('layout'); });

var $g_1 = $('.g-1').masonry(masonry_options);
$g_1.imagesLoaded().progress( function() {
  $g_1.masonry('layout'); });

var $g_2 = $('.g-2').masonry(masonry_options);
$g_2.imagesLoaded().progress( function() {
  $g_2.masonry('layout'); });

var $g_0 = $('.g-0').masonry(masonry_options);
$g_0.imagesLoaded().progress( function() {
  $g_0.masonry('layout'); });

var $g_comm = $('.g-comm').masonry(masonry_options);
$g_comm.imagesLoaded().progress( function() {
  $g_comm.masonry('layout'); });


//     masonry_init = true;
//   } else { console.log('masonry init failed'); }
// };

// initMasonry();


// Lightbox

// var lightbox_init = false;

// function initLightbox(){
//   if (
//     typeof VenoBox === 'function'
//     && !lightbox_init){
//     console.log('lightbox loaded');

new VenoBox({
  selector: '.view-item',
  spinner: 'wander'
});

//     lightbox_init = true;
//   } else { console.log('lightbox init failed : ', typeof VenoBox); }
// };

// initLightbox();


// document.onreadystatechange = () => {
//   if (document.readyState === 'complete') {
//     console.log('document loaded');
//     initMasonry();
//     initLightbox();
//   }
// };
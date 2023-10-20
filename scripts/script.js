
const top_btn = document.getElementById("back-to-top");
const content_border = document.getElementById("content-border");

window.addEventListener("scroll", function() {
  top_btn.classList.toggle("sticky-visible",
    (window.scrollY > (content_border.offsetTop + content_border.offsetHeight)))
});

var masonry_options = {
  itemSelector: '.gallery-item',
  columnWidth: '.gallery-item',
  percentPosition: true,
  fitWidth: true,
  transitionDuration: 0,
  gutter: 4
};

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

new VenoBox({
  selector: '.view-item',
  spinner: 'wander'
});

document.addEventListener('DOMContentLoaded', function () {
   var elems = document.querySelectorAll('.materialboxed');
   var instances = M.Materialbox.init(elems);
});

$(document).ready(function () {
   $('.showcase a').simpleLightbox();

   $('#name').on('keydown',function() {
      console.log('lool')
      $('#subject').val('Tenho interesse! - ' + $(this).val())
   });

   $('.cool-carousel').on('init', function (event, slick) {
      $(slick['$slides'][0]).find('img').addClass('active');
   }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      if (currentSlide == nextSlide) return;
      $(this).find('.slick-slide[data-slick-index="' + currentSlide + '"] img').removeClass('active')
   }).on('afterChange', function (event, slick, currentSlide) {
      $(this).find('.slick-slide[data-slick-index="' + currentSlide + '"] img').addClass('active');
   });

   $('.cool-carousel').slick({
      centerMode: true,
      dots: true,
      focusOnSelect: true,
      variableWidth: true,
   });

   $('.cool-carousel').slickLightbox({
      src: 'src',
      itemSelector: '.item img',
      shouldOpen: function (slick, slide) {
         return slide.hasClass('active')
      }
   });
});

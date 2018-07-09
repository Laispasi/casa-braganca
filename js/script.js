document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();

      var id = this.getAttribute('href');

      document.querySelector(id).scrollIntoView({
         behavior: 'smooth'
      });

      $(id).removeClass('focused').addClass('focused');
      setTimeout(() => {
         $(id).removeClass('focused');
      }, 2000);

   });
});

document.addEventListener('DOMContentLoaded', function () {
   var elems = document.querySelectorAll('.materialboxed');
   var instances = M.Materialbox.init(elems);
});

$(document).ready(function () {
   $('.showcase a').simpleLightbox();

   $('#name').on('keyup change',function() {
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

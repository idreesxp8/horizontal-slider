jQuery(document).ready(function($) {
  var $masthead = $('#horizontal-slider');
  var mastheadWidth = 0;

  // Function to get the width of the masthead
  function getMastheadWidth() {
    mastheadWidth = $masthead.get(0).scrollWidth;
  }
  getMastheadWidth();

  // Event listener to refresh the masthead width when ScrollTrigger refreshes
  ScrollTrigger.addEventListener('refreshInit', getMastheadWidth);

  function updateProxy() {
    // Move the handler to the corresponding ratio according to the page's scroll position.
    if (mastheadScrollTrigger) {
      gsap.set(proxy, { x: -mastheadScrollTrigger.scroll(), overwrite: 'auto' });
    }
  }

  // Create a ScrollTrigger to animate the horizontal slider
  var mastheadScrollTrigger = ScrollTrigger.create({
    id: 'horizontal-slider',
    animation: gsap.to('#horizontal-slider', {
      x: function() {
        return -(mastheadWidth - window.innerWidth);
      },
      ease: 'none',
    }),
    trigger: '#horizontal-slider',
    end: function() {
      return mastheadWidth;
    },
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  });

  // Create a proxy element for Dragging
  var proxy = document.createElement('div');
  var draggable = Draggable.create("#horizontal-slider", {
    type: 'x',
    bounds:"body",
    inertia: true,
    throwProps: true,
  })[0];




  // Event listener to update the proxy element when scrolling with the mouse wheel
  window.addEventListener('wheel', updateProxy);

  // Next and Back Buttons functionality
  $('.slider-next-arrow').click(function(e) {
    e.preventDefault();
    mastheadScrollTrigger.scroll(mastheadScrollTrigger.scroll() + 400); // Adjust the scroll amount as per your requirement
  });

  $('.slider-prev-arrow').click(function(e) {
    e.preventDefault();
    mastheadScrollTrigger.scroll(mastheadScrollTrigger.scroll() - 400); // Adjust the scroll amount as per your requirement
  });
});

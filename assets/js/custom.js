jQuery(document).ready(function($) {
  var $masthead = $('#horizontal-slider');
  var mastheadWidth = 0;

  function getMastheadWidth() {
    mastheadWidth = $masthead.get(0).scrollWidth;
  }
  getMastheadWidth();
  ScrollTrigger.addEventListener('refreshInit', getMastheadWidth);

  function updateProxy() {
    // move the handler to the corresponding ratio according to the page's scroll position.
    if (mastheadScrollTrigger) {
      gsap.set(proxy, { x: -mastheadScrollTrigger.scroll(), overwrite: 'auto' });
    }
  }

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

  var proxy = document.createElement('div');
  var draggable = Draggable.create(proxy, {
    trigger: '#horizontal-slider',
    type: 'x',
    inertia: true,
    throwProps: true,
    onThrowUpdate: function() {
      mastheadScrollTrigger.scroll(-this.x);
    },
    onDrag: function() {
      mastheadScrollTrigger.scroll(-this.x);
    },
  })[0];

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

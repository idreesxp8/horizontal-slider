var win_width = window.screen.width;
var win_height = window.screen.height;

$(window).resize(function () {
  win_width = window.screen.width;
  win_height = window.screen.height;
});

gsap.registerPlugin(ScrollTrigger);

/* 
	START
	Desc: This module will control the "we help you achieve success" animation  
	Author: Digital Poin8
*/

// START: Custom scrollbars section
gsap.set(".we-help-wrap-2", { autoAlpha: 0, display: "none" });

ScrollTrigger.create({
  trigger: "#main-section",
  start: "top top",
  pin: true,
  pinSpacing: false,
});

const tlBlue = gsap.timeline({
  scrollTrigger: {
    trigger: ".light-bg-section",
    scrub: true,
    pin: true,
    pinSpacing: true,
    start: "top top",
    end: "+=100%",
  },
});

tlBlue
  .to("#line-progress-bar1", {
    width: "100%",
    transformOrigin: "left center",
    ease: "none",
  })
  .to("#line-progress-bar1", {
    width: "0%",
    transformOrigin: "left center",
    ease: "none",
  });

const tlGreen = gsap.timeline({
  scrollTrigger: {
    trigger: ".light-bg-section",
    scrub: true,
    pin: true,
    pinSpacing: true,
    start: "top top",
    end: "+=100%",
  },
});

tlGreen
  .to("#line-progress-bar2", {
    width: "0%",
    transformOrigin: "left center",
    ease: "none",
  })
  .to("#line-progress-bar3", {
    width: "100%",
    transformOrigin: "left center",
    ease: "none",
  });
// END: Custom scrollbars section

// START: Text section animation
const tlText = gsap.timeline({
  scrollTrigger: {
    trigger: ".light-bg-section",
    scrub: true,
    pin: true,
    pinSpacing: true,
    start: "top top",
    end: "+=100%",
  },
});

tlText
  .to(".we-help-wrap-1", {
    y: -50,
    duration: 1,
    zIndex: 1000,
    autoAlpha: 0,
    ease: "none",
  })
  .to(".we-help-wrap-2", {
    y: -200,
    duration: 1,
    autoAlpha: 1,
    display: "block",
    ease: "none",
  });
// END: Text section animation

// START: Text section animation

gsap.set("#hm-we-help-section", { backgroundSize: "45%" });

const tlPhoto = gsap.timeline({
  scrollTrigger: {
    trigger: ".light-bg-section",
    scrub: true,
    pin: true,
    pinSpacing: true,
    start: "top top",
    end: "+=100%",
  },
});

tlPhoto
  .to("#hm-we-help-section", {
    duration: 1,
    backgroundSize: "50%",
    ease: "none",
  })
  .to("#hm-we-help-section", {
    duration: 1,
    backgroundSize: "55%",
    ease: "none",
  });
// END: Text section animation

/* 
	END
	Desc: This module will control the "we help you achieve success" animation  
	Author: Digital Poin8
*/

/* START: because change start with you */
gsap.set("#fetch_change_starts_with_container_fluid", { y: 0 });
gsap.set("#fetch_because_change_starts_heading", { y: 115 });

gsap.to("#fetch_change_starts_with_container_fluid", {
  duration: 1,
  y: 106,
  scale: 0.8,
  force3D: true,
  scrollTrigger: {
    trigger: "#fetch_change_starts_with_section",
    start: "top top",
    scrub: true,
    pin: true
  },
});

gsap.to("#fetch_because_change_starts_heading", {
  opacity: 1,
  force3D: true,
  scrollTrigger: {
    trigger: "#fetch_change_starts_with_section",
    start: "top top",
    pin: true,
    scrub: true
  },
});

/* END: because change start with you */

if (win_width >= 1200) {
  /* Unlock rewards and discover offers section starts */
  gsap.set("#fetch_unlock_rewards_offers_img", { y: 100 });

  gsap.to("#fetch_unlock_rewards_offers_img", {
    opacity: 1,
    y: -50,
    scrollTrigger: {
      trigger: ".reward-unlock-sec",
      start: "top +200",
      end: "top -200",
      toggleActions: "play reverse play reverse",
      markers: false,
      scrub: 1,
    },
  });

  const t4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#fetch_unlock_rewards_offers_txt",
      start: "+=100 100%",
      end: "+=200 5%",
      scrub: true,
      markers: false,
      toggleActions: "play reverse play reverse",
    },
  });

  t4.to("#fetch_unlock_rewards_offers_txt", { opacity: 0.4, duration: 1 }).to(
    "#fetch_unlock_rewards_offers_txt",
    { opacity: 1, duration: 1 }
  );

  ScrollLottie({
    target: "#fetch_phone_animation",
    path: "./js/mobileanimation.json",
    duration: 1,
    speed: "slow", //medium
  });

  gsap.to("#fetch_phone_animator_row", {
    scrollTrigger: {
      trigger: "#fetch_phone_animator_row",
      scrub: 0.3,
      start: "top top",
      end: "+=1920",
      pin: true,
      //end: "bottom -200%",
      ease: "power2",
      onUpdate: function (self) {
      //onUpdate: (self) => {
        let new_progress_val = self.progress * 100;

        if (new_progress_val > 60) {
          $("#fetch_phone_animator_section").css("background-color", "#1DFFB8");
        } else {
          $("#fetch_phone_animator_section").css("background-color", "#ffffff");
        }
      },
    },
  });

  var userLang = navigator.language || navigator.userLanguage;

  var lang = $("html").attr("lang");

  if (lang == "en") {
    gsap.set("#fetch_phone_animation", { left: "-10%", position: "absolute" });
  } else {
    gsap.set("#fetch_phone_animation", { right: "-10%", position: "absolute" });
  }

  gsap.to("#fetch_phone_animation", {
    duration: 1,
    scale: 1.5,
    xPercent: -50,
    yPercent: -50,
    left: "80%",
    top: "50%",
    position: "absolute",
    scrollTrigger: {
      trigger: "#fetch_phone_animation",
      scrub: true,
      pin: false,
      start: "top top",
    },
  });

  if (lang == "en") {
    gsap.to("#fetch_easily_set_goals1", {
      duration: 1,
      opacity: -0.5,
      x: -200,
      y: -400,
      scrollTrigger: {
        trigger: "#fetch_phone_animation",
        scrub: true,
        pin: false,
        start: "top top",
      },
    });
  } else {
    gsap.to("#fetch_easily_set_goals1", {
      duration: 1,
      opacity: -0.5,
      x: 200,
      y: -400,
      scrollTrigger: {
        trigger: "#fetch_phone_animation",
        scrub: true,
        pin: false,
        start: "top top",
      },
    });
  }

  gsap.to("#fetch_easily_set_goals3", {
    duration: 1,
    opacity: -0.9,
    y: -400,
    scrollTrigger: {
      trigger: "#fetch_phone_animation",
      scrub: true,
      pin: false,
      start: "top top",
    },
  });

  /* mobile phone section ends */
} // 1200 breakpoint ends here

/* your card your story section starts */
let masks = gsap.utils.toArray(".img-mask");
gsap.to(masks[1], {
  height: "0%",
  ease: "none",
  //duration: 5,
  scrollTrigger: {
    trigger: ".revealer",
    start: "top top",
    pin: true,
    end: "+=300%",
    scrub: 0.087,
    onUpdate: function (self) {
      let new_progress_val = self.progress * 100;
      $(
        "<style>.revealer:after { height: " +
          new_progress_val +
          "%; z-index:-1; color:#fff !important; } </style>"
      ).appendTo("head"); /* transition: height 0.5s;*/
    },
    // onUpdate: (self) => {
    //   let new_progress_val = self.progress * 100;
    //   $(
    //     "<style>.revealer:after { height: " +
    //       new_progress_val +
    //       "%; z-index:-1; color:#fff !important; } </style>"
    //   ).appendTo("head"); /* transition: height 0.5s;*/
    // },
  },
});
/* your card your story section ends */

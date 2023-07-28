//----------- scroll height Hero section background gradient ----------

let height = document.querySelector(".hero-section")?.offsetHeight ? document.querySelector(".hero-section")?.offsetHeight : '0';
let about_us_height = document.querySelector(".about-us")?.offsetHeight ? document.querySelector(".about-us").offsetHeight : '0';

document.documentElement.style.setProperty("--height", `${height}px`);
document.documentElement.style.setProperty("--about-us-height", `${about_us_height}px`);


// ----------------side bar---------------

const humbergar = document.querySelector('.nav-bar .right svg');

humbergar.addEventListener('click', () => {
  document.querySelector('.side-bar').style.transform = 'translateX(0px)';
  humbergar.style.display = 'none';
})

const close_button = document.querySelector('.side-bar>svg');

close_button.addEventListener('click', () => {
  document.querySelector('.side-bar').style.transform = 'translateX(300px)';
  humbergar.style.display = 'block';
})

//------------ navigation------------------------

gsap.from("#logo-name", {
  opacity: 0,
  duration: 2.5,
  ease: "elastic",
  stagger: 0.1,
});

gsap.from("#CTA-button", {
  opacity: 0,
  duration: 2.5,
  scale: 1.2,
  ease: "elastic",
});

gsap.from("#CTA-button2", {
  opacity: 0,
  delay: 1.5,
  duration: 2,
  scale: 1.2,
  ease: "elastic",
});

// ---------------------hero section-------------------

gsap.from(".hero-section .left .bold-title#gsap", {
  opacity: 0,
  delay: 1,
  duration: 2,
  y: "-50%",
  ease: "power4.out",
});

// typed js
setTimeout(() => {
  var typed = new Typed("#element", {
    strings: [
      "I am a thought to make people aware for truth. - nature is our real and true teacher to teach us. It is a great book of whole knowledge.",
      "I am a thought to make people aware for truth. - nature is our real and true teacher to teach us. It is a great book of whole knowledge.",
    ],
    typeSpeed: 40,
  });
}, 1000);

gsap.from(".hero-section .right .image-section#gsap", {
  opacity: 0,
  delay: 1,
  duration: 2,
  y: "-50%",
  ease: "power4.out",
});

gsap.to(".hero-section .left .CTA-button#gsap", {
  opacity: 1,
  delay: 1,
  duration: 2,
  ease: "power4.out",
});

// ---------------Post section----------------

// post1

setTimeout(() => {
  gsap.from(".post .left .title", {
    opacity: 0,
    y: "-50%",
    duration: 1,
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: ".post .left .title",
      scroller: "body",
      start: "top 90%",
      end: "top 30%",
      scrub: 2,
      // markers: true,
    },
  });
  
  gsap.from(".post .left .meta-data *, .post .left .disc", {
    opacity: 0,
    x: "-40%",
    duration: 1,
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: ".post .left .disc, .post .left .meta-data",
      scroller: "body",
      start: "top 90%",
      end: "top 30%",
      scrub: 2,
      markers: false,
    },
  });
  
  gsap.from(".post .right .image-section", {
    opacity: 0,
    x: "40%",
    duration: 1,
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: ".post .right .image-section",
      scroller: "body",
      start: "top 90%",
      end: "top 30%",
      scrub: 2,
      markers: false,
    },
  });
},1000)

// post 2

// gsap.from("#post2 .left .title", {
//   opacity: 0,
//   y: "-50%",
//   duration: 1,
//   ease: "power4.inOut",
//   scrollTrigger: {
//     trigger: "#post2 .left .title",
//     scroller: "body",
//     start: "top 90%",
//     markers: false,
//   },
// });

// gsap.from("#post2 .left .meta-data *, #post2 .left .disc", {
//   opacity: 0,
//   x: "-40%",
//   duration: 1,
//   ease: "power4.inOut",
//   scrollTrigger: {
//     trigger: "#post2 .left .disc",
//     scroller: "body",
//     start: "top 90%",
//     markers: false,
//   },
// });

// gsap.from("#post2 .right .image-section", {
//   opacity: 0,
//   x: "40%",
//   duration: 1,
//   ease: "power4.inOut",
//   scrollTrigger: {
//     trigger: "#post2 .right .image-section",
//     scroller: "body",
//     start: "top 90%",
//     markers: false,
//   },
// });

// // post 3

// gsap.from("#post3 .left .title", {
//   opacity: 0,
//   y: "-50%",
//   duration: 1,
//   ease: "power4.inOut",
//   scrollTrigger: {
//     trigger: "#post3 .left .title",
//     scroller: "body",
//     start: "top 90%",
//     markers: false,
//   },
// });

// gsap.from("#post3 .left .meta-data *, #post3 .left .disc", {
//   opacity: 0,
//   x: "-40%",
//   duration: 1,
//   ease: "power4.inOut",
//   scrollTrigger: {
//     trigger: "#post3 .left .disc",
//     scroller: "body",
//     start: "top 90%",
//     markers: false,
//   },
// });

// gsap.from("#post3 .right .image-section", {
//   opacity: 0,
//   x: "40%",
//   duration: 1,
//   ease: "power4.inOut",
//   scrollTrigger: {
//     trigger: "#post3 .right .image-section",
//     scroller: "body",
//     start: "top 90%",
//     markers: false,
//   },
// });

// // post 4

// gsap.from("#post4 .left .title", {
//   opacity: 0,
//   y: "-50%",
//   duration: 1,
//   ease: "power4.inOut",
//   scrollTrigger: {
//     trigger: "#post4 .left .title",
//     scroller: "body",
//     start: "top 90%",
//     markers: false,
//   },
// });

// gsap.from("#post4 .left .meta-data *, #post4 .left .disc", {
//   opacity: 0,
//   x: "-40%",
//   duration: 1,
//   ease: "power4.inOut",
//   scrollTrigger: {
//     trigger: "#post4 .left .disc",
//     scroller: "body",
//     start: "top 90%",
//     markers: false,
//   },
// });

// gsap.from("#post4 .right .image-section", {
//   opacity: 0,
//   x: "40%",
//   duration: 1,
//   ease: "power4.inOut",
//   scrollTrigger: {
//     trigger: "#post4 .right .image-section",
//     scroller: "body",
//     start: "top 90%",
//     markers: false,
//   },
// });

// // post 5

// gsap.from("#post5 .left .title", {
//   opacity: 0,
//   y: "-50%",
//   duration: 1,
//   ease: "power4.inOut",
//   scrollTrigger: {
//     trigger: "#post5 .left .title",
//     scroller: "body",
//     start: "top 90%",
//     markers: false,
//   },
// });

// gsap.from("#post5 .left .meta-data *, #post5 .left .disc", {
//   opacity: 0,
//   x: "-40%",
//   duration: 1,
//   ease: "power4.inOut",
//   scrollTrigger: {
//     trigger: "#post5 .left .disc",
//     scroller: "body",
//     start: "top 90%",
//     markers: false,
//   },
// });

// gsap.from("#post5 .right .image-section", {
//   opacity: 0,
//   x: "40%",
//   duration: 1,
//   ease: "power4.inOut",
//   scrollTrigger: {
//     trigger: "#post5 .right .image-section",
//     scroller: "body",
//     start: "top 90%",
//     markers: false,
//   },
// });

// ---------------------about us page--------------------------

gsap.from(".background-gradient-container.about-gradient-container", {
  duration: 3,
  y: "-55%",
  ease: "power4.inOut",
  stagger: 0.1,
});

gsap.from("#about-page", {
  duration: 3.2,
  y: "-150%",
  ease: "power4.inOut",
  stagger: 0.1,
});
gsap.from("#about-hero-page", {
  duration: 3,
  y: "-300%",
  ease: "power4.inOut",
  stagger: 0.1,
});

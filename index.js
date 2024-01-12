gsap.registerPlugin(ScrollTrigger);

// main
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".main",
      pin: true,
      start: "top top",
      end: "bottom 3vh",
      scrub: 2,
      onEnterBack: () => {
        gsap.to(".main", {
          opacity: 1,
          transform: "translateY(0)",
        });
      },
    },
  })
  .to("main", {
    opacity: 1,
    duration: 7,
  })
  .to(".main-img,.main h3 img", {
    opacity: 0,
    duration: 5,
  })
  .to(".main .main-wrap", {
    opacity: 1,
    duration: 5,
  })
  .from(".main .main-wrap .phone", {
    scale: 0,
    opacity: 0,
    duration: 5,
  })
  .from(
    ".main .main-wrap .matches,.main .main-wrap .shadow,.main .main-wrap .lip, .main .main-wrap .bnh,.main .main-wrap .wno,.main .main-wrap .beam",
    {
      scale: 0,
      duration: 5,
    }
  )
  .from(".main .main-wrap .logo", {
    x: -1000,
    duration: 10,
  })
  .from(
    ".main .main-wrap .tag-box",
    {
      x: 1000,
      duration: 10,
    },
    "<"
  )
  .to(".main", {
    opacity: 1,
    duration: 7,
  });

// mega-hot
gsap.timeline({
  scrollTrigger: {
    trigger: ".mega-hot",
    pin: true,
    start: "top top",
    end: "bottom 20%",
    scrub: true,
    onEnter: () => {
      gsap.to(".mega-hot", {
        opacity: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to(".mega-hot", {
        opacity: 0,
      });
    },
    onLeave: () => {
      gsap.to("body", {
        backgroundColor: "#fdf5e6",
        duration: 0.5,
      });
    },
    onEnterBack: () => {
      gsap.to("body", {
        backgroundColor: "#fbdd7d",
      });
    },
  },
});

// products
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".products",
      pin: true,
      pinSpacing: false,
      start: "top -30%",
      end: "bottom bottom",
      scrub: 5,
      onLeave: () => {
        gsap.to("body", {
          backgroundColor: "#fbdd7d",
          duration: 2,
        });
      },
      onEnterBack: () => {
        gsap.to("body", {
          backgroundColor: "#fdf5e6",
          duration: 1.2,
        });
      },
    },
  })
  .from(".products .s-title-box", {
    scale: 1.5,
    opacity: 0,
    duration: 5,
    ease: "power2.inOut",
  })
  .from(".products .shadow", {
    scale: 1.2,
    opacity: 0,
    duration: 5,
    ease: "power2.inOut",
  })
  .from(".products .s-txt-box", {
    scale: 1.2,
    opacity: 0,
    duration: 5,
    ease: "power2.inOut",
  })
  .to(".products .shadow-box", {
    opacity: 1,
    duration: 5,
  })
  .to(
    ".products .shadow-box .s-title-box,.products .shadow-box .shadow,.products .shadow-box .s-txt-box ",
    {
      opacity: 0,
      duration: 5,
      ease: "power2.inOut",
    }
  )
  .to(".products .lip-box", {
    opacity: 1,
    duration: 5,
    ease: "power2.inOut",
  })
  .from(".products .l-title-box", {
    scale: 1.2,
    opacity: 0,
    duration: 5,
    ease: "power2.inOut",
  })
  .from(".products .tint", {
    scale: 1.2,
    opacity: 0,
    duration: 5,
    ease: "power2.inOut",
  })
  .from(".products .l-container h3, .products .l-name", {
    scale: 1.2,
    opacity: 0,
    duration: 3,
    ease: "power2.inOut",
  })
  .to(".products .lip-box", {
    opacity: 1,
    duration: 3,
    ease: "power2.inOut",
  })
  .to(".products .lip-box", {
    opacity: 0,
    duration: 4,
    ease: "power2.inOut",
  })
  .to(".products .beam-box", {
    opacity: 1,
    ease: "power2.inOut",
    duration: 3,
  })
  .from(".products .b-name-box", {
    scale: 1.5,
    opacity: 0,
    duration: 3,
    ease: "power2.inOut",
  })
  .from(".products .b-title-box", {
    opacity: 0,
    duration: 3,
    ease: "power2.inOut",
  })
  .from(".products .beam", {
    scale: 1.5,
    opacity: 0,
    duration: 3,
    ease: "power2.inOut",
  })
  .to(".products .beam-box", {
    opacity: 1,
    duration: 3,
    ease: "power2.inOut",
  })
  .to(".products .beam-box", {
    opacity: 0,
    duration: 3,
    ease: "power2.inOut",
  })
  .to(".products .beam-box", {
    opacity: 0,
    duration: 4,
    ease: "power2.inOut",
  });

// magazine
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".magazine",
      pin: true,
      start: "10% top",
      end: "bottom bottom",
      scrub: 3,
    },
  })
  .from(".mgz", {
    opacity: 1,
    duration: 30,
  })
  .from(".mgz2", {
    x: -1000,
    duration: 30,
    ease: "power2.inOut",
  })
  .from(".mgz1", {
    x: 1000,
    duration: 30,
    ease: "power2.inOut",
  })
  .to(".magazine img", {
    opacity: 1,
    duration: 100,
  });

// process01
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".process01",
      pin: true,
      pinSpacing: false,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
    },
  })
  .from(".process01 h3", {
    opacity: 0,
  })
  .from(".process01 .shadow01", {
    scale: 0,
    y: 100,
  })
  .from(".process01 .shadow02", {
    scale: 0,
    y: 100,
  })
  .from(".process01 .eye-sel", {
    scale: 0,
    y: 100,
  });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".process01",
      start: "top 70%",
      end: "bottom bottom",
    },
  })
  .from(".process01 .number", {
    scale: 0.7,
    border: "1px solid #898989",
    backgroundColor: "transparent",
    duration: 0.7,
  });

// process02
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".process02",
      pin: true,
      pinSpacing: false,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
    },
  })
  .from(".process02 h3", {
    opacity: 0,
  })
  .from(".process02 .tint01", {
    scale: 0,
    y: 100,
  })
  .from(".process02 .tint02", {
    scale: 0,
    y: 100,
  })
  .from(".process02 .lip-sel", {
    scale: 0,
    y: 100,
  });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".process02",
      start: "top 70%",
      end: "bottom bottom",
    },
  })
  .from(".process02 .number", {
    scale: 0.7,
    border: "1px solid #898989",
    backgroundColor: "transparent",
    duration: 0.7,
  });

// process03
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".process03",
      pin: true,
      pinSpacing: true,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      onEnterBack: () => {
        gsap.to("body", {
          backgroundColor: "#fbdd7b",
        });
      },
    },
  })
  .from(".process03 h3", {
    opacity: 0,
  })
  .from(".process03 .beam01", {
    scale: 0,
    y: 100,
  })
  .from(".process03 .beam02", {
    scale: 0,
    y: 100,
  })
  .from(".process03 .beam-sel", {
    scale: 0,
    y: 100,
  });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".process03",
      start: "top 70%",
      end: "bottom bottom",
    },
  })
  .from(".process03 .number", {
    scale: 0.7,
    border: "1px solid #898989",
    backgroundColor: "transparent",
    duration: 0.7,
  });

// warning
gsap.timeline({
  scrollTrigger: {
    trigger: ".warning",
    pin: true,
    pinSpacing: false,
    start: "-20% top",
    end: "bottom bottom",
    scrub: 1.7,
    onEnter: () => {
      gsap.to("body", {
        backgroundColor: "#d61010",
      });
      gsap.to(".warning p", {
        animation: "blink 1s infinite",
      });
      gsap.to(".warning-wrap", {
        opacity: 1,
      });
    },
    onEnterBack: () => {
      gsap.to("body", {
        backgroundColor: "#d61010",
      });
      gsap.to(".warning-wrap", {
        opacity: 1,
      });
    },
    onLeave: () => {
      gsap.to(".warning-wrap", {
        opacity: 0,
      });
      gsap.to("body", {
        backgroundColor: "#fbdd7d",
        duration: 2,
      });
    },
    onLeaveBack: () => {
      gsap.to(".warning-wrap", {
        opacity: 0,
      });
    },
  },
});

// outro
gsap.timeline({
  scrollTrigger: {
    trigger: ".outro",
    start: "-15% center",
    end: "bottom bottom",
    // markers: true,
    scrub: 1,
    onEnter: () => {
      gsap.to("body", {
        backgroundColor: "#fbdd7b",
      });
    },
    toggleAction: "play none none reverse",
  },
});

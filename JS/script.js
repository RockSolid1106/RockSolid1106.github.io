
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

// Check if the media query matches or is not available.
if (!mediaQuery || mediaQuery.matches) {
  //without animation
    particlesJS("particles-js", {
    
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 0,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": false,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "retina_detect": true

    });


    /* ---- stats.js config ---- */

} else {
  //with animation
  var elem = document.getElementById('typewrite');


  var typewriter = new Typewriter(elem, {
      loop: true
  });
  function typ() {
  typewriter.pauseFor(1000)
  .typeString('Hey there, ')
  .pauseFor(400)
  .typeString('I am Rock.')
  .pauseFor(750)
  .deleteAll()
  .typeString("I love coding!")
  .pauseFor(1750)
  .start();
  }

  window.onload = function() {
    typ();
  };

  
  particlesJS("particles-js", {
  
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true

  });


  /* ---- stats.js config ---- */

}

// //////////////////////

const faders = document.querySelectorAll('.fade-in');
const options = {
   threshold: 0.6
};
const aos = new IntersectionObserver(function(entries, aos) {
   entries.forEach(entry => {
       if (!entry.isIntersecting){
           return;
       }
       else {
           entry.target.classList.add('appear');
           // setTimeout(function(){entry.target.classList.add('appear');},1250);
           // entry.target.classList.add('appear');
           // document.getElementById("section-boxid").classList.add("in");
           aos.unobserve(entry.target);
       }
   });
}, options);

faders.forEach(fader => {
   aos.observe(fader);
})
///////////////
// //////////////

// const sec = document.querySelectorAll('section');
// const options2 = {
//     threshold: 0.7
// };
// const autoscroll = new IntersectionObserver(function(entries, autoscroll) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting){
//             return;
//         }
//         else {
          
//             //document.getElementById("section-boxid").classList.add("in");
//             //document.getElementById("section-boxid2").classList.add("in");
//             // setTimeout(function(){$(window).scrollTo(entry.target.offsetParent);},750);
//             $(window).scrollTo(entry.target.offsetParent);
//             // $(window).scrollTo(entry.target.offsetParent);
//             // setTimeout(function(){
//             //     document.getElementById("section-boxid").classList.remove("in");
//             //     document.getElementById("section-boxid2").classList.remove("in");
//             // },2000);
//             //aos.observer.unobserve(entry.target)
//         }
//     });
// }, options2);

// faders.forEach(section => {
//     autoscroll.observe(section);
// })

// // $(".section-box").on(
// //     "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
// //     function() {
// //         $(this).delay(1000).queue(function() {  // Wait for 1 second.
// //             $(this).removeClass("in").dequeue();
// //         });
// //     }
// // );

// ////////////////////////
// /*
// $('#sec1').bind('mousewheel DOMMouseScroll', function(e) {
//   if (e.originalEvent.wheelDelta < 0) {
//     //e.preventDefault();
//     $(window).scrollTo('#sec2', 0);
//   }
// });
// */

/* ---- particles.js config ---- */



/* ----- Functions for handling on-clicks on hrefs in box ------- */
function displaykeybimag() {
    setTimeout(function(){
        document.getElementById("keyb-1").classList.add("appear")
        var parent = "#keybhref"
        var elem = "#keyb-1"
        var par = $(parent).position()
        var width = $(parent).outerWidth()
        var height = $(parent).outerHeight()
        $(elem).css({
            position: "absolute",
            top: (par.top + height + height*50/100) + "px",
            left: (par.left + width*2.3/4 - $(elem).outerWidth() - 20) + "px"
        })
        try{document.getElementById("keyb-1").classList.remove("disappear")}catch(ex){console.log(ex)}
    }, 00);
    setTimeout(function(){
        document.getElementById("keyb-2").classList.add("appear")
        var parent = "#keybhref"
        var elem = "#keyb-2"
        var par = $(parent).position()
        var width = $(parent).outerWidth()
        var height = $(parent).outerHeight()
        $(elem).css({
            position: "absolute",
            top: (par.top + height + height*50/100) + "px",
            left: (par.left + width/2 + 0.5*parseFloat(getComputedStyle(document.getElementById("buthref")).fontSize)) + "px"
        })
        try{document.getElementById("keyb-2").classList.remove("disappear")}catch(ex){console.log(ex)}
    }, 200);
    setTimeout(function(){
        document.getElementById("keyb-3").classList.add("appear")
        var parent = "#buthref"
        var elem = "#keyb-3"
        var par = $(parent).position()
        var width = $(parent).outerWidth()
        var height = $(parent).outerHeight()
        $(elem).css({
            position: "absolute",
            top: (par.top + height + height*50/100) + "px",
            left: ((par.left + width/2 + $(elem).outerWidth()/2) + 2*parseFloat(getComputedStyle(document.getElementById("buthref")).fontSize)) + "px"
        })
        console.log(parseFloat(getComputedStyle(document.getElementById("buthref")).fontSize))
        try{document.getElementById("keyb-3").classList.remove("disappear")}catch(ex){console.log(ex)}
    }, 400);
}
function removekeybimag() {

    document.getElementById("keyb-1").classList.add("disappear")
        document.getElementById("keyb-1").classList.remove("appear")



        document.getElementById("keyb-2").classList.add("disappear")
        document.getElementById("keyb-2").classList.remove("appear")



        document.getElementById("keyb-3").classList.add("disappear")
        document.getElementById("keyb-3").classList.remove("appear")
}

function displaybuttimag() {
    setTimeout(function(){
        document.getElementById("butt-1").classList.add("appear")
        var parent = "#buthref"
        var elem = "#butt-1"
        var par = $(parent).position()
        var width = $(parent).outerWidth()
        var height = $(parent).outerHeight()
        $(elem).css({
            position: "absolute",
            top: (par.top + height + height*50/100) + "px",
            left: (par.left + width/2 - $(elem).outerWidth() - 0.5*parseFloat(getComputedStyle(document.getElementById("buthref")).fontSize)) + "px"
        })
        try{document.getElementById("butt-1").classList.remove("disappear")}catch(ex){console.log(ex)}}, 0);
    setTimeout(function(){
        document.getElementById("butt-2").classList.add("appear")
        var parent = "#buthref"
        var elem = "#butt-2"
        var par = $(parent).position()
        var width = $(parent).outerWidth()
        var height = $(parent).outerHeight()
        $(elem).css({
            position: "absolute",
            top: (par.top + height + height*50/100) + "px",
            left: (par.left + width/2 + 0.5*parseFloat(getComputedStyle(document.getElementById("buthref")).fontSize)) + "px",
        })
        try{document.getElementById("butt-2").classList.remove("disappear")}catch(ex){console.log(ex)}
    }, 200);
}
function removebuttimag() {

    document.getElementById("butt-1").classList.add("disappear")
    document.getElementById("butt-1").classList.remove("appear")

    document.getElementById("butt-2").classList.add("disappear")
    document.getElementById("butt-2").classList.remove("appear")

}


function displayheadimag() {
    document.getElementById("headphones").classList.add("appear")
    var parent = "#headhref"
    var elem = "#headphones"
    var par = $(parent).position()
    var width = $(parent).outerWidth()
    var height = $(parent).outerHeight()
    $(elem).css({
        position: "absolute",
        top: (par.top + height + height*50/100) + "px",
        left: (par.left + width*2.3/4 - $(elem).outerWidth()/2) + "px"
    })
    try{document.getElementById("headphones").classList.remove("disappear")}catch(ex){console.log(ex)};
}
function removeheadimag() {
    document.getElementById("headphones").classList.add("disappear")
        document.getElementById("headphones").classList.remove("appear")
}

function displaypenimag() {
    document.getElementById("pen").classList.add("appear")
    var parent = "#penhref"
    var elem = "#pen"
    var par = $(parent).position()
    var width = $(parent).outerWidth()
    var height = $(parent).outerHeight()
    $(elem).css({
        position: "absolute",
        top: (par.top + height + height*50/100) + "px",
        left: (par.left + width*2.3/4 - $(elem).outerWidth()/2) + "px"
    })
    try{document.getElementById("pen").classList.remove("disappear")}catch(ex){console.log(ex)};
}
function removepenimag() {
    document.getElementById("pen").classList.add("disappear")
        document.getElementById("pen").classList.remove("appear")
}


function displaydbotimag() {
    document.getElementById("venomsc").classList.add("appear")
    var parent = "#dbothref"
    var elem = "#venomsc"
    var par = $(parent).position()
    var width = $(parent).outerWidth()
    var height = $(parent).outerHeight()
    $(elem).css({
        position: "absolute",
        top: (par.top + height/2 - $(elem).outerHeight()/2) + "px",
        left: (par.left + width + 20) + "px"
    })
    try{document.getElementById("venomsc").classList.remove("disappear")}catch(ex){console.log(ex)};
}
function removedbotimag() {
    document.getElementById("venomsc").classList.add("disappear")
        document.getElementById("venomsc").classList.remove("appear")
}

function displaycustimag() {
    document.getElementById("cust").classList.add("appear")
    var parent = "#custhref"
    var elem = "#cust"
    var par = $(parent).position()
    var width = $(parent).outerWidth()
    var height = $(parent).outerHeight()
    $(elem).css({
        position: "absolute",
        top: (par.top + height/2 - $(elem).outerHeight()/2) + "px",
        left: (par.left + width + 20) + "px"
    })
    try{document.getElementById("cust").classList.remove("disappear")}catch(ex){console.log(ex)};
}
function removecustimag() {
    document.getElementById("cust").classList.add("disappear")
        document.getElementById("cust").classList.remove("appear")
}
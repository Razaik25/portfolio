$(document).ready(function(){

  console.log('script is linked');

  // calling fullpage.js to scroll down on arrow click
  $('#arrow').on('click', function(){
    $.fn.fullpage.moveSectionDown();
  });

  // invoking fullpage.js
  $('#fullpage').fullpage({
		sectionsColor: [ '#fff', '#c0dfd9', '#f6f1ed', '#fff'],
    anchors: ['Home', 'About', 'Portfolio', 'Contact'],
		menu: '#menu',
    // responsive: 900
		css3: true
	});

  // invoking particles.js, had to put JSON file manually as the file is not hosted on a server
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#173e43"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#283018"
        },
        "polygon": {
          "nb_sides": 3
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
        "color": "#173e43",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
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
          "enable": false,
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
          "speed": 2
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


  // trainglify for contact page
  var pattern = Trianglify({
  height: window.innerHeight,
  width: window.innerWidth,
  cell_size: 60,
  variance: 0.75,
  x_colors: ["#1c9099", "#a6bddb", "#667467"],
  // x_colors: 'YlGnBu',
  // seed: 'qwf5b'
  // x_colors: 'random'
  });

  $(".contact").append(pattern.canvas());

  // for window resize to tackle the varying width and height of the canvas
  $( window ).resize(function() {
    console.log('window is resized');
    pattern.opts.height = window.innerHeight;
    pattern.opts.width = window.innerWidth;
    $(".contact canvas").remove();
    $(".contact").append(pattern.canvas());
  });

  // change the variance on mouse movement
  // not working, have to fix
  // $(".contact").on("mouseover",function(event){
  //
  //    console.log('before',pattern.opts.variance);
  //   $(".contact canvas").remove();
  //   // pattern.opts.variance = Math.random().toFixed(2);
  //
  //
  //   // pattern.opts.variance = (event.pageY / 500).toFixed(2);
  //   $(".contact").append(pattern.canvas());
  //   console.log('after',pattern.opts.variance);
  //
  // });

  $('.lastmodified').text("Last modified on " + document.lastModified.split(" ")[0]);

  // text rotator
  $(".rotate").textrotator({
    animation: "dissolve",
    separator: "|",
    speed: 4000
  });

  // since css property of background-clip only works in Chrome and safari
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
  if(!isChrome && !isSafari) {
    $('.rainbow').css({"color": "#e05038", "font-size": "20px"});
  }



});

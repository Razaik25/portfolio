
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
    easing: 'easeInExpo',
  	css3: true
	});

  // invoking particles.js, had to put JSON file manually as the file is not hosted on a server
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 60,
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
          "width": 1,
          "color": "#3fb0ac"
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
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 6,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#173e43",
        "opacity": 1,
        "width": 0.3
      },
      "move": {
        "enable": true,
        "speed": 1.3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
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
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.5
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
          "particles_nb": 0.3
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  $(".contact").append(pattern.canvas());

  // for window resize to tackle the varying width and height of the canvas
  $( window ).resize(function() {
    console.log('window is resized');
    // removing the old canvas
    $(".contact canvas").remove();
    properties.height = window.innerHeight;
    properties.width = window.innerWidth;
    var t = Trianglify(properties);
    $(".contact").append(t.canvas());
  });


  $('.lastmodified').text("Last updated on " + document.lastModified.split(" ")[0]);

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

// generating trainglify pattern for contact page
// Initially when the page loads
var properties = {
height: window.innerHeight,
width: window.innerWidth,
cell_size: 80,
variance: 0.75,
x_colors: 'Blues',
seed: Math.random().toString(36).substr(2, 5)
};
var pattern = Trianglify(properties);

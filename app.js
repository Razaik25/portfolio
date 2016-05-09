$(document).ready(function(){

  $('#bio').hide();
  console.log('script is linked');

  // calling the letter drop function on  name
  $('#name').letterDrop();
    setTimeout(function(){
        $('#bio').show().fadeIn('slow');
    },4000);

    // initializing fullpage.js
    // $('#fullpage').fullpage({
		// 		anchors: ['Home', 'About', 'Portfolio'],
		// 		sectionsColor: ['#B81D18', '#1BBC9B', '#7E8F7C'],
		// 		navigation: true,
		// 		navigationPosition: 'right',
		// 		navigationTooltips: ['Home', 'About', 'Portfolio'],
		// 		responsiveWidth: 900
		// 	});

    // declaring the varibles for initializing the canvas
    let width, height, canvas, ctx, circles;
    // calling the initCanvas function
    initCanvas();

    function initCanvas() {
        width = window.innerWidth;   // gets the inner hieght/width of the browser
        height = window.innerHeight;

        // gets the canvas-particles canvas
        canvas = document.getElementById('canvas-particles');
        // sets the width/height of the canvas equal to that of the browser
        canvas.width = width;
        canvas.height = height;
        // declaring 2D rendering of the canvas element
        ctx = canvas.getContext('2d');

        // create circle particles
        circles = [];
        for(var i = 0; i < width*0.75; i++) {
            // creates new circle using Circle constructor
            var c = new Circle();
            circles.push(c);
        }
        // calling animate function to animate the circles
        animate();
    }


    function animate() {
      ctx.clearRect(0,0,width,height);
        for(var i in circles) {
          circles[i].draw();
        }

      // requests the browser to call the animate function
      window.requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
      // saving the current instance of this
      let self = this;

        // constructor
        (() => {
            this.pos = {};
            init();
            // console.log(this);
        })();


        function init() {
            self.pos.x = Math.random()*width;
            self.pos.y = height+Math.random()*100;
            self.alpha = 0.3+Math.random()*0.3;
            self.scale = 0.2+Math.random()*0.3;
            self.velocity = Math.random();
        }

        this.draw = function() {
            if(this.alpha <= 0) {
                init();
            }
            this.pos.y -= this.velocity;
            this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ this.alpha+')';
            ctx.fill();
        };
    }

  });

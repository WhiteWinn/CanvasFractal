// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


//function render(canvas) {
 //   const canvas = document.querySelector('#canvas')
//}



//'use strict';

var container, camera, scene, renderer, mesh


var CANVAS_WIDTH = 400
var CANVAS_HEIGHT = 400;

//unused

    function Render_canvas(canvasreference) {

        const canvas = canvasreference;
        const gl = canvas.getContext('webgl');

        if (!gl) {
        alert('webgl is not being started upon webpageloading, your browser may not support it');
            return;
        }


        gl.clearColor(0.0, 0.0, 0.0, 0.5);
        gl.clear(gl.COLOR_BUFFER_BIT);
};

//var renderer = new THREE.WebGL1Renderer();





var Canvas_Bool_Rendered = false;



//renders when pressed
//document.getElementById("render_button").addEventListener("click", animate);


//the window is being checked and whenevr resized the canvas is changed too
//window.addEventListener("resize", Update_Canvas_Height_Width);

//window.addEventListener("resize", animate)
//window.onresize = Update_Canvas_Height_Width;

function Canvas_Resize_Reset_Render(){

}


var canvas = document.getElementById('fractal_canvas');
var canvasDiamond = document.getElementById('fractal_canvas_Diamond');

//this function updates canvas but doesn't stretch it so the pixels being drawn are relative to the pixels on the screen and the aspect is kept relatively well
function Update_Canvas_Height_Width() {
   // var Container_Main_Canvas_Width = document.getElementById("Canvas_Row").clientWidth;
   // var Container_Main_Canvas_Height = document.getElementById("fractal_canvas").width;
  //  document.querySelector('#fractal_canvas').width = Container_Main_Canvas.offsetWidth;
   // document.querySelector('#fractal_canvas').height = Math.round(Container_Main_Canvas.width * aspect);



    //this changes the canvas as the page is adjusted, should keep the aspect ratio
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    //renderer.setSize(canvas.width, canvas.height);

}

//Update_Canvas_Height_Width();

//window.addEventListener('resize',win)
Update_Canvas_Height_Width();
// called to begin the updating of the canvas size



var canvas = document.getElementById('cvs');
var width = 1000;
var height = 1000;

var ctx = canvas.getContext('2d', {alpha: false});

function SetCanvas() {
    
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
    console.log("Width : " + width + ", Height : " + height);
    
    canvas.width = String(width);
    canvas.height = String(height);
    canvas.style.width = String(width) + "px";
    canvas.style.height = String(height) + "px";
}
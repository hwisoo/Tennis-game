var canvas;
var canvasContext;
var ballX = 50;

window.onload = function() {
    console.log("Hello World!");
    canvas = this.document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    
    setInterval(drawEverything, 50);
    drawEverything();
}

function drawEverything() {
    ballX = ballX + 5;

    console.log(ballX)
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(225, 210, 200, 200);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(ballX, 100, 10, 10);
}
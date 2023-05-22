// init canvas and context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/**
 * Draw sky
 */
function drawSky() {
  ctx.fillStyle = "#87CEEB"; // Sky color
  ctx.fillRect(0, 0, canvas.width, canvas.height); // Draw sky
}

/**
 * Draw Sun
 * @param {*} x position
 * @param {*} y position
 * @param {*} radius radius
 */
function drawSun(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "red"; // sun color
  ctx.fill();
  
  var numRays = 8; 
  var rayLength = radius * 0.5;
  var rayDistance = radius * 1.8;

  for (var i = 0; i < numRays; i++) {
    var centerX = x + rayDistance * Math.cos((2 * Math.PI * i) / numRays);
    var centerY = y + rayDistance * Math.sin((2 * Math.PI * i) / numRays);

    ctx.beginPath();
    ctx.ellipse(
      centerX,
      centerY,
      rayLength,
      radius / 3,
      (2 * Math.PI * i) / numRays,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "red";
    ctx.fill();
  }
}

/**
 * Draw Cloud
 * @param {*} x position
 * @param {*} y position
 * @param {*} scale scale
 */
function drawCloud(x, y, scale) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(20, -20, 40, -20, 60, 0);
  ctx.bezierCurveTo(80, -30, 120, -30, 140, 0);
  ctx.bezierCurveTo(180, -20, 220, -20, 260, 0);
  ctx.bezierCurveTo(280, -30, 320, -30, 340, 0);
  ctx.bezierCurveTo(360, -20, 380, -20, 400, 0);
  ctx.bezierCurveTo(380, 40, 320, 40, 300, 60);
  ctx.bezierCurveTo(260, 80, 180, 80, 140, 60);
  ctx.bezierCurveTo(100, 80, 20, 80, 0, 60);
  ctx.bezierCurveTo(-20, 40, -20, 0, 0, 0);
  ctx.closePath();

  ctx.fillStyle = "#ffffff"; // cloud color
  ctx.fill();
  ctx.restore();
}

/**
 * Draw Tree
 * @param {*} x 
 * @param {*} y 
 * @param {*} scale 
 */
function drawTree(x, y, scale) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(10, 0);
  ctx.lineTo(10, -60);
  ctx.lineTo(0, -60);
  ctx.closePath();
  ctx.fillStyle = "#964B00"; // tree trunk color
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(-20, -50);
  ctx.lineTo(30, -50);
  ctx.lineTo(5, -90);
  ctx.lineTo(-20, -50);
  ctx.closePath();
  ctx.fillStyle = "#228B22"; // tree leaf color
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(-15, -70);
  ctx.lineTo(25, -70);
  ctx.lineTo(5, -110);
  ctx.lineTo(-15, -70);
  ctx.closePath();
  ctx.fillStyle = "#228B22"; // tree leaf color
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(-10, -90);
  ctx.lineTo(20, -90);
  ctx.lineTo(5, -130);
  ctx.lineTo(-10, -90);
  ctx.closePath();
  ctx.fillStyle = "#228B22"; // tree leaf color
  ctx.fill();

  ctx.restore();
}

/**
 * Draw House
 * @param {*} x 
 * @param {*} y 
 * @param {*} scale 
 */
function drawHouse(x, y, scale) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  // draw wall
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 0);
  ctx.lineTo(50, -50);
  ctx.lineTo(30, -70);
  ctx.lineTo(0, -50);
  ctx.closePath();
  ctx.fillStyle = "#CD853F"; // house wall color
  ctx.fill();

  // draw door
  ctx.beginPath();
  ctx.moveTo(10, -10);
  ctx.lineTo(20, -10);
  ctx.lineTo(20, -20);
  ctx.lineTo(10, -20);
  ctx.closePath();
  ctx.fillStyle = "#FFFF00"; // house door color
  ctx.fill();

  // draw window
  ctx.beginPath();
  ctx.moveTo(30, 0);
  ctx.lineTo(40, 0);
  ctx.lineTo(40, -30);
  ctx.lineTo(30, -30);
  ctx.closePath();
  ctx.fillStyle = "#8B4513"; // house window color
  ctx.fill();

  // draw roof
  ctx.beginPath();
  ctx.moveTo(35, -60);
  ctx.lineTo(35, -70);
  ctx.lineTo(40, -70);
  ctx.lineTo(40, -60);
  ctx.closePath();
  ctx.fillStyle = "#A9A9A9"; // house roof color
  ctx.fill();

  ctx.restore();
}

function drawGround() {
  ctx.save();
  // draw ground
  ctx.fillStyle = "#90EE90"; // Ground color
  ctx.fillRect(0, 400, canvas.width, canvas.height - 400); // Draw ground
}

function drawText(text, x, y, color, fontSize) {
  ctx.save();
  ctx.font = `${fontSize}px Arial`;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
  ctx.restore();
}

// draw sky
drawSky();
// draw sun
drawSun(100, 100, 30);
// draw cloud
drawCloud(200, 100, 0.3);
drawCloud(100, 89, 0.2);
drawCloud(500, 89, 0.2);
drawCloud(400, 89, 0.4);
// tree number
const TREE_NUMBER = 4;
for(let i = 0; i < TREE_NUMBER; i++) {
  drawTree(120 * i, 400, Math.random() * 0.6 + 1);
}
// draw house
drawHouse(500, 400, 4);
drawGround();
// draw title
drawText("My painting", 200, 460, "navy", 50);
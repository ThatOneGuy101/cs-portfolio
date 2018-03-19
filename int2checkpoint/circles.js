/* global draw ellipse rect p Processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0;
var weight = 2;

draw = function() {
    
    // Makes blu circles from top left ot the top right
    strokeWeight(3);
    stroke(57, 0, 214);
    fill(0, 210, 247);
    ellipse(xPos, yPos, 30, 30);
    xPos = xPos + 20;
    yPos = yPos + 20;
    
    // Makes thicker blu circles from top left ot the top right
    strokeWeight(weight);
    stroke(57, 0, 214);
    fill(1000, 210, 247);
    ellipse(height- xPos, yPos, 30, 304);
    weight++;
    
    // Makes green ovals with blu borders from top left ot the top right
    strokeWeight(weight);
    stroke(57, 0, 27);
    fill(0, 210, 27);
    ellipse(200, weight + yPos, 30, 1000);
    weight--;
    
    
     // Makes green arrows with black borders from top left ot the top right
    strokeWeight(weight);
    stroke(57, 0, 214);
    fill(0, 210, 27);
    ellipse(height - xPos, 200, 100, 30);
    weight//;
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);

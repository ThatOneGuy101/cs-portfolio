/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


draw = function() {
    background();
    
    if (mouseX < 76) {
        ellipse(mouseX, mouseY, 30, 50);
    }
    else if (mouseX > 151) {
        ellipse(mouseX, mouseY, 30, 30);
    }
    else {
        rect(mouseX, mouseY, 30, 30);
    }
    // will determine the color of the circle depending on where your mouse is
    if (mouseX < 76) {
        fill(0, 210, 247);
        strokeWeight(3);
        stroke(57, 0, 214);
    }
    else if (mouseX < 151) {
        fill(0, 21, 27);
        strokeWeight(1);
        stroke(57, 0, 214);
    }
    else {
        fill(100, 110, 47);
        strokeWeight(2);
        stroke(57, 20, 14);
    }
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);

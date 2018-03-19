/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

Bear = function(x, y){
    fill(random(255), random(255), random(255))
    ellipse(x, y, 35, 35);
    ellipse(x - 10, y - 20, 15, 15);
    ellipse(x + 10, y - 20, 15, 15);
    ellipse(x - 5, y, 5, 5);
    ellipse(x + 5, y, 5, 5);
    line(x - 4, y + 6, x + 4, y + 6)  
}; 
mouseClicked = function() {
    Bear(mouseX, mouseY);
};

draw = function() {
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);

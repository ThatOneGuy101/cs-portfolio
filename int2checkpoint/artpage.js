/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

Face = function(x, y) { // This is how a speechless face is made through a function
    fill(255, 255, 255) // This will make the whole face white except for the lines made out of ellipses
    ellipse(x, y, 50, 50); // This ellipse is the whole circle to make the head
    ellipse(x-10, y, 0, 20); // This is the left eye of the head. I did x-10 so it will move to the left
    ellipse(x+10, y, 0, 20); // This is the right eye of the head. I did x+10 so it will move to the right
    ellipse(x, y+15, 30, 0); // This is the mouth of the head. I did the y+15 instead of x+15 because I needed it to go down instead of right/left
};

var mouseX = 0;
frameRate(1) // This will be like a delay function, it will slow down the star's movement

draw = function() {
    if (mouseX <= 201) {
        background(0, 0, 0); // The black background for the "night time"
        fill(255, 255, 255) // This will make sure the moon is white by filling it
        ellipse(50, 75, 50, 50); // The moon that will be in the same spot as the sun
        fill(255, 255, 0); // This will make the stars yellow or else they will be white because of the previous fill
        for (var i = 0; i <= 19; i++) {
            ellipse(random(300), random(250), 10, 10); // This is where the star's placement happens. There will be 20 different locations for 20 different stars
        mouseClicked = function() {
        Face(mouseX, mouseY) // This is the function of whereever the user clicks, the face will pop up and disappear so it won't crash
        };
    }
}
    else {
        background(0, 255, 255); // The blue background for the "day time"
        fill(255, 255, 255)   // this will make sure the clouds are white by filling it
        ellipse(180, 50, 40, 30); // The mini-cloud on the left of the big cloud
        ellipse(220, 50, 40, 30); // The other mini-cloud on the right of the big cloud
        ellipse(200, 50, 50, 50); // The big cloud will overlap the other 2 clouds so it will be similar to a cartoon cloud
        fill(244, 235, 66); // This will make the sun have a yellow fill instead of the white fill
        ellipse(50, 75, 50, 50); // The sun that is in the same spot as the moon
        mouseClicked = function() {
        Face(mouseX, mouseY) // This is the function of whereever the user clicks, the face will pop up and disappear so it won't crash
        };
    }
};
        
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
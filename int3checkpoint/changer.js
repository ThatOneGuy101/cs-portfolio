// Creates Variables and saves DOM elements to eacb
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

/*  EventListener for button.
    Sets the body's background color to the user provided value */
colorChangeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = newBGColor.value;
})
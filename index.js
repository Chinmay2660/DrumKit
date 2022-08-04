//Detecting Button Press
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  //Looping through the buttons
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    //Adding event listener to each button
    var buttonInnerHTML = this.innerHTML; //Getting the innerHTML of the button
    makeSound(buttonInnerHTML); //Calling the function to make the sound
    buttonAnimation(buttonInnerHTML); //Calling the function to animate the button
  });
}

//Detecting Key Press
document.addEventListener("keydown", function (event) {
  //Adding event listener to the document
  //addEventListener is a Higher Order Function
  makeSound(event.key); //Calling the function to make the sound
  buttonAnimation(event.key); //Calling the function to animate the button
});

function makeSound(key) {
  //Function to make the sound
  switch (
    key //Switch statement to determine the sound
  ) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); //Creating a new audio object
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  //Function to animate the button
  var activeButton = document.querySelector("." + currentKey); //Selecting the button with the current key
  activeButton.classList.add("pressed"); //Adding the pressed class to the button
  setTimeout(function () {
    //Setting a timeout to remove the pressed class
    activeButton.classList.remove("pressed"); //Removing the pressed class
  }, 100); //Setting the timeout to 100ms
}

// var audio = new Audio('sounds/crash.mp3');
//     audio.play();

// console.log(this.style.color = "white");



var drumBtns = document.querySelectorAll(".drum");

function drumKitSwitchAndSound(keyInput) {
  var soundFile;
  switch(keyInput) {
    case "w":
    soundFile = "sounds/tom-1.mp3";
    break;
    case "a":
    soundFile = "sounds/tom-2.mp3";
    break;
    case "s":
    soundFile = "sounds/tom-3.mp3";
    break;
    case "d":
    soundFile = "sounds/tom-4.mp3";
    break;
    case "j":
    soundFile = "sounds/snare.mp3";
    break;
    case "k":
    soundFile = "sounds/crash.mp3";
    break;
    case "l":
    soundFile = "sounds/kick-bass.mp3";
    break;
    case "b":
    badumTss();
    default:
    console.log("not mapped");
  }
  if (soundFile !== null || soundFile !== undefined)  {
    var drum = new Audio(soundFile);
    drum.play();
  }
}

// function handleClick() {
//   var button = this;
//   button.classList.add("white");
//
//   switch(button.textContent) {
//     case "w":
//     soundFile = "sounds/tom-1.mp3";
//     break;
//     case "a":
//     soundFile = "sounds/tom-2.mp3";
//     break;
//     case "s":
//     soundFile = "sounds/tom-3.mp3";
//     break;
//     case "d":
//     soundFile = "sounds/tom-4.mp3";
//     break;
//     case "j":
//     soundFile = "sounds/snare.mp3";
//     break;
//     case "k":
//     soundFile = "sounds/crash.mp3";
//     break;
//     case "l":
//     soundFile = "sounds/kick-bass.mp3";
//     break;
//     default:
//     soundFile = "sounds/tom-1.mp3";
//   }
//   var drum = new Audio(soundFile);
//   drum.play();
//   setTimeout(function() {
//     button.classList.remove("white");
//   }, 500);
//
// }


function whiteFontOnSound(keyInput) {
  drumBtns.forEach((item, i) => {
    if(item.textContent === keyInput){
      item.classList.add("white");
      setTimeout(function() {
        item.classList.remove("white");
      }, 500);
    }
  });
}

function whiteContentTextOnSound(button){
  button.classList.add("white");
  setTimeout(function() {
       button.classList.remove("white");
     }, 500);
}




function badumTss() {
  setTimeout(function() {
      var ba = new Audio("sounds/tom-2.mp3");
       ba.play();
     }, 50);
  setTimeout(function() {
      var dum = new Audio("sounds/tom-1.mp3");
       dum.play();
     }, 150);
  setTimeout(function() {
      var tss = new Audio("sounds/crash.mp3");
      tss.play();
    }, 400);
}


/* ATTACHING LISTENER TO ALL DRUM CLASS ELEMENTS */
// foreach version
// document.querySelectorAll(".drum").forEach((item, i) => {
//   addEventListener("click", handleClick);
// });

for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  drumBtns[i].addEventListener("click", function() {
    var buttonLetter = this.textContent;
    console.log(buttonLetter);
    whiteContentTextOnSound(this);
    drumKitSwitchAndSound(buttonLetter);
  });
}

/* KEY MAPPING TO AUDIO FILES */
document.addEventListener("keydown", function(event) {
  console.log(event.key);
  whiteFontOnSound(event.key);
  drumKitSwitchAndSound(event.key);
});

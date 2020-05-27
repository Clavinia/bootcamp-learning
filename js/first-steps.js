

function lifeInWeeks(age) {

/************Don't change the code above************/
var limitAge = 90;
var lifespan, lifespanInDays, lifespanInWeeks, lifespanInMonths;

lifespan = limitAge - age;
lifespanInMonths = lifespan * 12;
lifespanInWeeks = lifespan * 52;
lifespanInDays = lifespan * 365;

console.log(
  'You have ' + lifespanInDays + " days, " + lifespanInWeeks + " weeks, and " + lifespanInMonths + " months left."
  );
/*************Don't change the code below**********/
}

function bmiCalculator(weight,height) {
  bmi = weight / Math.pow(height,2);
  bmiRounded = Math.round(bmi);
  return bmiRounded;
}

function bmiResults(bmi) {
  var comment;
  if (bmi < 18.5) {
    comment = ", so you are underweight.";
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    comment = ", so you have a normal weight.";
  }
  else {
    comment = ", so you are overweight.";
  }
  alert ("Your bmi is " + bmi + comment);
}

bmiResults( bmiCalculator(60,1.63) );


//Love calculator
function loveCalculator() {
  var firstPerson = prompt("Your name:");
  var secondPerson = prompt("Your crush's name:");
  var lovePercent = Math.floor( Math.random() * 100 ) + 1;
  var comment;
  if ( (lovePercent >= 50) && (lovePercent < 70)  ) {
    comment = "Oh, it is getting hot in there!"
  }
  else if ( lovePercent >= 70 && lovePercent <= 100 ) {
    comment = "OMG, you two are SO meant to each other!"
  }
  else {
    comment= "It seems like there is still work to do..."
  }
  alert ("Your compatibility is of " + lovePercent + "%. " + comment);
}

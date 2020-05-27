
var player1, player2, message;

function randomDiceNumber() {
  return Math.floor((Math.random() * 6) + 1);
}

function createDiceFaces(playerID, value) {
  // Reset dice face
  document.querySelector(playerID + " .dice").classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6");
  // face creation
  document.querySelector(playerID + " .dice").classList.add("dice" + value);
  document.querySelector(playerID + " img").setAttribute("src", "images/dice" + value + ".png");
}

function diceBattle() {
  player1 = randomDiceNumber();
  player2 = randomDiceNumber();
  if (player1 < player2) {
    message = "Player 2 Wins! ";
  }
  else if (player1 > player2) {
    message = "Player 1 Wins!";
  }
  else {
    message = "It's a draw!"
  }
  createDiceFaces("#player1", player1);
  createDiceFaces("#player2", player2);
  document.querySelector("#title").textContent = message;
}

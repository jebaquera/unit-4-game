$(document).ready(function(){

// Generate a random number for player to guess
var targetScore = Math.floor(Math.random() * 102 + 19);
    
// Display random number to player
$("#scoreToMatch").text(targetScore);

// Generate random number for each crystal
var numRed = Math.floor(Math.random() * 12 + 1)
var numYellow = Math.floor(Math.random() * 12 + 1)
var numGreen = Math.floor(Math.random() * 12 + 1)
var numBlue = Math.floor(Math.random() * 12 + 1)

// Variables to keep track of wins, losses and total player score
var playerTotal = 0; 
var wins = 0;
var losses = 0;

$("#wins").text(wins);
$("#losses").text(losses); 

// Reset game
function reset(){
  targetScore = Math.floor(Math.random() * 102 + 19);
    console.log(targetScore)
    $('#scoreToMatch').text(targetScore);
    numRed = Math.floor(Math.random() * 12 + 1);
    numYellow = Math.floor(Math.random() * 12 + 1);
    numGreen = Math.floor(Math.random() * 12 + 1);
    numBlue = Math.floor(Math.random() * 12 + 1);
    playerTotal = 0;
    $("#userScore").text(playerTotal);
}

// Display wins
function congrats(){
alert("Congrats! You rock!");
wins++; 
$("#wins").text(wins);
reset();
}
// Display losses
function loser(){
alert("Sorry! You lose. Try again!");
losses++;
$("#losses").text(losses);
reset()
}

// Clicking crystals
$(".red-crystal").on ("click", function(){
  playerTotal = playerTotal + numRed;
  console.log("New playerTotal = " + playerTotal);
  $("#userScore").text(playerTotal); 
      //Win & lose conditions
      if (playerTotal === targetScore){
        congrats();
      }
      else if (playerTotal > targetScore){
        loser();
      }   
})  
$(".yellow-crystal").on ("click", function(){
  playerTotal = playerTotal + numYellow;
  console.log("New playerTotal = " + playerTotal);
  $("#userScore").text(playerTotal);
      //Win & lose conditions 
      if (playerTotal === targetScore){
        congrats();
      }
      else if (playerTotal > targetScore){
        loser();
      } 
})  
$(".green-crystal").on ("click", function(){
  playerTotal = playerTotal + numGreen;
  console.log("New playerTotal = " + playerTotal);
  $("#userScore").text(playerTotal);
      //Win & lose conditions
      if (playerTotal === targetScore){
        congrats();
      }
      else if (playerTotal > targetScore){
        loser();
      } 
})  
$(".blue-crystal").on ("click", function(){
  playerTotal = playerTotal + numBlue;
  console.log("New playerTotal = " + playerTotal);
  $("#userScore").text(playerTotal);
      //Win & lose conditions 
      if (playerTotal === targetScore){
        congrats();
      }
      else if (playerTotal > targetScore){
        loser();
      }
});   
}); 
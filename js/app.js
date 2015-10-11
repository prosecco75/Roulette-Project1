$(function(){
  var $lis = $('.board li');
  $lis.on("click", function(){
    $(this).find("span").toggleClass("played");
  })
})

// var guess = []
// Push into guess the value of the clicked buttons
// and decrease money :)

// var number = Math.floor(Math.random() * 36);
// if guess.indexOf(number) !== -1 
// Then lose all of your chips
//
// else then you win 36 chips - chips played

// Clear the board
// Select all of the spans and then remove the class .played
// hint -> removeClass

// Create a board to play on in html
//   - 9 squares
//   - similar/same class

// Create events to link the squares to click
//   - when they are clicked
//     - 1. save which square was clicked
//     - 2. change the color of the square

// Check whether the game is over?
//  - squares are full
//  - when there is a winner

// If there is no winner, and the game is still running you need to switch turns

window.onload = function(){
  var guess = []
  guess.push.value(clickedIndex);
 for (i=10,000; i<1 ; i--)
  
 
  var totalNumberGames = 0;

  var winningNumbers = [
    BLACK numbers [0,1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36], 
    RED numbers   [2,4,6,8.10,11,13,15,17,20,22,24,26,28,29,31,33,35]
                        ];
                             
  for (var w = 0; w < winningNumbers.length; w++) {

  // Grab all of the li's on the page and save in a variable of squares 
  var squares = document.getElementsByTagName("li");

  // Loop through the squares and setup a "click" event listener
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(){

      // When a square is clicked, we find out which index it has in the square array
      var squaresArray = Array.prototype.slice.call(squares);
      var clickedIndex = squaresArray.indexOf(this);
// Document Ready
$(play);

var chosenSquares = [];
var bet = 0;
var pot = 50;
var win = 0;

var wheelNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]

function play(){
  $('.board li').on("click", chooseSquare);
  $('.spin').on("click", spin);
}

setTimeout(function(){
  $(".wheel").prepend(
    '<p class="animated flip">Choose your squares!<p>'
    )
}, 1500);


function chooseSquare(){
  var $clickedSquare = $(this);
  $clickedSquare.find("span").toggleClass("played");
  chosenSquares.push(parseInt($clickedSquare.text()));
  changeBets('.bet', 1);
  changeBets('.pot', -1);
}

function changeBets(selector, amount) {
  var span = $(selector).find("span");
  var previous = parseInt(span.text());
  span.text(previous += amount);
}

function resetBet(selector){
  var span = $(selector).find("span");
  span.text(0);
}

function clearBoard(){
  $('.played').removeClass("played");
}

function spin(){
  var chosenNumber = Math.floor(Math.random()*36)
  $('.wheel').text(chosenNumber);
  //spinWheel();

  // Check if the chosen number appears in the chosenSquares
  if (chosenSquares.indexOf(chosenNumber) !== -1) {
    $('.wheel').text($('.wheel').text() + "  " + '"Congratualions, you win!!"')

    changeBets('.pot', 36);
    resetBet('.bet');
  } else {
    $('.wheel').text($('.wheel').text() + "  " + '"You have lost, try again!!"')
    resetBet('.bet');
  }
  clearBoard();
}
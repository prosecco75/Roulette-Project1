// Document Ready
$(play);

var chosenSquares = [];
var bet = 0;
var pot = 50;
var win = 0;
//var rotation = 0;
var wheelNumbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]

function play(){
  $('.board li').on("click", chooseSquare);
  $('.spin').on("click", spin);
}

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

function spinWheel(){
  // var wheel = $(".wheel-image")[0];
  // wheel.removeAttribute('style');
  // var deg = 500 + Math.round(Math.random() * 500);
  // rotation += deg;
  // var css = '-webkit-transform: rotate(' + deg + 'deg);';
  // wheel.setAttribute('style', css);
}

function spin(){
  var chosenNumber = Math.floor(Math.random()*36)
  $('.wheel').text(chosenNumber);
  spinWheel();
  // var deg = rotation //wheelNumbers.indexOf(chosenNumber)+1 * 10 + rotation;
  // console.log(rotation)
  // var bc = $('.ball-container')[0];
  // var css = '-webkit-transform: rotate(' + deg + 'deg);';
  // bc.setAttribute('style', css);

  // var counter = 0;
  // setInterval(function(){
  //   var num = wheelNumbers[Math.floor(Math.random()*wheelNumbers.length)]
  //   $('.wheel').text(chosenNumber);
  // }, 100)

  // Check if the chosen number appears in the chosenSquares
  if (chosenSquares.indexOf(chosenNumber) !== -1) {
    console.log("Win");
    changeBets('.pot', 36);
    resetBet('.bet');
  } else {
    console.log("Lose");
    resetBet('.bet');
  }
  clearBoard();
}


// function choseNnumber(a,b,c){
//   if (a + b + c === 50) {
//     console.log ("You have won!");
//   else {
//     return ("You have lost");
//   }



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
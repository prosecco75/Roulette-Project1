
###GA WDI London - Project 1

###"Pick a Boo" game

##Inspiration:
The game is inspired from the Roulette game.

##The game: 
This is a one player game created for children. The player selects several numbers from the range of numbers 1-36 printed on the board.
The games starts with Pot 50. Clicking on the "Spin" button makes the wheel spin and a random number wins.   
The Pot counter decreases at the beginning of every new game depending on how many numbers the player has selected (ie. if player selected 5 numbers, Pot decreases by 5).
The winning number is displayed with a short message depending if the player has won or lost. 
When the player wins, the Pot increases by 36. At the end of every game, the Bet count is reset to 0. 

##Have a play
![](./images/kitt.png)

##Tools:
![](./images/hello.png)

We used HTML 5, CSS and jQuery to create this game.
'Open Sans' Font Google font was used to style the game. 
Several Animations (swing, bounce, pulse, flip) were created using the Animate.css stylesheet.

##Challenges:
It was a challenge to create the SetTimeout, clearBoard and resetBet functions with JQuery. Also, for the game styling, I wanted to created two vertical strips of pattern to sit on the left and right side using a background but the code did not work. The alternative was to use a background with repeat pattern. s

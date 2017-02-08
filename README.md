frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

#Arcade Game Project

##Opening the Game
In order to open the game in the browser simply double click the HTML file.

##Playing the Game

###Object
The object of thh game is to get the player (Ophelia) across teh sidewalk to the water. Ophelia needs to avoid the bugs on her way. 

###Rules
1. The bugs can not run into Ophelia.
2. Ophelia is not allowed to jump into a space currently occupied by a bug.
3. Ophelia can move into any space that is open.

###Game Play
Ophelia moves by using the arrow keys (up, down, right, left) on the keyboard. The bugs will maintian a constant speed during the game but upon reset their speeds will change to a new constant. The game resets if Ophelia comes in contact with a bug. When Ophelia makes it to the river a message will appear and the game will reset. 

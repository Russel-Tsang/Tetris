# Tetris

## Background and Overview
Tetris is a classic tile-based video game that has since evolved into more high-speed and feature-filled versions. However, initial foundations are still there:
<img height=20% width=70% src="https://i0.wp.com/mindyourdecisions.com/blog/wp-content/uploads/2018/05/tetris-riddle-pieces.png?resize=600%2C165&ssl=1"/>
* game pieces, or "tetriminoes", are randomly dropped onto a grid-based board
* lines are cleared by complete filling a row 
* speed of single-player mode increases as the player clears more lines 
* player loses when pieces fill up to the top of the field

## Functionality and MVP Features
Users will be able to
* start, pause, and restart the simulation
* drop tetriminoes slowly (soft-drop) or instantly (hard-drop)
* view upcoming pieces
* clear lines 

## Wireframe
<img height=50% width=50% src="https://aa-file-upload-dev.s3.amazonaws.com/Screen+Shot+2019-08-13+at+12.05.14+AM.png"/>

## Architectures and Technologies 
* Vanilla JS to simulate piece movement and overall game logic
* Webpack to bundle various and execute scripts
* Libraries as implementation needs are discovered

## Implementation Timeline
Day 1: Create basic simulation:
* Create the structures for the board and game pieces
* Generate random pieces and simulate piece movement 
*	Allow pieces to appropriately stack on top of each other

Day 2: Implement logic:
*	End the game when pieces reach the top of the board
*	Allow user to pause and resume game
*	Allowing pieces to turn based on keyboard movement

Day 3: Speed Tuning:
* Allow user to change speed of piece movement 
* Force pieces to drop faster as the player advances through levels	

Day 4: Design:
* Add links to GitHub and LinkedIn
* Add possible style improvements
* Adding a home/menu page

Bonus Features
*	Users can play against each other with a two player mode
* Users can attack with/block lines as they are cleared
*	Create sound effects in response to piece-drops

## Tic Tac Toe

Tic Tac Toe is a simple game where players take turns placing their mark, either an ❌  (player one) or an ⭕ ()player two) on a 3 x 3 grid.  The first player to get three pieces in a row, either horizontally, vertically, or diagonally, wins the game. If at any point in the game either player cannot win, the game ends in a draw.

For this project you will build a Tic Tac Toe game using React. There are three parts to the requirements of the project, as well as an "extra credit" forth part. Styling decisions are left to you. We would love to see your solution that includes at least the three main parts, but if you run out of time, complete what you can, and let us know which parts you were able to implement. You can include a brief description of your design, and any other notes, in the `candidateNotes.md` file.

We are looking for your ability to design and write code that is well-organized, creative, and accomplishes the requirements.  Let us know if you have any questions and remember to have fun and show your creativity!

### Requirements

#### Part 1: Basic gameplay

- The user chooses "New Game" to start a new game, which clears all spaces in the 3 x 3 grid. Players can make a move by clicking on one of the spaces in the grid and the clicked space is marked with an ❌. The user can make the next move by clicking on another space and this one is marked with an ⭕. This continues until all the spaces are marked, or the user selects New Game again.
- If the user clicks on a space that is already marked with ❌ or  ⭕, it doesn't change.  This is not a move.

#### Part 2: Keep track of player names

- After a user selects New Game, the game asks for the name of player 1 (the ❌ player) and player two (the ⭕ player).
- Before each move, the game displays or notifies of the name of the player who is next to move.

#### Part 3: Determine a winner

- After each move, a check should be made to see if either player has placed pieces that result is a win condition (three pieces in a horizontal, vertical, or diagonal row).
- If a win condition is recognized, the winning user is notified, and no following moves are accepted until a player selects "New Game"

- After each move, the game checks if there is a 3 in a row of either ❌ or ⭕ (either horizontally, vertically, or corner-to-corner). If there is a 3 in a row the user is notified of the winner, either ❌ or ⭕, and no more moves are accepted until the user selects New Game.


### Extra Credit

The requirements that follow are entirely optional.

#### Part 4: Leaderboard

- After a game is over, the game contacts the server and reports the outcome of the game, which is the names of the players, the winner, or whether the game was a draw.  For now, assume player names are unique across all remote instances of the game, so only the player's names and the winner (or draw) needs to be reported.
- A leaderboard can be viewed by the user at any time.  The leaderboard gets its data from the server.  the leaderboard shows a list of the top ten players, with the number of wins for each player.  This data will be stubbed in the REST services we are providing with the project. You aren't expected to implement the server, you are only expected to get the data from the server and display it on a leaderboard.
- Each time the user looks at the leaderboard, they see fresh data taken from the server. This is to simulate the situation where there are other games being played, so the leaderboard might change at any time.

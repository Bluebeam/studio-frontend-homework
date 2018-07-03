## M, N, K Game

An [M/N/K game](https://en.wikipedia.org/wiki/M,n,k-game) is an abstract board game where two players take turns placing pieces on a *MxN* grid (the *board*). The first player to reach a predetermined(*K*) set of pieces in a row, either horizontally, vertically, or diagonally, wins. Two well known variations of an M/N/K game are [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe), and [Connect Four](https://en.wikipedia.org/wiki/Tic-tac-toe).

For this project you are tasked to build an M/N/K game using React. Both the height and width of the game board needs to be user configurable. A player wins if they have four pieces in a row.

We are looking for your ability to design and write code that is well-organized, creative, and accomplishes the requirements.  Let us know if you have any questions and remember to have fun and show your creativity!

### Requirements

#### Part 1: Basic gameplay
- A user selects "New Game", enters
- A user should be able to select both the height and width of the board.
- After the height and width of the board are entered, a user then selects "Start" to start a new game.
- Players take turns by placing pieces on a grid location.
- If a player clicks on a space that is already occupied by a piece, no change is made. This is not counted as a move.

#### Part 2: Keep track of player names
- After a user selects "New Game", the game asks for the names of each player. This can take place at the same time the user enters the board height and width.
- Before each move, the game displays the name of player whose turn it is.

#### Part 3: Determine a winner.
- After each move, a check should be made to see if either player has placed pieces that result in a win condition (four pieces in a horizontal, vertical, or diagonal row)..
- If a win condition is recognized, the winning user is notified, and no following moves are accepted until a player selects "New Game"

### Extra Credit

The requirements that follow are entirely optional.

#### Part 4: Leaderboard

- After a game is over, the game contacts the server and reports:
  - The names of the players.
  - Who won, lost, or if the game ended in a draw.
  - The size of the board.
- A leaderboard should be able to be viewed by the users at any time, and should display: 
  - A list of the top ten players,
  - The number of wins, losses, and draws for each player.
  - The largest board size that each player has won on.
- All data should be stored and fetched from the REST service included in this project.

#### Part 5: Variable win condition

- Before a new game is started, a user can set the number of pieces that must be in a row.

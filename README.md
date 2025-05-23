# TIC-TAC-TOE-GAME

**_Tic Tac Toe App (React) — Summary_**
This is an interactive two-player Tic Tac Toe game built using React functional components and hooks. It allows players to take turns marking squares on a 3x3 grid, automatically checks for winning conditions or a draw, and displays the outcome with a reset option.

**_Key Features_**
Player Customization: Players can change their display names.

Turn Management: Tracks and switches active players (X and O) using state.

Game Board Rendering: Renders a 3x3 grid with clickable squares.

Game Logic:

Stores all moves in a gameTurns array.

Reconstructs the board from turns.

Checks for a winner using predefined winning combinations.

Game Over Handling:

Displays "Player X wins!" or "It's a draw!".

Offers a "Play Again" button to reset the game.

Game Log: Displays a move history showing which player selected which square.

**_Technologies Used_**
React (with hooks): useState

Component-based Architecture:

App: Main controller

Player: Name input & active indicator

GameBoard: Interactive grid

Log: Turn history

GameOver: Game outcome screen

TIC TAC TOE Game (Javascript Project)

Project Definition:
This is a simple game that involves only two players.
Each player picks a symbol out of two existing options(X and O).
Players take turns in  filling up a 3x3 grid, the first player to 
get his/her symbol to match diagonally or horizontally wins.

Game Rules:
- X always goes first.
- First player to get his/her symbol to match diagonally or horizontally, wins.

Components(parts):
- User Interface (DONE)
- Get Inputs (DOING)
- Validate Inputs
- Match Checker * Checks if a player has matched his/her symbol *

Control Flow (Algorithm):
Step 1: Start
Step 2: Set variables
Step 3: Get players Input
Step 4: gameWon = MatchChecker();
Step 5: if gameWon then announceWinner();
        else go back to step 3
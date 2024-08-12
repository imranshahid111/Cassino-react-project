import React from 'react';
import Navbar from './Navbar';
import Right from './Right';

export default function Rules() {
    return (
        <div className='flex'>
        <div className='w-[60%]    poppins_thin'>
        <Navbar/>
        <div className='pl-10 text-wrap'>
            
            <h1 className='font-bold text-2xl'>Game Rules</h1>
            <pre>
{`Setup
Select a Number Range:
- Range: Define the minimum and maximum values for the number. For example, 1 to 10.

Generate a Secret Number:
- Secret Number: The game randomly kept secret from the players.

Set Maximum Attempts (optional):
- Define a limit on the number of guesses allowed. For example, 10 guesses.

Gameplay
Start the Game:
- Announce the range of numbers and, if applicable, the maximum number of attempts.
- Inform players that they need to guess the secret number.

Player Guesses:
- Players take turns  to provide their guesses.

Provide Feedback:
- For each guess, provide feedback to the player:
  - Too High: If the guess is higher than the secret number.
  - Too Low: If the guess is lower than the secret number.
  - Correct: If the guess matches the secret number.

End of Game:
- Win: The game ends when a player correctly guesses the secret number. Betting amount will be 2X.
- Lose: If the player lose Betting amount will be Lost.
                `}
            </pre>
        </div>
        </div>
        <Right/>
        </div>
    );
}


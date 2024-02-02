"use client";

import React, { useState } from 'react'

type GuessListProps = {
    guesses: number[];
    guessIsCorrect: boolean;
    setGuessIsCorrect: (value: boolean) => void;
    computerMakesGuess: () => void;
}

const GuessList = ({ guesses, guessIsCorrect, setGuessIsCorrect, computerMakesGuess }: GuessListProps) => {



    const higherGuess = () => {
        setGuessIsCorrect(false);
        computerMakesGuess();
    }

    const handleLowerGuess = () => {
        setGuessIsCorrect(false);
        computerMakesGuess();
    }


    const handleCorrectGuess = () => {

        setGuessIsCorrect(true);
    }




    return (
        <div>
            <ul>
                {

                    guesses.map((guess, index) => (
                        !guessIsCorrect &&
                        <div className='flex gap-4 items-center py-4'>
                            <li key={index}>{guess} Is Not Correct</li>
                            <button className='border border-black rounded-xl p-2' onClick={higherGuess}>Higher</button>
                            <button className='border border-black rounded-xl p-2' onClick={handleLowerGuess}>Lower</button>
                            <button className='border border-black rounded-xl p-2' onClick={handleCorrectGuess}>Correct</button>
                        </div>

                    ))



                }

                {guessIsCorrect && guesses.length > 0 && (
                    <div className='py-5'>
                        <p>{guesses[guesses.length - 1]} Is the Correct Guess!</p>
                    </div>
                )}

            </ul>
        </div>
    )
}

export default GuessList
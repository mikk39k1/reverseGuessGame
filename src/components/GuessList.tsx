"use client";


type GuessListProps = {
    guesses: number[];
    guessIsCorrect: boolean;
    setGuessIsCorrect: (value: boolean) => void;
    computerMakesGuess: (start: number, end: number) => void;
    setStart: (value: number) => void;
    setEnd: (value: number) => void;
    end: number;
    start: number;
}

const GuessList = ({ guesses, guessIsCorrect, setGuessIsCorrect, computerMakesGuess, setStart, setEnd, end, start }: GuessListProps) => {



    const handleHigherGuess = () => {
        const newStart = guesses[guesses.length - 1] + 1;
        setStart(newStart);
        computerMakesGuess(newStart, end);
    }

    const handleLowerGuess = () => {
        const newEnd = guesses[guesses.length - 1] - 1;
        setEnd(newEnd);
        computerMakesGuess(start, newEnd);
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
                        <div key={index} className='flex gap-4 items-center py-4'>
                            <li >{guess} Is Not Correct</li>
                            <button className='border border-black rounded-xl p-2' onClick={handleHigherGuess}>Higher</button>
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
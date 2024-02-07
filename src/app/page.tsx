"use client";

import GuessList from "@/components/GuessList";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const [guesses, setGuesses] = useState<number[]>([]);
  const [guessIsCorrect, setGuessIsCorrect] = useState<boolean>(false);
  const [start, setStart] = useState<number>(1);
  const [end, setEnd] = useState<number>(100);


  const computerMakesAGuess = (newStart = start, newEnd = end) => {
    const middle = Math.floor((newStart + newEnd) / 2);
    if (!guesses.includes(middle)) {
      setGuesses([...guesses, middle]);
    }
  };

  const resetGame = () => {
    setGuesses([]);
    setStart(1);
    setEnd(100);
    setGuessIsCorrect(false);
    router.refresh();
  }


  return (
    <main>
      <div className="flex flex-col items-center">
        <h1>Guess the Number</h1>

        <p>Think of a number between 1 and 100 - and i will guess it</p>
        
        <button className='border border-black rounded-xl p-2 bg-blue-200' onClick={() => computerMakesAGuess(start, end)}>Start Game</button>

        <GuessList
          guesses={guesses}
          guessIsCorrect={guessIsCorrect}
          setGuessIsCorrect={setGuessIsCorrect}
          computerMakesGuess={computerMakesAGuess}
          setStart={setStart}
          setEnd={setEnd}
          end={end}
          start={start}
        />

        {
          guessIsCorrect && (
            <div>
              <button onClick={resetGame} className='border border-black rounded-xl p-2'>Reset Game</button>
            </div>
          )
        }
      </div>




    </main>
  );
}

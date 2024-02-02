"use client";

import GuessList from "@/components/GuessList";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const [guesses, setGuesses] = useState<number[]>([]);
  const [guessIsCorrect, setGuessIsCorrect] = useState<boolean>(false);


  const computerMakesAGuess = () => {
    const randomGuess = Math.floor(Math.random() * 100) + 1;
    if (!guesses.includes(randomGuess)) {
      setGuesses([...guesses, randomGuess]);
    }
  }

  const resetGame = () => {
    setGuesses([]);
    setGuessIsCorrect(false);
    router.refresh();
  }


  return (
    <main>
      <div className="flex flex-col items-center">
        <h1>Guess the Number</h1>

        <p>Think of a number between 1 and 100 - and i will guess it</p>
        
        <button className='border border-black rounded-xl p-2 bg-blue-200' onClick={computerMakesAGuess}>Start Game</button>

        <GuessList
          guesses={guesses}
          guessIsCorrect={guessIsCorrect}
          setGuessIsCorrect={setGuessIsCorrect}
          computerMakesGuess={computerMakesAGuess}

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

import { useState } from 'react'
import './App.css';
import { GameGrid } from './Components/GameGrid';
import { Header } from './Components/Header';
import { Keyboard } from './Components/Keyboard';
import { MAX_TRIES, WORDS, WORD_TO_GUESS } from './constants';

function App() {
  const [guesses, setGuesses] = useState<string[]>([])
  const [currentGuess, setCurrentGuess] = useState("")
  const [solved, setSolved] = useState(false)
  const [solution, setSolution] = useState(WORD_TO_GUESS[Math.floor(Math.random() * WORD_TO_GUESS.length)].toUpperCase())

  const onCharEntered = (v: string) => {
    if ((currentGuess + v).length <= solution.length) {
      setCurrentGuess(currentGuess + v)
    }
  }

  const onEnterBtn = () => {
    if (
      guesses.length < MAX_TRIES && 
      currentGuess === solution
    ) {
      setSolved(true)
      alert('game won!')
      setGuesses([...guesses, currentGuess])
      setCurrentGuess("")
    } else if (guesses.length === MAX_TRIES - 1) {
      alert(`game lost! word was ${solution}`)
    } else if (currentGuess.length !== solution.length) {
      alert('not enough letters!')
    } else if (!WORDS.includes(currentGuess.toLowerCase())) {
      alert('not a valid word!')
    } else if (
      guesses.length < MAX_TRIES - 1 &&
      !solved
    ) {
      setGuesses([...guesses, currentGuess])
      setCurrentGuess("")
    }
  }

  const onDeleteBtn = () => {
    setCurrentGuess(currentGuess.slice(0, -1))
  }

  return (
    <div className="App">
      <Header />
      <GameGrid 
        guesses={guesses}
        currentGuess={currentGuess}
        solution={solution}
      />
      <Keyboard
        onCharEntered={onCharEntered}
        onEnterBtn={onEnterBtn}
        onDeleteBtn={onDeleteBtn}
      />
    </div>
  );
}

export default App;

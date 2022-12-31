import { MAX_TRIES } from "../constants"
import { CurrentGuessRow } from "./CurrentGuessRow"
import { EmptyRow } from "./EmptyRow"
import { NonEmptyRow } from "./NonEmptyRow"

type GameGridProps = {
    guesses: string[]
    currentGuess: string
    solution: string
}

export const GameGrid = ({
    guesses,
    currentGuess,
    solution
}: GameGridProps) => {
    let emptyRows: string[] = [];
    if (guesses.length < MAX_TRIES) {
        emptyRows = Array.from(Array(MAX_TRIES - guesses.length - 1))
    }

    return (
        <div className="grid grid-rows gap-1 mx-auto w-[300px] mt-[100px]">
            {guesses.map((guess, i) => (
                <NonEmptyRow
                    key={i}
                    guess={guess}
                    solution={solution}
                />
            ))}
            {guesses.length < MAX_TRIES && (
                <CurrentGuessRow 
                    currentGuess={currentGuess}
                />
            )}
            {emptyRows.map((_, i) => 
                <EmptyRow key={i} />
            )}
        </div>
    )
}
import { Cell } from "./Cell"

type CurrentGuessRowProps = {
    currentGuess: string
}
export const CurrentGuessRow = ({ currentGuess}: CurrentGuessRowProps) => {
    const emptyCells = Array.from(Array(5 - currentGuess.length))

    return (
        <div className="grid grid-cols-5">
            {currentGuess.split("").map((c, i) => <Cell key={i} c={c} />)}
            {emptyCells.map((_, i) => (
              <Cell key={i} c={''} />
            ))}
        </div>
    )
}
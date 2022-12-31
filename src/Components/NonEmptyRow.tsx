import { Cell } from "./Cell"

type NonEmptyRowProps = {
    guess: string
    solution: string
}
export const NonEmptyRow = ({ guess, solution }: NonEmptyRowProps) => {

    function getCharStatuses(guess: string, solution: string) {
        const statuses: string[] = []
        guess.split("").forEach((c, i) => {
            if (c === solution.charAt(i)) {
                statuses.push('correctPosition')
            } else if (solution.includes(c)) {
                statuses.push('incorrectPosition')
            } else {
                statuses.push('notPresent')
            }
        })
        return statuses
    }

    const charStatuses = getCharStatuses(guess, solution)

    return (
        <div className="grid grid-cols-5">
            {guess.split("").map((c, i) => <Cell key={i} charStatus={charStatuses[i]} c={c} />)}
        </div>
    )
}
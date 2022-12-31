import { Cell } from "./Cell"


export const EmptyRow = () => {
    const emptyCells = Array.from(Array(5))

    return (
        <div className="grid grid-cols-5">
            {emptyCells.map((_, i) => (
              <Cell key={i} c={''} />
            ))}
        </div>
    )
}

type CellProps = {
    c: string
    charStatus?: string
}
export const Cell = ({ c, charStatus }: CellProps) => {
    let defaultClassName = "font-mono text-2xl w-14 h-14 border border-solid rounded flex items-center justify-center"
    if (charStatus) {
        if (charStatus === 'correctPosition') {
            defaultClassName += " bg-sky-500"
        } else if (charStatus === 'incorrectPosition') {
            defaultClassName += " bg-zinc-500"
        }
    }

    return (
        <div className={defaultClassName}>
            {c}
        </div>
    )
}
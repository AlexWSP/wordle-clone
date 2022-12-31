
type KeyProps = {
    k: string
    handleClick: (v: string) => void
}
export const Key = ({ k, handleClick }: KeyProps) => {
    let className = "font-mono font-bold text-xs h-14 mx-0.5 mt-1 border border-solid rounded items-center justify-center"
    if (k === "ENTER") {
        className += " w-12"
    } else if (k === "DELETE") {
        className += " w-20"
    } else {
        className += " w-8"
    }
    
    return (
        <button
            className={className}
            onClick={() => handleClick(k)}
        >
            {k}
        </button>
    )
}
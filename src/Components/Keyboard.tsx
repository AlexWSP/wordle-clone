import { useEffect } from 'react'

type KeyboardProps = {
    onCharEntered: (v: string) => void
    onEnterBtn: () => void
    onDeleteBtn: () => void
}
export const Keyboard = ({ 
    onCharEntered, 
    onEnterBtn,
    onDeleteBtn
}: KeyboardProps) => {

    useEffect(() => {
        const eventListener = (e: KeyboardEvent) => {
            if (e.code === 'Enter') {
                onEnterBtn()
            } else if (e.code === 'Backspace') {
                onDeleteBtn()
            } else {
                const key = e.key.toUpperCase()
                if (key.length === 1 && key >= 'A' && key <= 'Z') {
                    onCharEntered(key)
                }
            }
        }
        window.addEventListener('keyup', eventListener)
        return () => {
            window.removeEventListener('keyup', eventListener)
        }
    }, [onCharEntered, onDeleteBtn, onEnterBtn])

    return (
        <>
            <div>
                {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map(key => (
                    key
                ))}
                delete
            </div>
            <div>
                {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(key => (
                    key
                ))}
                enter
            </div>
            <div>
                {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map(key => (
                    key
                ))}
            </div>
        </>
    )
}
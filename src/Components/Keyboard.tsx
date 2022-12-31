import { useEffect } from 'react'
import { Key } from './Key'

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

    const handleClick = (v: string) => {
        if (v === 'ENTER') {
            onEnterBtn()
        } else if (v === 'DELETE') {
            onDeleteBtn()
        } else {
            onCharEntered(v)
        }
    }

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
        <div className="mt-10">
            <div>
                {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map(k => (
                    <Key
                        k={k}
                        key={k}
                        handleClick={handleClick}
                    />
                ))}
            </div>
            <div>
                {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(k => (
                    <Key
                        k={k}
                        key={k}
                        handleClick={handleClick}
                    />
                ))}
            </div>
            <div>
                {['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE'].map(k => (
                    <Key
                        k={k}
                        key={k}
                        handleClick={handleClick}
                    />
                ))}
            </div>
        </div>
    )
}
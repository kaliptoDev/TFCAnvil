import './Cursor.css'
import useCursorPosition from '../../hooks/useCursorPosition'
import { useEffect, useState } from 'react'

const Cursor = () => {

    const { cursorPosition, setCursorPosition } = useCursorPosition()
    const [offset, setOffset] = useState('0px')

    const handleSliderChange = () => (event) => {
        setCursorPosition(event.target.value)
        setOffset(`${event.target.value * (451 / 150) + 1}px`)
    }

    const handleCursorPosition = (position) => {
        setCursorPosition(position)
        setOffset(`${position * (451 / 150) + 1}px`)
    }

    useEffect(() => {
        handleCursorPosition(cursorPosition)
    }
        , [cursorPosition]);

    return (
        <div className='cursor__slider'>
            <img src={`/images/anvil/cursor.png`} alt="cursor" className="cursor__image" style={{ left: offset }} />
            <input type="range" min="0" max="145" defaultValue={0} className="cursor__slider__input" onChange={handleSliderChange()} />
        </div>
    )
}

export default Cursor
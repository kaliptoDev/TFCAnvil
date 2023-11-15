import './Anvil.css'
import useUserRequierementsChoices from '../../hooks/useUserRequierementsChoices'
import DisplayCase from '../DisplayCase/DisplayCase'
import Cursor from '../Cursor/Cursor'
import useCursorPosition from '../../hooks/useCursorPosition'
import { useEffect } from 'react'
import getOptimizedPath from '../../utils/utils'

const Anvil = () => {

    const { cursorPosition, setCursorPosition } = useCursorPosition()
    const { userRequierementsChoices, setUserRequierementsChoices } = useUserRequierementsChoices()

    const handleReset = () => {
        setUserRequierementsChoices([])
    }

    const handleCounterChange = (value) => {
        value<0 ? value=0 : value>145 ? value=145 : value=value
        setCursorPosition(value)
    }

    useEffect(() => {
        getOptimizedPath(userRequierementsChoices, cursorPosition)
    },
        [userRequierementsChoices, cursorPosition]);



    return (
        <div className="anvil">
            <img src="/images/anvil/full-anvil.png" alt="anvil" className="anvil__image" />

            <div className="anvil__container">
                <div className='anvil__container__counter'>
                    <input type="number" className="anvil__counter__input" min="0" max="145" onChange={(e) => handleCounterChange(e.target.value)} value={cursorPosition} />
                </div>
                <div className='anvil__container__cases'>
                    <DisplayCase position={1} content={userRequierementsChoices[0]} />
                    <DisplayCase position={2} content={userRequierementsChoices[1]} />
                    <DisplayCase position={3} content={userRequierementsChoices[2]} />
                </div>
                <div className='reset__container' onClick={() => handleReset()}>
                    <img src="/icons/red-cross.png" alt="red-cross" className="anvil__red-cross" />
                    <span className='reset__span'>RESET</span>
                </div>

                <Cursor />
            </div>

        </div>
    )
}

export default Anvil
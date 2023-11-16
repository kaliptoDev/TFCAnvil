import './Anvil.css'
import useUserRequierementsChoices from '../../hooks/useUserRequierementsChoices'
import DisplayCase from '../DisplayCase/DisplayCase'
import Cursor from '../Cursor/Cursor'
import useCursorPosition from '../../hooks/useCursorPosition'
import { useEffect, useState } from 'react'
import getOptimizedPath from '../../utils/utils'
import ResultCase from '../ResultCase/ResultCase'

const Anvil = () => {

    const { cursorPosition, setCursorPosition } = useCursorPosition()
    const { userRequierementsChoices, setUserRequierementsChoices } = useUserRequierementsChoices()

    const [maxValue, setMaxValue] = useState(0)
    const [result, setResult] = useState([])

    const handleReset = () => {
        setUserRequierementsChoices([])
    }

    const handleCounterChange = (value) => {
        value < 0 ? value = 0 : value > 145 ? value = 145 : value = value
        setCursorPosition(value)
    }

    useEffect(() => {
        setResult(getOptimizedPath(userRequierementsChoices, cursorPosition, maxValue, setMaxValue))
    },
        [userRequierementsChoices, cursorPosition]);

    useEffect(() => {
        // console.log(maxValue)
    },
        [maxValue]);

    const handlePushNewChoice = (choice) => {
        if (userRequierementsChoices.length < 3) {
            setUserRequierementsChoices([...userRequierementsChoices, choice])
        } else {
            let buffer = userRequierementsChoices
            buffer.shift()

            setUserRequierementsChoices([...buffer, choice])
        }
    }

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

                <div className='anvil__container__inputs'>
                    <div className='anvil__container__inputs__firstline'>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("any-hit") }}
                        >
                        </div>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("small-hit") }}
                        >
                        </div>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("medium-hit") }}
                        >
                        </div>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("punch") }}
                        >
                        </div>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("bend") }}
                        >
                        </div>
                    </div>
                    <div className='anvil__container__inputs__secondline'>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("hard-hit") }}>
                        </div>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("draw") }}
                        >
                        </div>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("upset") }}
                        >
                        </div>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("shrink") }}
                        >
                        </div>
                    </div>
                </div>



                <Cursor />

                <div className='anvil__container__result'>
                    {result.length > 0 ? result.map((item, index) => {
                        return <ResultCase key={index} position={index + 1} content={item} />
                    }
                    )
                        : <ResultCase position={1} content={null} />
                    }
                </div>

                <div className='anvil__container__version'>
                    <span className='anvil__container__version__span'>v1.1.2</span>
                </div>
            </div>

        </div>
    )
}

export default Anvil
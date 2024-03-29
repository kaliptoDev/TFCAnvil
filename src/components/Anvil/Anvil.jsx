import './Anvil.css'
import useUserRequierementsChoices from '../../hooks/useUserRequierementsChoices'
import DisplayCase from '../DisplayCase/DisplayCase'
import Cursor from '../Cursor/Cursor'
import useCursorPosition from '../../hooks/useCursorPosition'
import { useEffect, useState } from 'react'
import getOptimizedPath from '../../utils/utils'
import ResultCase from '../ResultCase/ResultCase'
import shortid from 'shortid';

const Anvil = () => {

    const { cursorPosition, setCursorPosition } = useCursorPosition()
    const { userRequierementsChoices, setUserRequierementsChoices } = useUserRequierementsChoices()

    const [maxValue, setMaxValue] = useState(0)
    const [result, setResult] = useState([])
    const [resultNumbers, setResultNumbers] = useState([])
    const [display, setDisplay] = useState(localStorage.getItem('resultDisplay'))

    const handleReset = () => {
        setUserRequierementsChoices([])
    }

    const handleCounterChange = (value) => {
        if (value < 0) {
            value = 0;
        } else if (value > 145) {
            value = 145;
        }
        setCursorPosition(value);
    }

    useEffect(() => {
        setResult(getOptimizedPath(userRequierementsChoices, cursorPosition, maxValue, setMaxValue))
        if (localStorage.getItem('resultDisplay') == 'numbers') {
            setResultNumbers(getResultsInNumbers(getOptimizedPath(userRequierementsChoices, cursorPosition, maxValue, setMaxValue)))
        }
    },
        [userRequierementsChoices, cursorPosition, display]);

    useEffect(() => {
        if (!localStorage.getItem('resultDisplay')) {
            localStorage.setItem('resultDisplay', 'cases')
            setDisplay('cases')
        }
    },
        []);

    // useEffect(() => {
    //     setResult(getOptimizedPath(userRequierementsChoices, cursorPosition, maxValue, setMaxValue))
    //     if (localStorage.getItem('resultDisplay') == 'numbers') {
    //         setResultNumbers(getResultsInNumbers())
    //     }
    // }, [display])

    const handlePushNewChoice = (choice) => {
        if (userRequierementsChoices.length < 3) {
            setUserRequierementsChoices([...userRequierementsChoices, choice])
        } else {
            let buffer = userRequierementsChoices
            buffer.shift()

            setUserRequierementsChoices([...buffer, choice])
        }
    }

    const handleSwitch = () => {
        if (localStorage.getItem('resultDisplay') === 'cases') {
            localStorage.setItem('resultDisplay', 'numbers')
            setDisplay('numbers')
            setResultNumbers(getResultsInNumbers())
        }
        else {
            localStorage.setItem('resultDisplay', 'cases')
            setDisplay('cases')
        }
    }

    // console.log(result)

    const getResultsInNumbers = (elements) => {
        let results = [];
        let currentElement = null;
        let count = 0;

        for (const element of elements) {
            if (currentElement === null) {
                currentElement = element;
                count++;
            } else if (currentElement === element) {
                count++;
            } else {
                results.push({ name: currentElement, count });
                currentElement = element;
                count = 1;
            }
        }
        results.push({ name: currentElement, count });
        return results
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
                <div className='reset__container' onClick={() => handleReset()}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleReset() }}
                >
                    <img src="/icons/red-cross.png" alt="red-cross" className="anvil__red-cross" />
                    <span className='reset__span'>RESET</span>
                </div>

                <div className='switch__container' onClick={() => handleSwitch()}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSwitch() }}
                >
                    <span className='switch__span' >Switch Display</span>
                </div>

                <div className='anvil__container__inputs'>
                    <div className='anvil__container__inputs__firstline'>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("any-hit") }}
                            onKeyDown={(e) => { if (e.key === 'Enter') handlePushNewChoice("any-hit") }}
                        >
                        </div>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("small-hit") }}
                            onKeyDown={(e) => { if (e.key === 'Enter') handlePushNewChoice("small-hit") }}
                        >
                        </div>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("medium-hit") }}
                            onKeyDown={(e) => { if (e.key === 'Enter') handlePushNewChoice("medium-hit") }}
                        >
                        </div>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("punch") }}
                            onKeyDown={(e) => { if (e.key === 'Enter') handlePushNewChoice("punch") }}
                        >
                        </div>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("bend") }}
                            onKeyDown={(e) => { if (e.key === 'Enter') handlePushNewChoice("bend") }}
                        >
                        </div>
                    </div>
                    <div className='anvil__container__inputs__secondline'>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("hard-hit") }}
                            onKeyDown={(e) => { if (e.key === 'Enter') handlePushNewChoice("hard-hit") }}
                        >

                        </div>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("draw") }}
                            onKeyDown={(e) => { if (e.key === 'Enter') handlePushNewChoice("draw") }}
                        >
                        </div>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("upset") }}
                            onKeyDown={(e) => { if (e.key === 'Enter') handlePushNewChoice("upset") }}
                        >
                        </div>
                        <div className='anvil__container__inputs__input'
                            onClick={() => { handlePushNewChoice("shrink") }}
                            onKeyDown={(e) => { if (e.key === 'Enter') handlePushNewChoice("shrink") }}
                        >
                        </div>
                    </div>
                </div>



                <Cursor />

                <div className='anvil__container__result'>
                    {
                        display === 'cases' ?
                            result?.length > 0 ?
                                result.map((item, index) => {
                                    return (
                                        <ResultCase key={shortid.generate()} position={index + 1} content={item} />
                                    )
                                }) :

                                <ResultCase key={0} position={1} content={null} />

                            :
                            resultNumbers.map((item, index) => {
                                return (
                                    <div key={shortid.generate()} className='anvil__container__result__number'>
                                        <ResultCase key={shortid.generate()} position={index + 1} content={item.name} />
                                        <span className='anvil__container__result__number__span'>
                                            {item.count > 0 &&
                                                " x" +
                                                item.count}
                                        </span>
                                    </div>
                                )
                            })
                    }
                </div>

                <div className='anvil__container__version'>
                    <span className='anvil__container__version__span'>v1.1.3.7</span>
                </div>
            </div>

        </div>
    )
}

export default Anvil
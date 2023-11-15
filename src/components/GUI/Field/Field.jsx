import './Field.css'

import { useState } from 'react'

const Field = ({ label, type, name, value, onChange, placeholder = '' }) => {

    const [isFocus, setIsFocus] = useState(false)
    
    const handleFocus = () => {
        setIsFocus(true)
    }
    
    return (
        <div className={`field ${isFocus ? 'focus' : ''}`}>
        <label htmlFor={name}>{label}</label>
        <input
            onFocus={handleFocus}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
        </div>
    )
    }

export default Field
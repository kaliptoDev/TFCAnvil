import { useState, useEffect } from "react";
import { createContext } from "react";

export const CursorPositionContext = createContext(
    {
        cursorPosition: "",
        setCursorPosition: () => { }
    }
);

const CursorPositionProvider = ({ children }) => {
    
        const [cursorPosition, setCursorPosition] = useState(0);
    
        useEffect(() => {
            localStorage.setItem('cursorPosition', JSON.stringify(cursorPosition));
        }, [cursorPosition]);

        useEffect(() => {
            localStorage.setItem('cursorPosition', JSON.stringify(cursorPosition));
        }, []);
    
        return (
            <CursorPositionContext.Provider value={{ cursorPosition, setCursorPosition }}>
                {children}
            </CursorPositionContext.Provider>
        )
    }

export default CursorPositionProvider

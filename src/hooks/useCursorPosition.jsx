import { useContext } from "react";
import { CursorPositionContext } from "../providers/CursorPositionProvider";

const useCursorPosition = () => {
    const context = useContext(CursorPositionContext);

    if (!context) {
        throw new Error('useCursorPosition must be used within a CursorPositionProvider');
    }

    return context;

}

export default useCursorPosition;
import { useContext } from "react";
import { UserRequierementsChoicesContext } from "../providers/UserRequierementsChoices";

const useUserRequierementsChoices = () => {
    const context = useContext(UserRequierementsChoicesContext);

    if (!context) {
        throw new Error('useUserRequierementsChoices must be used within a UserRequierementsChoicesProvider');
    }

    return context;

}

export default useUserRequierementsChoices;
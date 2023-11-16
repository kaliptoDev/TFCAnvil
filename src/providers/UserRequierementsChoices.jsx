import { useState, createContext, useEffect } from 'react';

export const UserRequierementsChoicesContext = createContext(
    {
        userRequierementsChoices: [],
        setUserRequierementsChoices: () => { }
    }
);

const UserRequierementsChoicesProvider = ({ children }) => {

    const [userRequierementsChoices, setUserRequierementsChoices] = useState([]);

    useEffect(() => {
        localStorage.setItem('userRequierementsChoices', JSON.stringify(userRequierementsChoices));
        setUserRequierementsChoices([]);
    }, []);

    useEffect(() => {
        localStorage.setItem('userRequierementsChoices', JSON.stringify(userRequierementsChoices));
    }
        , [userRequierementsChoices]);

    return (
        <UserRequierementsChoicesContext.Provider value={{ userRequierementsChoices, setUserRequierementsChoices }}>
            {children}
        </UserRequierementsChoicesContext.Provider>
    )
}

export default UserRequierementsChoicesProvider
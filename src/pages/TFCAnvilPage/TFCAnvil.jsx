import './TFCAnvil.css'

import Anvil from '../../components/Anvil/Anvil'
import UserRequierementsChoicesProvider from '../../providers/UserRequierementsChoices'
import CursorPositionProvider from '../../providers/CursorPositionProvider'



const TFCAnvil = () => {



    return (

        <CursorPositionProvider>
            <UserRequierementsChoicesProvider>
                <Anvil />
            </UserRequierementsChoicesProvider>
        </CursorPositionProvider>

    )

}

export default TFCAnvil

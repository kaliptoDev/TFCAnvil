import './Error.css'
import { Navigate } from 'react-router-dom'

const Error = () => {

    return (

        <Navigate to="/" />

        // <div className="Error">
        //     <h1>This is an error page.</h1>
        //     <div className='error__link'>
        //         <a href="/">Go back to the home page</a>
        //     </div>
        // </div>
    )
}

export default Error
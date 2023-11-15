import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';

const RoutesTree = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default RoutesTree
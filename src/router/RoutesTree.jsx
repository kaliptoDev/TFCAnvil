import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const RoutesTree = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default RoutesTree
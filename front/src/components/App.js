import { BrowserRouter,Routes,Route } from 'react-router-dom';
import GlobalStyle from '../theme/globalstyles.js'
import UserContext from '../contexts/UserContext.js';
import { useState } from 'react';
import Login from '../pages/Login.js';
import Register from '../pages/Register.js';
import InitialPage from '../pages/InitialPage.js';
import RankingPage from '../pages/RankingPage.js';
import UrlPage from '../pages/UrlPage.js';
import 'react-toastify/dist/ReactToastify.css';

export default function App(){
    const [token,setToken] = useState(localStorage.getItem('authToken'));

    const userContext = {
        token,
        setToken
    }

    return(
        <BrowserRouter>
            <GlobalStyle />
            <UserContext.Provider value={userContext}>
                <Routes>
                    <Route path='/' element={<InitialPage />} />
                    <Route path='/signin' element={<Login />} />
                    <Route path='/signup' element={<Register />} />
                    <Route path='/ranking' element={<RankingPage />} />
                    <Route path='/urls/:id' element={<UrlPage />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}
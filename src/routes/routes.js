import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Lojas from '../pages/lojas'


function Ways () {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/lojas' element={<Lojas />}/>
            </Routes>
        </>
    )
}

export default Ways
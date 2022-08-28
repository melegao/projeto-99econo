import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Lojas from '../pages/lojas'
import OneLoja from '../pages/oneLoja'


function Ways () {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/lojas' element={<Lojas />}/>
                <Route exact path='/lojas/:loja' element={<OneLoja />}/>
            </Routes>
        </>
    )
}

export default Ways
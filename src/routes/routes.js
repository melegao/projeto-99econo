import { Routes, Route } from 'react-router-dom'
import BasicModal from '../components/modal'
import Home from '../pages/home'
import Lojas from '../pages/lojas'
import OneLoja from '../pages/oneLoja'


function Ways () {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/lojas' element={<Lojas />}/>
                <Route exact path='/lojas/:loja/:id' element={<OneLoja />}/>
                <Route exact path='/modal' element={<BasicModal />}/>
            </Routes>
        </>
    )
}

export default Ways
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Header from "../../components/header"
import { lomadeeAppToken, lomadeeSourceId } from "../../database/lomadee";
import axios from "axios";


function OneLoja () {

    const { loja, id } = useParams()
    
    
    const [allStores, setAllStores] = useState([]);
    const [notFoundStore, setNotFoundStore] = useState(false)

    useEffect(() => {
        axios.get(`https://api.lomadee.com/v2/${lomadeeAppToken}/coupon/_stores?sourceId=${lomadeeSourceId}`)
            .then((res) => setAllStores(res.data.stores))
            .catch((err) => console.log(err))    

            
    }, []);



    return (
        <>
            {notFoundStore?
                <>
                <Header />
                <h2>Oppps</h2>
                <p>Não conseguimos encontrar essa página</p>
                <p>Reporte um erro ou contnue navegando</p>
                <p>{loja}</p>
                <p>{id}</p>
                </>
            : 
                <>
                <Header />
                <h1>Olá, eu sou uma loja!</h1>
                <p>{loja}</p>
                <p>{id}</p>
                </>
            }
        </>
    )
}

export default OneLoja
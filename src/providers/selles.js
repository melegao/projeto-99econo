import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { lomadeeAppToken, lomadeeSourceId, baseUrl } from "../database/lomadee";


export const SellersContext = createContext([]);

export const SellersProvider = ({ children }) => {

    const [allSellers, setAllSellers] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}${lomadeeAppToken}/coupon/_stores?sourceId=${lomadeeSourceId}`)
            .then((res) => setAllSellers(res.data.stores))
            .catch((err) => console.log(err))

    }, []);

    return (
        <SellersContext.Provider value={{allSellers, setAllSellers}}>
            {children}
        </SellersContext.Provider>
    )
}
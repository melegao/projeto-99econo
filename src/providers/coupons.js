import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { lomadeeAppToken, lomadeeSourceId } from "../database/lomadee";

export const CouponContext = createContext([]);

export const CouponsProvider = ({ children }) => {

    const [allCupons, setAllCupons] = useState([]);

    useEffect(() => {
        axios
          .get(
            `https://api.lomadee.com/v2/${lomadeeAppToken}/coupon/_all?sourceId=${lomadeeSourceId}`
          )
          .then((res) => setAllCupons(res.data.coupons))
          .catch((err) => console.log(err));

      }, []);


    return (
        <CouponContext.Provider value={{ setAllCupons, allCupons }}>
            {children}
        </CouponContext.Provider>
    )
}
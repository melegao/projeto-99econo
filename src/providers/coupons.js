import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { lomadeeAppToken, lomadeeSourceId, baseUrl } from "../database/lomadee";

export const CouponContext = createContext([]);

export const CouponsProvider = ({ children }) => {

    const [allCupons, setAllCupons] = useState([]);

    useEffect(() => {
        axios
          .get(
            `${baseUrl}${lomadeeAppToken}/coupon/_all?sourceId=${lomadeeSourceId}`
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
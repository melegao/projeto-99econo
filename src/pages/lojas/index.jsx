import Header from "../../components/header"
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { lomadeeAppToken, lomadeeSourceId } from "../../database/lomadee";
import CardLoja from "../../components/cardLoja";

const DivRenderStore = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;


function Lojas () {

    const [allStores, setAllStores] = useState([]);

    useEffect(() => {
        axios.get(`https://api.lomadee.com/v2/${lomadeeAppToken}/coupon/_stores?sourceId=${lomadeeSourceId}`)
            .then((res) => setAllStores(res.data.stores))
            .catch((err) => console.log(err))

    }, []);


    return (
        <>
            <Header />
            <DivRenderStore>
                {allStores.map((elem) => (
                    <CardLoja key={elem.id} store={elem}/>
                ))}
            </DivRenderStore>
        </>
    )
}

export default Lojas
import { useContext } from "react";
import { useParams } from "react-router-dom"
import CardCupom from "../../components/cardCupom";
import Header from "../../components/header"
import { CouponContext } from '../../providers/coupons'
import styled from "styled-components";

function OneLoja () {
    
    const { loja } = useParams()
    
    const { allCupons } = useContext(CouponContext)

    const filteredStore = allCupons.filter((elem) => elem.store.name.toLowerCase().split(' ').join('-').normalize("NFD").replace(/[\u0300-\u036f]/g, "") === loja)
    
    const DivRenderCard = styled.div`
        display: flex;
        align-self: center;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    `;

    return (
        <>
            <Header />
            <DivRenderCard>
                {filteredStore.map((elem) => (
                    <CardCupom key={elem.id} cupom={elem}/>
                ))}
            </DivRenderCard>
            
        </>
    )
}

export default OneLoja
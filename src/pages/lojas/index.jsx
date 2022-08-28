import Header from "../../components/header"
import styled from "styled-components";
import { useContext } from "react";
import CardLoja from "../../components/cardLoja";
import { SellersContext } from "../../providers/selles";

const DivRenderStore = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;


function Lojas () {

    const { allSellers } = useContext(SellersContext)



    return (
        <>
            <Header />
            <DivRenderStore>
                {allSellers.map((elem) => (
                    <CardLoja key={elem.id} store={elem}/>
                ))}
            </DivRenderStore>
        </>
    )
}

export default Lojas
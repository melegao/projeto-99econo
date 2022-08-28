import styled from "styled-components";
import CardCupom from "../../components/cardCupom";
import { useContext } from "react";
import { CouponContext } from "../../providers/coupons";
import NavBar from "../../components/navBar";

const DivRenderCard = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

function Home() {

 const { allCupons } = useContext(CouponContext)

  return (
    <>
      
      <NavBar />
      <DivRenderCard>
        {allCupons.map((elem) => (
          <CardCupom key={elem.id} cupom={elem} />
        ))}
      </DivRenderCard>
    </>
  );
}

export default Home;
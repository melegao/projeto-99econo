import styled from "styled-components";
import { useContext } from "react";
import CardCupom from "../../components/cardCupom";
import Header from "../../components/header";

import { CouponContext } from "../../providers/coupons";

const DivRenderCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Home() {

 const { allCupons } = useContext(CouponContext)

  return (
    <>
      <Header />
      <DivRenderCard>
        {allCupons.map((elem) => (
          <CardCupom key={elem.id} cupom={elem} />
        ))}
      </DivRenderCard>
    </>
  );
}

export default Home;
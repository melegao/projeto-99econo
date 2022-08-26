import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { lomadeeAppToken, lomadeeSourceId } from "../../database/lomadee";
import CardCupom from "../../components/cardCupom";
import Header from "../../components/header";

const DivRenderCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Home() {
  
  const [allCupons, setAllCupons] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.lomadee.com/v2/${lomadeeAppToken}/coupon/_all?sourceId=${lomadeeSourceId}`
      )
      .then((res) => setAllCupons(res.data.coupons))
      .catch((err) => console.log(err));

    console.log(allCupons);
  }, []);

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
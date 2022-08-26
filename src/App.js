import axios from "axios";
import { lomadeeAppToken, lomadeeSourceId } from "./database/lomadee";
import { useEffect, useState } from "react";
import CardCupom from "./components/cardCupom";
import styled from "styled-components";
import Header from "./components/header";
import Ways from "./routes/routes";

const DivRenderCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  // LINKS DO LOMADEE

  // https://www.socialsoul.com.vc/dashboard/#/channels
  // https://developer.socialsoul.com.vc/lab/tutoriais/afiliados/novas-apis-de-ofertas-cupons-e-deeplink.html
  // https://developer.socialsoul.com.vc/afiliados/ofertas/recursos-v3/buscar-categorias/
  // https://developer.socialsoul.com.vc/afiliados/cupons/recursos/buscar-cupons/
  // https://developer.socialsoul.com.vc/minha-conta/
  // https://www.figma.com/file/ZtPr2BusEpQpPP63QKV29U/Coupon-Site-(Community)?node-id=0%3A1

  const baseURL = `https://api.lomadee.com/v2/${lomadeeAppToken}/coupon/_all?sourceId=${lomadeeSourceId}&storeId=5800`;

  const [cupons, setCupons] = useState(false);
  const [list, setList] = useState([]);
  const [allCupons, setAllCupons] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.lomadee.com/v2/${lomadeeAppToken}/coupon/_all?sourceId=${lomadeeSourceId}`
      )
      .then((res) => setAllCupons(res.data.coupons))
      .catch((err) => console.log(err));

    setCupons(true);
    console.log(allCupons);
  }, []);

  return (
    <>
      <Ways />
    </>
  );
}

export default App;

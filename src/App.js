import Ways from "./routes/routes";

import { CouponsProvider } from "./providers/coupons";
import { SellersProvider } from "./providers/selles";

function App() {

  return (
    <>
      <CouponsProvider>
        <SellersProvider>
          <Ways />
        </SellersProvider>
      </CouponsProvider>

    </>
  );
}

export default App;

import Ways from "./routes/routes";

import { CouponsProvider } from "./providers/coupons";

function App() {

  return (
    <>
      <CouponsProvider>
        <Ways />
      </CouponsProvider>

    </>
  );
}

export default App;

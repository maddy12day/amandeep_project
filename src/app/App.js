import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import MobileVerification from "./views/Onboarding/MobileVerification";
import Onboarding from "./views/Onboarding/onboarding";
import Signup from "./views/Onboarding/Signup";

function App() {
  return (
    <BrowserRouter>
      <Layout
        component={
          // <Routes>
          //   <Route path="/" element={<Signup />} />
          // </Routes>
          <Routes>
            <Route path="/" element={<MobileVerification />} />
          </Routes>
        }
      />
    </BrowserRouter>
  );
}

export default App;

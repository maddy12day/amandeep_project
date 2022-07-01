import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Onboarding from "./views/Onboarding/onboarding";
import Signup from "./views/Onboarding/Signup";

function App() {
  return (
    <BrowserRouter>
      <Layout
        component={
          <Routes>
            <Route path="/" element={<Signup />} />
          </Routes>
        }
      />
    </BrowserRouter>
  );
}

export default App;

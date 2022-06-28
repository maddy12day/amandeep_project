import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Onboarding from "./views/Onboarding/onboarding";

function App() {
  return (
    <BrowserRouter>
      <Layout
        component={
          <Routes>
            <Route path="/" element={<Onboarding />} />
          </Routes>
        }
      />
    </BrowserRouter>
  );
}

export default App;

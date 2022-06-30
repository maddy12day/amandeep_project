import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
// import Onboarding from "./views/Onboarding/onboarding";
import Profile from "./views/Verify/profile";

function App() {
  return (
    <BrowserRouter>
      <Layout
        component={
          <Routes>
            <Route path="/" element={<Profile />} />
          </Routes>
        }
      />
    </BrowserRouter>
  );
}

export default App;

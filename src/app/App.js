import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Signup from "./views/Onboarding/Signup";
import Profile from "./views/Verify/profile";

function App() {
  return (
    <BrowserRouter>
      <Layout
        component={
          // <Routes>
          //   <Route path="/" element={<Signup />} />
          // </Routes>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/verify" element={<Profile />} />
          </Routes>
        }
      />
    </BrowserRouter>
  );
}

export default App;

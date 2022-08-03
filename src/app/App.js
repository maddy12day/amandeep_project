import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Signup from "./views/Onboarding/Signup";
import Profile from "./views/Verify/profile";
import MobileVerification from"./views/Onboarding/MobileVerification"; 
import { useState } from "react";
import Finish from "./views/Onboarding/finish";
import Early from "./views/Onboarding/early-acess";

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
            <Route path="/verify" element={<MobileVerification />} />
            <Route path="/verify/:code" element={<MobileVerification />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/finish" element={<Finish/>}/>
            <Route path="/early-acess" element={<Early/>}/>
          </Routes>
        }
      />
    </BrowserRouter>
  );
}

export default App;

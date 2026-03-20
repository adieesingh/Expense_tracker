import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { Bounce, ToastContainer } from "react-toastify";
import { Signup } from "./pages/Signup";
import { DashBoard } from "./pages/DashBoard";

import { Home } from "./pages/Home";
import { LandingPage } from "./pages/LandingPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;

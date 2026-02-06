import { BrowserRouter, Route, Routes } from "react-router-dom"

import { SignIn } from "./pages/SignIn"
import { Bounce, ToastContainer } from "react-toastify"
import { Signup } from "./pages/Signup"


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignIn></SignIn>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>


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
  )
}

export default App

import { useState } from "react";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { toast } from "react-toastify";

export const Signup = () => {
 const[formData,setFormData]=useState({
  name:"",
  email:"",
  password:""
 })
  const navigate = useNavigate();
  const [error, setError] = useState<Record<string,string>>({});
  const handleRegsiter = async () => {
    try {
      
      const res = await axios.post("http://localhost:3000/api/v1/signup", formData);
      if (res) {
        navigate("/signin");
        toast.success("Signup Successfully");
      }
    } catch (err) {
      //@ts-ignore
     if(err.response && err.response.data.errors ){
      //@ts-ignore
      setError(err.response.data.errors)
     }
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg p-6 sm:p-8">
        <Heading text="Sign Up"></Heading>
        <p className="text-center text-sm text-gray-500 mt-1">
          Welcome to your's Personal Expense Tracker
        </p>
        <div className="mt-6 space-y-4">
          <InputBox
            text="Name"
            type="text"
            value={formData.name}
            placeholder="John Doe"
            onChange={(e) => setFormData({...formData,name:e.target.value})}
          ></InputBox>

          {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
          <InputBox
            text="Email"
            type="text"
            value={formData.email}
            placeholder="your@email.com"
            onChange={(e) => setFormData({...formData,email:e.target.value})}
          ></InputBox>
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
          <InputBox
            text="Password"
            type="password"
            value={formData.password}
            placeholder="********"
            onChange={(e) => setFormData({...formData,password:e.target.value})}
          ></InputBox>
          {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
          <Button text="Sign Up" onClick={handleRegsiter}></Button>
        </div>
        <Footer
          message="Already have a account"
          text="Sign In"
          link="/signin"
        ></Footer>
      </div>
    </div>
  );
};

import { useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Heading } from "../components/Heading";
import { Bottom } from "../components/Botttom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate=useNavigate();
  const [error, setError] = useState<Record<string,string>>({});
  const handleLogin = async () => {
    try {
      setError({});
      const res = await axios.post(
        "http://localhost:3000/api/v1/signin",
        formData,
      );
      if (res) {
        localStorage.setItem("token", res.data.token);
        toast.success("Sign In Succesfully ")
        navigate('/dashboard')

      }
    } catch (err) {
      //@ts-ignore
      if (err.response && err.response.data.errors) {
        //@ts-ignore
        setError(err.response.data.errors);
      }
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* Card */}
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg p-6 sm:p-8">
        {/* Heading */}
        <Heading text="Sign In"></Heading>
        <p className="text-center text-sm text-gray-500 mt-1">
          Welcome back! Please sign in
        </p>

        {/* Form */}
        <div className="mt-6 space-y-4">
          {/* Email */}
          <InputBox
            placeholder="you@gmail.com"
            text="Email"
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          ></InputBox>
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
          {/* Password */}
          <InputBox
            placeholder="*******"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            text="Password"
            type="password"
            value={formData.password}
          ></InputBox>
          {error.password && (
            <p className="text-red-500 text-sm">{error.password}</p>
          )}
          {/* Forgot password */}
          <Bottom text="Forgot Password?"></Bottom>

          {/* Button */}
          <Button text="Sign In" onClick={handleLogin}></Button>
        </div>

        {/* Footer */}
        <Footer
          message="Don't have a account"
          text="Sign Up"
          link="/signup"
        ></Footer>
      </div>
    </div>
  );
}

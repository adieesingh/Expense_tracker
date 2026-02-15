import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { NavBar } from "../components/NavBar";
type BarChart = {
  amount: number;
  category: string;
};
export const Chart = () => {
  const [data, setData] = useState<BarChart[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(
        (res) => setData(res.data.message),
        (res) => {
          console.log(res.data.message);
        },
      )
      .catch((err) => console.log(err.data));
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <NavBar></NavBar>
      <div className=" ">
        <BarChart className="max-w-md " data={data}>
          <Bar dataKey="amount" fill="green"></Bar>
          <CartesianGrid stroke="#ccc"></CartesianGrid>
          <XAxis dataKey="category"></XAxis>
          <YAxis></YAxis>
        </BarChart>
      </div>
    </div>
  );
};

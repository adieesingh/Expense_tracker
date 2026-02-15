import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import axios from "axios";
import { BarChart } from "recharts";

export const Home = () => {
  const [data,setData]=useState("");
  console.log(data)
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/summary", {
      headers: { Authorization: localStorage.getItem("token") },
    }).then((res)=>setData(res.data)).catch((err)=>console.log(err))
  },[]);
  return (
    <>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-18">
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Income</h2>
          <p className="text-2xl font-bold text-green-600">{data.income}</p>
        </div>

        <div className="bg-red-100 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Expense</h2>
          <p className="text-2xl font-bold text-red-600">{data.expense}</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Balance</h2>
          <p className="text-2xl font-bold text-blue-600">{data.balance}</p>
        </div>
      </div>
      <div>
        <BarChart >

        </BarChart>
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import axios from "axios";
import { IncomeExpenseChart } from "../components/IncomeExpenseChart";
import { PieChartCategories } from "../components/PieChartCategories";
import { TransactionTable } from "../components/TranscationTable";

interface dataProps {
  balance: number;
  expense: number;
  income: number;
  monthName?: string;
}

export const Home = () => {
  const [data, setData] = useState<dataProps[]>([]);
  const [pie, setPie] = useState([]);
  const [transcation, setTranscation] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/summary", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3000/api/v1/expense", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => setPie(res.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3000/api/v1/user", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => setTranscation(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/delete/${id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      // @ts-ignore
      setTranscation((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.log("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      
      <main className="px-4 sm:px-6 lg:px-8 py-6 mt-16 max-w-7xl mx-auto">

       
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-100 p-5 rounded-xl shadow flex flex-col gap-1">
            <h2 className="text-sm font-semibold text-green-800 uppercase tracking-wide">
              Total Income
            </h2>
            <p className="text-2xl font-bold text-green-600">
              {data.length === 0 ? (
                <span className="text-base font-normal text-green-400">Loading…</span>
              ) : (
                `₹${data[1]?.income ?? 0}`
              )}
            </p>
          </div>

          <div className="bg-red-100 p-5 rounded-xl shadow flex flex-col gap-1">
            <h2 className="text-sm font-semibold text-red-800 uppercase tracking-wide">
              Total Expense
            </h2>
            <p className="text-2xl font-bold text-red-600">
              {data.length === 0 ? (
                <span className="text-base font-normal text-red-400">Loading…</span>
              ) : (
                `₹${data[1]?.expense ?? 0}`
              )}
            </p>
          </div>

          <div className="bg-blue-100 p-5 rounded-xl shadow flex flex-col gap-1">
            <h2 className="text-sm font-semibold text-blue-800 uppercase tracking-wide">
              Balance
            </h2>
            <p className="text-2xl font-bold text-blue-600">
              {data.length === 0 ? (
                <span className="text-base font-normal text-blue-400">Loading…</span>
              ) : (
                `₹${data[1]?.balance ?? 0}`
              )}
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-base font-semibold mb-2 text-gray-700">
              Income vs Expense
            </h2>
            <IncomeExpenseChart data={data} />
          </div>

          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-base font-semibold mb-2 text-gray-700">
              Expense by Category
            </h2>
            <PieChartCategories data={pie} />
          </div>
        </div>

      
        <TransactionTable data={transcation} onDelete={handleDelete} />
      </main>
    </div>
  );
};
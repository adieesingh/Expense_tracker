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
    console.log(data);
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
      //@ts-ignore
      setTranscation((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.log("Deleted failed");
    }
  };
  return (
    <>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-18">
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Income</h2>
          <p className="text-2xl font-bold text-green-600">
            {data.length === 0 ? <p>Loading..</p> : data[1]?.income}
          </p>
        </div>

        <div className="bg-red-100 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Expense</h2>
          <p className="text-2xl font-bold text-red-600">
            {data.length === 0 ? <p>Loading..</p> : data[1]?.expense}
          </p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Balance</h2>
          <p className="text-2xl font-bold text-blue-600">
            {data.length === 0 ? <p>Loading..</p> : data[1]?.balance}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1">
        <div className="col-span-1">
          <IncomeExpenseChart data={data}></IncomeExpenseChart>
        </div>
        <div className="col-span-1">
          <PieChartCategories data={pie}></PieChartCategories>
        </div>
        <TransactionTable
          data={transcation}
          onDelete={handleDelete}
        ></TransactionTable>
      </div>
    </>
  );
};

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// interface dataProps {
//   balance?: number;
//   expense?: number;
//   income?: number;
//   monthName?: string;
// }
export const IncomeExpenseChart =({data}:any)=>{
    return(
        <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="monthName" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Bar dataKey="income" fill="#22c55e" />
          <Bar dataKey="expense" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    )
}
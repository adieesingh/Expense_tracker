export const TranscationForm = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Add Transaction</h2>

      <input
        type="number"
        placeholder="Amount"
        className="w-full border p-2 rounded mb-3"
      />

      <select className="w-full border p-2 rounded mb-3">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input type="date" className="w-full border p-2 rounded mb-3" />

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Add
      </button>
    </div>
  );
};

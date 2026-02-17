export const TransactionTable = ({ data, onDelete }: any) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>

      {data.length === 0 ? (
        <p className="text-gray-500 text-center">No transactions found</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Date</th>
              <th className="p-3">Category</th>
              <th className="p-3">Type</th>
              <th className="p-3">Amount</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item: any) => (
              <tr key={item._id} className="border-b hover:bg-gray-50">
                
                <td className="p-3">
                  {new Date(item.date).toLocaleDateString()}
                </td>

                <td className="p-3">{item.category}</td>

                <td
                  className={`p-3 font-medium ${
                    item.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.type}
                </td>

                <td className="p-3 font-semibold">
                  ₹{item.amount}
                </td>

                <td className="p-3 text-center space-x-2">
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(item._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

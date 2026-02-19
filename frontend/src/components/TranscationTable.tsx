export const TransactionTable = ({ data, onDelete }: any) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>

      {data.length === 0 ? (
        <p className="text-gray-500 text-center py-6">No transactions found</p>
      ) : (
        <>
          {/* Desktop table — hidden on small screens */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 rounded-tl-lg">Date</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3 text-center rounded-tr-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any) => (
                  <tr key={item._id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-3">{new Date(item.date).toLocaleDateString()}</td>
                    <td className="p-3">{item.category}</td>
                    <td className={`p-3 font-medium ${item.type === "income" ? "text-green-600" : "text-red-600"}`}>
                      {item.type}
                    </td>
                    <td className="p-3 font-semibold">₹{item.amount}</td>
                    <td className="p-3 text-center space-x-2">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm transition-colors">
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(item._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card list — shown only on small screens */}
          <div className="flex flex-col gap-3 sm:hidden">
            {data.map((item: any) => (
              <div key={item._id} className="border rounded-lg p-4 bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-sm font-semibold px-2 py-0.5 rounded-full ${
                    item.type === "income"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {item.type}
                  </span>
                  <span className="font-bold text-gray-800">₹{item.amount}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.category}</p>
                <p className="text-gray-400 text-xs mt-1">
                  {new Date(item.date).toLocaleDateString()}
                </p>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm transition-colors">
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(item._id)}
                    className="flex-1 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 text-sm transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
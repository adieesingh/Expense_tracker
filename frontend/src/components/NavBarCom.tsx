import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

type TransactionType = "income" | "expense";

const CATEGORIES = {
  expense: [
    "Food",
    "Transport",
    "Shopping",
    "Bills",
    "Health",
    "Entertainment",
    "Other",
  ],
  income: ["Salary", "Freelance", "Investment", "Gift", "Other"],
};

export const NavBarCom = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [txType, setTxType] = useState<TransactionType>("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(CATEGORIES.expense[0]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };
    if (modalOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [modalOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const openModal = (type: TransactionType) => {
    setTxType(type);
    setCategory(CATEGORIES[type][0]);
    setAmount("");
    setDescription("");
    setError("");
    setSuccess(false);
    setDate(new Date().toISOString().split("T")[0]);
    setModalOpen(true);
    setMenuOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSuccess(false);
    setError("");
  };

  const switchType = (type: TransactionType) => {
    setTxType(type);
    setCategory(CATEGORIES[type][0]);
  };

  const handleSubmit = async () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setError("Please enter a valid amount.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await axios.post(
        "http://localhost:3000/api/v1/transcation",
        { type: txType, amount: Number(amount), category, date, description },
        { headers: { Authorization: localStorage.getItem("token") } },
      );
      setSuccess(true);
      setAmount("");
      setDescription("");
      setTimeout(closeModal, 1400);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [{ label: "Dashboard", path: "/home", icon: "📊" }];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button
            onClick={() => navigate("/home")}
            className="flex items-center gap-2 font-bold text-lg tracking-tight text-gray-900"
          >
            Fin<span className="text-green-500">Track</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, path, icon }) => (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(path)
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span>{icon}</span> {label}
              </button>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => openModal("income")}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
            >
              <span className="text-base">＋</span> Income
            </button>
            <button
              onClick={() => openModal("expense")}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
            >
              <span className="text-base">－</span> Expense
            </button>
            <div className="w-px h-6 bg-gray-200 mx-1" />
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1 shadow-lg">
            {navLinks.map(({ label, path, icon }) => (
              <button
                key={path}
                onClick={() => {
                  navigate(path);
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-colors ${
                  isActive(path)
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span>{icon}</span> {label}
              </button>
            ))}
            <div className="h-px bg-gray-100 my-1" />
            <button
              onClick={() => openModal("income")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-green-600 bg-green-50 hover:bg-green-100 transition-colors"
            >
              ＋ Add Income
            </button>
            <button
              onClick={() => openModal("expense")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-red-500 bg-red-50 hover:bg-red-100 transition-colors"
            >
              － Add Expense
            </button>
            <div className="h-px bg-gray-100 my-1" />
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        )}
      </header>

      {/* ── Add Transaction Modal ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div
            ref={modalRef}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            {/* Modal header */}
            <div
              className={`px-6 py-5 flex items-center justify-between ${txType === "income" ? "bg-green-50" : "bg-red-50"}`}
            >
              <h2 className="text-lg font-bold text-gray-900">
                {txType === "income" ? "➕ Add Income" : "➖ Add Expense"}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Type toggle */}
            <div className="px-6 pt-5">
              <div className="flex bg-gray-100 rounded-xl p-1 gap-1">
                <button
                  onClick={() => switchType("income")}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                    txType === "income"
                      ? "bg-white text-green-600 shadow-sm"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  💰 Income
                </button>
                <button
                  onClick={() => switchType("expense")}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                    txType === "expense"
                      ? "bg-white text-red-500 shadow-sm"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  💸 Expense
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="px-6 pb-6 pt-4 flex flex-col gap-4">
              {/* Amount */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition bg-white"
                >
                  {CATEGORIES[txType].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                />
              </div>

              {/* Note */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Note{" "}
                  <span className="text-gray-300 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lunch at restaurant"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-500 text-sm bg-red-50 px-4 py-2.5 rounded-xl">
                  {error}
                </p>
              )}

              {/* Success */}
              {success && (
                <p className="text-green-600 text-sm bg-green-50 px-4 py-2.5 rounded-xl text-center font-medium">
                  ✅ Transaction added successfully!
                </p>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={loading || success}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  txType === "income"
                    ? "bg-green-500 hover:bg-green-600 text-white shadow-[0_4px_15px_rgba(34,197,94,0.35)]"
                    : "bg-red-500 hover:bg-red-600 text-white shadow-[0_4px_15px_rgba(239,68,68,0.35)]"
                } disabled:opacity-60 disabled:cursor-not-allowed`}
              >
                {loading
                  ? "Saving…"
                  : success
                    ? "Saved! ✓"
                    : `Add ${txType === "income" ? "Income" : "Expense"}`}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

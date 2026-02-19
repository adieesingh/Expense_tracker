import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">

      {/* ── Soft background blobs ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-200 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-blue-200 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-emerald-100 rounded-full blur-[100px] opacity-60" />
      </div>

      {/* ── Navbar ── */}
      <nav className="relative z-10 flex items-center justify-between px-6 sm:px-12 py-5 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <span className="text-xl font-black tracking-tight">
          Fin<span className="text-green-500">Track</span>
        </span>
        <div className="hidden sm:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Features</a>
          <a href="#cta"      className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Get Started</a>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/login")}
            className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-600 hover:-translate-y-0.5 shadow-md shadow-green-200 transition-all"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 pt-20 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left copy */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-1.5 text-green-700 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Personal Finance Tracker
          </div>

          <h1 className="text-5xl sm:text-6xl font-black leading-[1.05] tracking-tight mb-6 text-gray-900">
            Know where every{" "}
            <span className="text-green-500">rupee</span>{" "}
            of yours <span className="text-red-400">goes</span>.
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
            Track income, expenses, and balance across months — with beautiful charts and instant insights. Simple, fast, and free.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/signup")}
              className="bg-green-500 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-green-600 hover:-translate-y-0.5 shadow-lg shadow-green-200 transition-all"
            >
              Start for free →
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-gray-700 text-base px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
            >
              Sign in
            </button>
          </div>

          {/* Trust line */}
          <p className="mt-6 text-xs text-gray-400 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No credit card required · Free forever
          </p>
        </div>

        {/* Right — dashboard preview cards */}
        <div className="relative flex flex-col gap-4">

          {/* Decorative ring */}
          <div className="absolute -inset-4 bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl blur-2xl opacity-60 -z-10" />

          {/* Income */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg px-6 py-5 flex items-center justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1 font-medium">Total Income</p>
              <p className="text-3xl font-black text-green-500">₹84,200</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">💰</div>
          </div>

          {/* Expense */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg px-6 py-5 flex items-center justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1 font-medium">Total Expense</p>
              <p className="text-3xl font-black text-red-400">₹32,450</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-2xl">📉</div>
          </div>

          {/* Balance */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg px-6 py-5 flex items-center justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1 font-medium">Net Balance</p>
              <p className="text-3xl font-black text-blue-500">₹51,750</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">📊</div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-3 -right-3 bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md shadow-green-200">
            ✓ Updated live
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 mt-4">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 overflow-hidden">
          {[
            { num: "10K+",  label: "Transactions tracked", color: "text-green-500" },
            { num: "₹2Cr+", label: "Money monitored",      color: "text-blue-500"  },
            { num: "100%",  label: "Free to use",          color: "text-emerald-500" },
          ].map(({ num, label, color }) => (
            <div key={label} className="py-8 text-center">
              <div className={`text-3xl font-black ${color}`}>{num}</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Features ── */}
      <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 mt-24">
        <p className="text-xs text-green-600 uppercase tracking-widest font-semibold mb-2">What you get</p>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-10 max-w-md leading-tight text-gray-900">
          Everything to master your finances
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: "📊", title: "Monthly Bar Charts",  desc: "Visualise income vs expense month by month with clean, interactive bar charts.", bg: "bg-green-50",  border: "border-green-100"  },
            { icon: "🥧", title: "Category Breakdown",  desc: "See exactly where your money goes with a colour-coded pie chart by category.",  bg: "bg-blue-50",   border: "border-blue-100"   },
            { icon: "🧾", title: "Transaction History", desc: "Full log of every transaction with the ability to edit or delete on the fly.",   bg: "bg-amber-50",  border: "border-amber-100"  },
            { icon: "💡", title: "Balance Tracking",    desc: "Always know your net balance — updated instantly as you add transactions.",      bg: "bg-purple-50", border: "border-purple-100" },
            { icon: "🔐", title: "Secure Auth",         desc: "JWT-backed login keeps your financial data private and protected.",              bg: "bg-rose-50",   border: "border-rose-100"   },
            { icon: "📱", title: "Fully Responsive",    desc: "Works seamlessly on mobile, tablet, and desktop — track on any device.",        bg: "bg-teal-50",   border: "border-teal-100"   },
          ].map(({ icon, title, desc, bg, border }) => (
            <div
              key={title}
              className={`${bg} border ${border} rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200`}
            >
              <span className="text-2xl mb-4 block">{icon}</span>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section id="cta" className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 mt-24 mb-16">
        <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl px-8 sm:px-16 py-16 text-center overflow-hidden shadow-xl shadow-green-200">
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />

          <h2 className="relative text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Ready to take control?
          </h2>
          <p className="relative text-green-100 text-base mb-8">
            Join today and start tracking in under 60 seconds.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="relative bg-white text-green-600 font-bold text-base px-10 py-4 rounded-full hover:bg-gray-50 hover:-translate-y-0.5 shadow-lg transition-all"
          >
            Create your free account →
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-gray-200 bg-white py-6 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} FinTrack · Built by Adarsh Singh
      </footer>
    </div>
  );
};
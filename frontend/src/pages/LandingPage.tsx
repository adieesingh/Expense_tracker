import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap');

        .font-display { font-family: 'Syne', sans-serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }

        .feature-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .feature-card:hover { transform: translateY(-6px); }

        .nav-pill {
          position: relative;
          padding: 6px 16px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #6b7280;
          transition: all 0.2s;
          letter-spacing: 0.01em;
        }
        .nav-pill::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: transparent;
          transition: background 0.2s;
        }
        .nav-pill:hover {
          color: #111;
          background: #f3f4f6;
        }

        .glow-green { box-shadow: 0 0 40px 0 rgba(34,197,94,0.18); }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float-card { animation: float 4s ease-in-out infinite; }
        .float-card:nth-child(2) { animation-delay: 0.7s; }
        .float-card:nth-child(3) { animation-delay: 1.4s; }
      `}</style>

      
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-125 h-125 bg-green-200 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-1/2 -right-40 w-100 h-100 bg-blue-200 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-0 left-1/3 w-75 h-75 bg-emerald-100 rounded-full blur-[100px] opacity-60" />
      </div>

     
      <nav className="relative z-10 flex items-center justify-between px-6 sm:px-12 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-2.5">
         
          <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center shadow-md shadow-green-200 shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
             
              <rect
                x="1"
                y="10"
                width="3"
                height="6"
                rx="1"
                fill="white"
                fillOpacity="0.6"
              />
              <rect
                x="6"
                y="6"
                width="3"
                height="10"
                rx="1"
                fill="white"
                fillOpacity="0.8"
              />
              <rect x="11" y="2" width="3" height="14" rx="1" fill="white" />
              
              <polyline
                points="1.5,12 6,7 10,9 16,3"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                opacity="0"
              />
            </svg>
          </div>
          <span className="font-display text-xl font-black tracking-tight">
            Fin<span className="text-green-500">Track</span>
          </span>
        </div>

        {/* Center nav links as pill group */}
        <div className="hidden sm:flex items-center gap-1 bg-gray-100 rounded-full px-1.5 py-1.5">
          <a href="#features" className="nav-pill font-body">
            Features
          </a>
          <a href="#cta" className="nav-pill font-body">
            Get Started
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/login")}
            className="hidden sm:block font-body text-sm font-semibold text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="font-body bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-600 hover:-translate-y-0.5 shadow-md shadow-green-200 transition-all"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 pt-20 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-1.5 text-green-700 text-xs font-semibold uppercase tracking-widest mb-6 font-body">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Personal Finance Tracker
          </div>

          <h1 className="font-display text-5xl sm:text-6xl font-black leading-[1.05] tracking-tight mb-6 text-gray-900">
            Know where every <span className="text-green-500">rupee</span> of
            yours <span className="text-red-400">goes</span>.
          </h1>

          <p className="font-body text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
            Track income, expenses, and balance across months — with beautiful
            charts and instant insights. Simple, fast, and free.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/signup")}
              className="font-body bg-green-500 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-green-600 hover:-translate-y-0.5 shadow-lg shadow-green-200 transition-all"
            >
              Start for free →
            </button>
            <button
              onClick={() => navigate("/login")}
              className="font-body bg-white text-gray-700 text-base px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
            >
              Sign in
            </button>
          </div>

          <p className="mt-6 text-xs text-gray-400 flex items-center gap-1.5 font-body">
            <svg
              className="w-3.5 h-3.5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            No credit card required · Free forever
          </p>
        </div>

        {/* Right — dashboard preview cards */}
        <div className="relative flex flex-col gap-4">
          <div className="absolute -inset-4 bg-linear-to-br from-green-100 to-blue-100 rounded-3xl blur-2xl opacity-60 -z-10" />

          {[
            {
              label: "Total Income",
              value: "₹84,200",
              color: "text-green-500",
              bg: "bg-green-100",
              icon: "💰",
              delay: "0s",
            },
            {
              label: "Total Expense",
              value: "₹32,450",
              color: "text-red-400",
              bg: "bg-red-100",
              icon: "📉",
              delay: "0.7s",
            },
            {
              label: "Net Balance",
              value: "₹51,750",
              color: "text-blue-500",
              bg: "bg-blue-100",
              icon: "📊",
              delay: "1.4s",
            },
          ].map(({ label, value, color, bg, icon, delay }) => (
            <div
              key={label}
              className="bg-white rounded-2xl border border-gray-100 shadow-lg px-6 py-5 flex items-center justify-between float-card"
              style={{ animationDelay: delay }}
            >
              <div>
                <p className="font-body text-xs text-gray-400 uppercase tracking-widest mb-1 font-medium">
                  {label}
                </p>
                <p className={`font-display text-3xl font-black ${color}`}>
                  {value}
                </p>
              </div>
              <div
                className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center text-2xl`}
              >
                {icon}
              </div>
            </div>
          ))}

          <div className="absolute -bottom-3 -right-3 bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md shadow-green-200 font-body">
            ✓ Updated live
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 mt-4">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 overflow-hidden">
          {[
            {
              num: "10K+",
              label: "Transactions tracked",
              color: "text-green-500",
            },
            { num: "₹2Cr+", label: "Money monitored", color: "text-blue-500" },
            { num: "100%", label: "Free to use", color: "text-emerald-500" },
          ].map(({ num, label, color }) => (
            <div key={label} className="py-8 text-center">
              <div className={`font-display text-3xl font-black ${color}`}>
                {num}
              </div>
              <div className="font-body text-xs text-gray-400 uppercase tracking-widest mt-1 font-medium">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Features ── */}
      <section
        id="features"
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 mt-24"
      >
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-3 py-1 text-green-700 text-xs font-semibold uppercase tracking-widest mb-3 font-body">
              What you get
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight max-w-md leading-tight text-gray-900">
              Everything to master your finances
            </h2>
          </div>
          <p className="font-body text-sm text-gray-400 max-w-xs leading-relaxed sm:text-right">
            All the tools you need, nothing you don't. Built for clarity.
          </p>
        </div>

        {/* Feature grid — alternating accent colors with bolder visual design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: "📊",
              title: "Monthly Bar Charts",
              desc: "Visualise income vs expense month by month with clean, interactive bar charts.",
              accent: "#22c55e",
              lightBg: "#f0fdf4",
              border: "#bbf7d0",
              tag: "Charts",
            },
            {
              icon: "🥧",
              title: "Category Breakdown",
              desc: "See exactly where your money goes with a colour-coded pie chart by category.",
              accent: "#3b82f6",
              lightBg: "#eff6ff",
              border: "#bfdbfe",
              tag: "Insights",
            },
            {
              icon: "🧾",
              title: "Transaction History",
              desc: "Full log of every transaction with the ability to edit or delete on the fly.",
              accent: "#f59e0b",
              lightBg: "#fffbeb",
              border: "#fde68a",
              tag: "History",
            },
            {
              icon: "💡",
              title: "Balance Tracking",
              desc: "Always know your net balance — updated instantly as you add transactions.",
              accent: "#a855f7",
              lightBg: "#faf5ff",
              border: "#e9d5ff",
              tag: "Tracking",
            },
            {
              icon: "🔐",
              title: "Secure Auth",
              desc: "JWT-backed login keeps your financial data private and protected.",
              accent: "#f43f5e",
              lightBg: "#fff1f2",
              border: "#fecdd3",
              tag: "Security",
            },
            {
              icon: "📱",
              title: "Fully Responsive",
              desc: "Works seamlessly on mobile, tablet, and desktop — track on any device.",
              accent: "#14b8a6",
              lightBg: "#f0fdfa",
              border: "#99f6e4",
              tag: "Design",
            },
          ].map(({ icon, title, desc, accent, lightBg, border, tag }) => (
            <div
              key={title}
              className="feature-card rounded-2xl p-6 relative overflow-hidden group cursor-default"
              style={{ background: lightBg, border: `1.5px solid ${border}` }}
            >
              {/* Top row: icon + tag */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-sm"
                  style={{
                    background: `${accent}18`,
                    border: `1.5px solid ${accent}30`,
                  }}
                >
                  {icon}
                </div>
                <span
                  className="font-body text-xs font-semibold rounded-full px-2.5 py-1 uppercase tracking-wider"
                  style={{ color: accent, background: `${accent}15` }}
                >
                  {tag}
                </span>
              </div>

              <h3 className="font-display font-bold text-gray-900 mb-2 text-base">
                {title}
              </h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed">
                {desc}
              </p>

              {/* Subtle bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-60"
                style={{
                  background: `linear-gradient(to right, ${accent}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="cta"
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 mt-24 mb-16"
      >
        <div className="relative bg-linear-to-br from-green-500 to-emerald-600 rounded-3xl px-8 sm:px-16 py-16 text-center overflow-hidden shadow-xl shadow-green-200 glow-green">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />

          <h2 className="font-display relative text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Ready to take control?
          </h2>
          <p className="font-body relative text-green-100 text-base mb-8">
            Join today and start tracking in under 60 seconds.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="font-body relative bg-white text-green-600 font-bold text-base px-10 py-4 rounded-full hover:bg-gray-50 hover:-translate-y-0.5 shadow-lg transition-all"
          >
            Create your free account →
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-gray-200 bg-white py-6 text-center text-gray-400 text-xs font-body">
        © {new Date().getFullYear()} FinTrack · Built by Adarsh Singh
      </footer>
    </div>
  );
};

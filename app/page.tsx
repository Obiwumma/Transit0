// src/app/page.tsx
import {
  getTotalBookings,
  getTotalRevenue,
  getMostPopularRoute,
  generateAIInsight
} from '../lib/analytics';

// Notice we added "async" right here!
export default async function Dashboard() {
  const totalBookings = getTotalBookings();
  const totalRevenue = getTotalRevenue();
  const popularRoute = getMostPopularRoute();

  // Notice we added "await" right here!
  const aiInsight = await generateAIInsight();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-8 font-sans relative overflow-hidden">
      {/* Futuristic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <header className="mb-12 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-bold shadow-[0_0_10px_rgba(99,102,241,0.5)] text-slate-900">
              N
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              NomadCore Command
            </h1>
          </div>
          <p className="text-slate-400 mt-2 text-sm tracking-wide uppercase font-semibold">Real-time Telemetry & USSD Grid</p>
        </header>

        {/* The "Smart AI" Alert Card */}
        <div className="relative mb-10 group">
          {/* Animated border glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">
                System Intelligence Active
              </span>
            </div>
            <p className="text-xl font-light leading-relaxed text-slate-200 mb-6">
              {aiInsight}
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] flex items-center gap-2">
              Execute Surge Protocol
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </button>
          </div>
        </div>

        {/* Top Level Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Total Grid Bookings</h3>
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">{totalBookings}</p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Projected Revenue</h3>
            <p className="text-4xl font-bold text-emerald-400 tracking-tight">₦{totalRevenue.toLocaleString()}</p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Optimal Route</h3>
              <p className="text-2xl font-bold text-white truncate">
                {popularRoute.route?.origin} <span className="text-slate-600 px-1">→</span> {popularRoute.route?.destination}
              </p>
            </div>
            <p className="text-sm text-cyan-400 font-medium mt-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              {popularRoute.count} active signals
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

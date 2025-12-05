"use client"
import { Home, ArrowLeft, MapPinOff } from 'lucide-react';

export default function Custom404() {
    return (
        <div className="min-h-screen bg-sky-50 relative overflow-hidden flex flex-col items-center justify-start pt-32 font-sans">
            <style>{`
        @keyframes roll {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes drive-road {
          0% { background-position: 0px 0px; }
          100% { background-position: -100px 0px; }
        }
        @keyframes bump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes wind {
          0% { transform: translateX(120vw); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateX(-120vw); opacity: 0; }
        }
        @keyframes drive-across {
            from { transform: translateX(-150%); }
            to { transform: translateX(120vw); }
        }

        .animate-spin-slow { animation: roll 1s linear infinite; }
        .animate-road { animation: drive-road 0.5s linear infinite; }
        .animate-truck-body { animation: bump 1s ease-in-out infinite; }
        .animate-drive-across { animation: drive-across 20s linear infinite; }

        .cloud-1 { animation: wind 35s linear infinite; }
        .cloud-2 { animation: wind 45s linear infinite; animation-delay: 5s; }
        .cloud-3 { animation: wind 28s linear infinite; animation-delay: 2s; }
      `}</style>

            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-50">
                    <div className="cloud-1 absolute top-10 w-32 h-12 bg-white rounded-full blur-xl"></div>
                    <div className="cloud-2 absolute top-32 w-48 h-16 bg-white rounded-full blur-xl"></div>
                    <div className="cloud-3 absolute top-60 w-40 h-14 bg-white rounded-full blur-xl"></div>
                </div>

                <div className="absolute bottom-24 left-0 right-0 flex items-end justify-center opacity-20 space-x-16">
                    <div className="w-24 h-32 bg-slate-400"></div>
                    <div className="w-16 h-40 bg-slate-500"></div>
                    <div className="w-28 h-24 bg-slate-400"></div>
                    <div className="w-32 h-48 bg-slate-600"></div>
                    <div className="w-20 h-28 bg-slate-400"></div>
                </div>

                <div className="absolute bottom-0 w-full h-28 bg-slate-700 border-t-4 border-slate-600">
                    <div className="w-[120%] h-full flex items-center animate-road">
                        <div className="w-full border-t-4 border-dashed border-yellow-400 opacity-80 mt-4"></div>
                    </div>
                </div>

                <div className="absolute bottom-28 left-0 w-[340px] h-32 animate-drive-across will-change-transform">
                    <div className="animate-truck-body w-full h-full relative">
                        <div className="absolute bottom-4 left-0 w-48 h-32 bg-slate-700 rounded-sm border border-slate-600 shadow-sm flex items-center justify-center">
                            <div className="absolute top-0 bottom-0 left-4 w-1 bg-black/10"></div>
                            <div className="absolute top-0 bottom-0 right-4 w-1 bg-black/10"></div>
                            <div className="w-36 h-20 border-2 border-dashed border-slate-500/50 flex items-center justify-center">
                                <span className="text-slate-500 font-bold text-3xl opacity-50">404</span>
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-48 w-4 h-3 bg-slate-800"></div>

                        <div className="absolute bottom-4 right-0 w-32 h-24 bg-indigo-600 rounded-lg shadow-lg border-b-4 border-indigo-800 overflow-hidden">
                            <div className="absolute top-2 right-4 w-16 h-10 bg-sky-300 rounded-sm border-2 border-indigo-700 opacity-80">
                                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tr from-transparent to-white opacity-40"></div>
                            </div>
                            <div className="absolute top-8 left-3">
                                <div className="w-8 h-1 bg-white/30 rounded mb-1"></div>
                                <div className="w-12 h-1 bg-white/30 rounded mb-1"></div>
                                <div className="text-[9px] font-bold text-white/50 tracking-widest mt-2">LOGISTICS</div>
                            </div>
                            <div className="absolute bottom-2 right-0 w-2 h-4 bg-yellow-400 rounded-l-sm shadow-[0_0_15px_rgba(250,204,21,0.6)]"></div>
                        </div>

                        <div className="absolute -bottom-1 left-4 animate-spin-slow">
                            <div className="w-12 h-12 bg-slate-800 rounded-full border-4 border-slate-300 flex items-center justify-center">
                                <div className="w-5 h-5 bg-slate-400 rounded-full border border-slate-600"></div>
                            </div>
                        </div>
                        <div className="absolute -bottom-1 left-32 animate-spin-slow">
                            <div className="w-12 h-12 bg-slate-800 rounded-full border-4 border-slate-300 flex items-center justify-center">
                                <div className="w-5 h-5 bg-slate-400 rounded-full border border-slate-600"></div>
                            </div>
                        </div>
                        <div className="absolute -bottom-1 right-6 animate-spin-slow">
                            <div className="w-12 h-12 bg-slate-800 rounded-full border-4 border-slate-300 flex items-center justify-center">
                                <div className="w-5 h-5 bg-slate-400 rounded-full border border-slate-600"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-6 shadow-sm">
                    <MapPinOff className="w-8 h-8 text-red-500" />
                </div>
                <h1 className="text-8xl font-black text-slate-800 mb-2 tracking-tighter">404</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">Shipment Not Found</h2>

                <div className="flex gap-4 justify-center">
                    <button onClick={() => window.history.back()} className="px-6 py-3 rounded-lg border-2 border-slate-300 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold hover:bg-slate-100 transition-colors flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Go Back
                    </button>

                    <button onClick={() => (window.location.href = '/')} className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1 flex items-center gap-2">
                        <Home className="w-4 h-4" /> Back to Home
                    </button>
                </div>
            </div>

        </div>
    );
}

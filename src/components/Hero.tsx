import { Download, Sparkles, Shield, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-300">Curated Android TV Apps</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Discover the Best Apps
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              For Your Smart TV
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore our curated collection of streaming, live TV, launchers, and essential apps
            for Android TV and smart TV platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center space-x-2 group">
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              <span className="font-semibold">Browse Apps</span>
            </button>
            <button className="bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-all border border-slate-700">
              Installation Guide
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <Shield className="h-8 w-8 text-blue-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">Safe & Verified</h3>
              <p className="text-slate-400 text-sm">All apps are tested and verified for security</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <Zap className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">Easy Install</h3>
              <p className="text-slate-400 text-sm">Simple download codes and installation guides</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <Sparkles className="h-8 w-8 text-blue-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">Regular Updates</h3>
              <p className="text-slate-400 text-sm">Fresh content and new apps added weekly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

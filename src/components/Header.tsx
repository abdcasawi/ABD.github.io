import { Tv2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-lg">
              <Tv2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">SmartTV Hub</h1>
              <p className="text-xs text-slate-400">Android TV Apps Directory</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#streaming" className="text-slate-300 hover:text-white transition-colors">Streaming</a>
            <a href="#live-tv" className="text-slate-300 hover:text-white transition-colors">Live TV</a>
            <a href="#launchers" className="text-slate-300 hover:text-white transition-colors">Launchers</a>
            <a href="#guide" className="text-slate-300 hover:text-white transition-colors">Guide</a>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all">
              Join Community
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-slate-700">
            <a href="#streaming" className="block text-slate-300 hover:text-white transition-colors">Streaming</a>
            <a href="#live-tv" className="block text-slate-300 hover:text-white transition-colors">Live TV</a>
            <a href="#launchers" className="block text-slate-300 hover:text-white transition-colors">Launchers</a>
            <a href="#guide" className="block text-slate-300 hover:text-white transition-colors">Guide</a>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all">
              Join Community
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

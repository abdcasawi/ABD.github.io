import { Tv2, MessageCircle, Mail, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-lg">
                <Tv2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">SmartTV Hub</h3>
                <p className="text-xs text-slate-400">Apps Directory</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Your trusted source for discovering and installing the best Android TV applications.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#streaming" className="text-slate-400 hover:text-white transition-colors text-sm">Streaming Apps</a></li>
              <li><a href="#live-tv" className="text-slate-400 hover:text-white transition-colors text-sm">Live TV</a></li>
              <li><a href="#launchers" className="text-slate-400 hover:text-white transition-colors text-sm">Launchers</a></li>
              <li><a href="#guide" className="text-slate-400 hover:text-white transition-colors text-sm">Installation Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Setup Guides</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Troubleshooting</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">App Reviews</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-blue-500 transition-all">
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-blue-500 transition-all">
                <Mail className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-blue-500 transition-all">
                <Github className="h-5 w-5 text-white" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              Join our community for updates and support
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 SmartTV Hub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

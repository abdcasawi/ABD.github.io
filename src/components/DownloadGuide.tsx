import { Smartphone, Tv2, Download, CheckCircle } from 'lucide-react';

export function DownloadGuide() {
  return (
    <section id="guide" className="scroll-mt-20">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">How to Install Apps</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Follow these simple steps to install any app on your Android TV or Smart TV device
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center space-y-4">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
              <Download className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Step 1: Get Downloader</h3>
            <p className="text-slate-400">
              Install the Downloader app from the Google Play Store on your TV
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Step 2: Enter Code</h3>
            <p className="text-slate-400">
              Open Downloader and enter the app's download code from our catalog
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
              <Tv2 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Step 3: Install & Enjoy</h3>
            <p className="text-slate-400">
              Follow the on-screen prompts to install and start using your new app
            </p>
          </div>
        </div>

        <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
          <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span>Important Tips</span>
          </h4>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start space-x-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Enable "Install from Unknown Sources" in your TV settings before installing</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Make sure your TV is connected to a stable internet connection</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Keep your apps updated for the best performance and security</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Use a VPN for enhanced privacy when streaming content</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

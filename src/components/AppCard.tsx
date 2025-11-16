import { Download, Star, ExternalLink } from 'lucide-react';
import type { App } from '../types';

interface AppCardProps {
  app: App;
}

export function AppCard({ app }: AppCardProps) {
  const isUrl = app.icon.startsWith('http');

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all group hover:scale-105 duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-3 rounded-lg group-hover:from-blue-500 group-hover:to-cyan-500 transition-all overflow-hidden">
            {isUrl ? (
              <img src={app.icon} alt={app.name} className="w-8 h-8 object-contain" />
            ) : (
              <span className="text-2xl">{app.icon}</span>
            )}
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">{app.name}</h3>
            <div className="flex items-center space-x-1 mt-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-slate-300 text-sm">{app.rating}</span>
              <span className="text-slate-500 text-sm">({app.downloads})</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-slate-400 text-sm mb-4 line-clamp-2">{app.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {app.features.map((feature, index) => (
          <span
            key={index}
            className="bg-slate-700/50 text-slate-300 text-xs px-3 py-1 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>

      {app.downloadCode && (
        <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 mb-4">
          <p className="text-slate-400 text-xs mb-1">Download Code</p>
          <p className="text-blue-400 font-mono font-bold text-lg">{app.downloadCode}</p>
        </div>
      )}

      <div className="flex space-x-3">
        {app.downloadUrl ? (
          <a
            href={app.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center justify-center space-x-2 group"
          >
            <Download className="h-4 w-4 group-hover:animate-bounce" />
            <span className="font-semibold text-sm">Download</span>
          </a>
        ) : (
          <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center justify-center space-x-2 group">
            <Download className="h-4 w-4 group-hover:animate-bounce" />
            <span className="font-semibold text-sm">Download</span>
          </button>
        )}
        <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-all">
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

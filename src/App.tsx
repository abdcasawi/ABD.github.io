import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AppCategory } from './components/AppCategory';
import { DownloadGuide } from './components/DownloadGuide';
import { Footer } from './components/Footer';
import { appCategories } from './data/apps';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {appCategories.map((category) => (
          <AppCategory key={category.id} category={category} />
        ))}
        <DownloadGuide />
      </main>
      <Footer />
    </div>
  );
}

export default App;

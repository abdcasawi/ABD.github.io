import { AppCard } from './AppCard';
import type { Category } from '../types';

interface AppCategoryProps {
  category: Category;
}

export function AppCategory({ category }: AppCategoryProps) {
  const Icon = category.icon;

  return (
    <section id={category.id} className="scroll-mt-20">
      <div className="flex items-center space-x-3 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">{category.title}</h2>
          <p className="text-slate-400">{category.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
}

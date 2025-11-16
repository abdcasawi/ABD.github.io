import type { LucideIcon } from 'lucide-react';

export interface App {
  id: string;
  name: string;
  icon: string;
  description: string;
  rating: number;
  downloads: string;
  features: string[];
  downloadCode?: string;
  downloadUrl?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  apps: App[];
}

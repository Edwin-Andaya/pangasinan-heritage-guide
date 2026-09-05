export interface HeritageSite {
  id: string;
  name: string;
  location: string;
  category: 'Natural' | 'Historical' | 'Religious';
  description: string;
  image: string;
  contact?: string;
}
export interface PCComponent {
  id: string;
  name: string;
  category: 'CPU' | 'GPU' | 'RAM' | 'Storage' | 'Motherboard';
  price: number;
}

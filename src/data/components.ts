import { PCComponent } from '../types/pc';

export const MOCK_COMPONENTS: PCComponent[] = [
  { id: 'cpu1', name: 'AMD Ryzen 5 5600X', category: 'CPU', price: 219.99 },
  { id: 'cpu2', name: 'Intel Core i7-13700K', category: 'CPU', price: 389.50 },
  { id: 'gpu1', name: 'NVIDIA RTX 3060 Ti', category: 'GPU', price: 449.00 },
  { id: 'gpu2', name: 'AMD Radeon RX 6700 XT', category: 'GPU', price: 399.99 },
  { id: 'ram1', name: '16GB DDR4 3200MHz (2x8GB)', category: 'RAM', price: 89.99 },
  { id: 'mb1', name: 'ASUS ROG Strix B550-F Gaming', category: 'Motherboard', price: 189.99 },
  { id: 'sto1', name: '1TB NVMe M.2 SSD', category: 'Storage', price: 115.50 },
];

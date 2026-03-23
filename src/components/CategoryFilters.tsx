import React from 'react';
import { PCComponent } from '../types/pc';

// Definimos las categorías disponibles + la opción 'Todos'
export type FilterCategory = PCComponent['category'] | 'All';

interface Props {
  selectedCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
}

const categories: FilterCategory[] = ['All', 'CPU', 'GPU', 'RAM', 'Motherboard', 'Storage'];

const CategoryFilters: React.FC<Props> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm
            ${selectedCategory === cat
              ? 'bg-blue-600 text-white scale-105 shadow-blue-200'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'
            }`}
        >
          {cat === 'All' ? 'Todos' : cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;

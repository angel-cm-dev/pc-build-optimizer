import React, { memo } from 'react';
import { PCComponent } from '../types/pc';

interface Props {
  item: PCComponent;
  onAdd: (item: PCComponent) => void;
}

// 1. Tipado estricto para iconos usando las categorías del Type
const CATEGORY_ICONS: Record<PCComponent['category'], string> = {
  CPU: '🧠',
  GPU: '🎮',
  RAM: '💾',
  Motherboard: '🧱',
  Storage: '📁',
};

// 2. Aplicamos React.memo para evitar re-renders innecesarios
const ComponentCard: React.FC<Props> = ({ item, onAdd }) => {

  // Función de flecha interna para manejar el click
  const handleAdd = (): void => onAdd(item);

  return (
    <button
      onClick={handleAdd}
      aria-label={`Agregar ${item.name} al presupuesto`}
      className="w-full flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-blue-100 hover:shadow-xl transition-all duration-300 group active:scale-[0.98]"
    >
      <div className="flex items-center gap-5">
        {/* Icono con fallback de seguridad */}
        <div className="w-16 h-16 flex items-center justify-center text-4xl bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-105 transition-transform">
          {CATEGORY_ICONS[item.category] || '📦'}
        </div>

        <div className="text-left">
          <h3 className="font-semibold text-lg text-gray-950 group-hover:text-blue-700 transition-colors">
            {item.name}
          </h3>
          <span className="text-xs mt-1 px-3 py-1 inline-block bg-gray-100 text-gray-700 rounded-full font-medium">
            {item.category}
          </span>
        </div>
      </div>

      <div className="text-right flex items-center gap-4">
        <span className="text-2xl font-bold text-gray-950">
          $ {item.price.toFixed(2)}
        </span>
        <div className="p-3 bg-blue-100 text-blue-700 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
        </div>
      </div>
    </button>
  );
};

// Exportamos con memo para optimizar el Virtual DOM
export default memo(ComponentCard);

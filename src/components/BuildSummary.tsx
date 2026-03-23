import React from 'react';
import { PCComponent } from '../types/pc';

interface Props {
  selectedItems: PCComponent[];
  onRemove: (id: string) => void;
  total: number;
}

const CATEGORY_ICONS: Record<string, string> = {
  CPU: '🧠', GPU: '🎮', RAM: '💾', Motherboard: '🧱', Storage: '📁',
};

const BuildSummary: React.FC<Props> = ({ selectedItems, onRemove, total }) => {
  return (
    <aside className="space-y-6">
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-8">
        <h2 className="text-xl font-bold text-gray-900 mb-5">📋 Tu Configuración Actual</h2>

        {selectedItems.length === 0 ? (
          <div className="text-center py-10 px-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <div className="text-5xl mb-3 opacity-50">🛠️</div>
            <p className="text-sm font-medium text-gray-600">Tu carrito está vacío</p>
            <p className="text-xs text-gray-400 mt-1">Selecciona componentes de la lista.</p>
          </div>
        ) : (
          <ul className="space-y-3 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
            {selectedItems.map((item: PCComponent) => (
              <li key={item.id} className="flex justify-between items-center p-3.5 bg-gray-50 rounded-xl border border-gray-100 group animate-in fade-in slide-in-from-right-2">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{CATEGORY_ICONS[item.category] || '📦'}</span>
                  <div>
                    <span className="block text-sm font-semibold text-gray-900 truncate max-w-[120px]">{item.name}</span>
                    <span className="block text-xs font-medium text-blue-700">${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  aria-label="Eliminar componente"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-sm font-medium text-gray-500">Total Estimado:</span>
            <span className="text-4xl font-extrabold text-gray-950 tracking-tighter">
              ${total.toFixed(2)}
            </span>
          </div>
          {selectedItems.length > 0 && (
            <button className="w-full py-3.5 bg-blue-600 text-white rounded-2xl text-base font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-[0.98]">
              Proceder a Cotización
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default BuildSummary;

import React, { useState, useMemo, useCallback } from 'react';
import { PCComponent } from '../types/pc';
import { MOCK_COMPONENTS } from '../data/components';

// Importación de componentes de arquitectura SOLID
import Header from './Header';
import ComponentCard from './ComponentCard';
import BuildSummary from './BuildSummary';
import CategoryFilters, { FilterCategory } from './CategoryFilters';

const BudgetCalculator: React.FC = () => {
  // --- ESTADO ---
  const [selectedItems, setSelectedItems] = useState<PCComponent[]>([]);
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');

  // --- LÓGICA DE NEGOCIO (Callbacks Optimizados) ---

  /**
   * SENIOR TIP: useCallback
   * Al estar pasando estas funciones a componentes memoizados (ComponentCard),
   * necesitamos asegurar que la referencia de la función sea estable para evitar
   * re-renders innecesarios de toda la lista de productos.
   */
  const addItem = useCallback((item: PCComponent): void => {
    setSelectedItems((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  }, []);

  const removeItem = useCallback((id: string): void => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleCategoryChange = useCallback((category: FilterCategory): void => {
    setActiveCategory(category);
  }, []);

  // --- DATOS DERIVADOS (Performance con useMemo) ---

  /**
   * Filtramos los componentes basándonos en la categoría activa.
   * Solo se vuelve a calcular si cambia 'activeCategory'.
   */
  const filteredComponents = useMemo(() => {
    if (activeCategory === 'All') return MOCK_COMPONENTS;
    return MOCK_COMPONENTS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  /**
   * Calculamos el total del presupuesto.
   * Solo se vuelve a calcular si cambia 'selectedItems'.
   */
  const totalBudget = useMemo((): number => {
    return selectedItems.reduce((acc, item) => acc + item.price, 0);
  }, [selectedItems]);

  // --- RENDER ---
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">

        <Header />

        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8">

          {/* Columna Izquierda: Catálogo de Productos */}
          <section className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-fit">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <h2 className="text-2xl font-bold text-gray-900">🛒 Componentes</h2>
              <span className="text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                {filteredComponents.length} productos encontrados
              </span>
            </div>

            {/* Filtros de Categoría */}
            <CategoryFilters
              selectedCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />

            {/* Listado dinámico */}
            <div className="space-y-4">
              {filteredComponents.length > 0 ? (
                filteredComponents.map((item) => (
                  <ComponentCard
                    key={item.id}
                    item={item}
                    onAdd={addItem}
                  />
                ))
              ) : (
                <div className="py-20 text-center">
                  <p className="text-gray-400 font-medium italic">
                    No se encontraron componentes en esta categoría.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Columna Derecha: Resumen de la Build (Sticky) */}
          <BuildSummary
            selectedItems={selectedItems}
            onRemove={removeItem}
            total={totalBudget}
          />

        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;

import React, { useState, useMemo } from 'react';
import { PCComponent } from '../types/pc';

const MOCK_COMPONENTS: PCComponent[] = [
  { id: '1', name: 'AMD Ryzen 5 5600X', category: 'CPU', price: 200 },
  { id: '2', name: 'NVIDIA RTX 3060', category: 'GPU', price: 350 },
  { id: '3', name: '16GB DDR4 RAM', category: 'RAM', price: 80 },
];

const BudgetCalculator: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<PCComponent[]>([]);

  // Tipamos el parámetro 'item' y el retorno 'void'
  const addItem = (item: PCComponent): void => {
    if (!selectedItems.find((i: PCComponent) => i.id === item.id)) {
      setSelectedItems((prev: PCComponent[]) => [...prev, item]);
    }
  };

  const removeItem = (id: string): void => {
    setSelectedItems((prev: PCComponent[]) => prev.filter((item: PCComponent) => item.id !== id));
  };

  // Tipamos el acumulador y el item en el reduce
  const totalBudget = useMemo((): number => {
    return selectedItems.reduce((acc: number, item: PCComponent) => acc + item.price, 0);
  }, [selectedItems]);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Presupuesto PC Master</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section>
          <h2 className="font-semibold mb-2">Disponibles</h2>
          {MOCK_COMPONENTS.map((item: PCComponent) => (
            <button
              key={item.id}
              onClick={() => addItem(item)}
              className="block w-full text-left p-2 mb-2 border rounded hover:bg-blue-50 transition"
            >
              {item.name} - ${item.price}
            </button>
          ))}
        </section>

        <section className="bg-gray-50 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Tu Configuración</h2>
          {selectedItems.length === 0 && <p className="text-sm text-gray-500">No hay componentes seleccionados.</p>}
          <ul>
            {selectedItems.map((item: PCComponent) => (
              <li key={item.id} className="flex justify-between text-sm mb-1">
                <span>{item.name}</span>
                <button onClick={() => removeItem(item.id)} className="text-red-500 ml-2">x</button>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-2 font-bold text-lg">
            Total: ${totalBudget}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BudgetCalculator;

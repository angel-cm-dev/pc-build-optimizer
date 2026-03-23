import React from 'react';

const Header: React.FC = () => (
  <header className="flex flex-col md:flex-row items-center justify-between pb-6 border-b border-gray-100 gap-4">
    <div>
      <h1 className="text-4xl font-extrabold text-gray-950 tracking-tight">
        PC Master <span className="text-blue-600">Optimizer</span>
        <span className="text-xl ml-2 font-light text-gray-400">by AngelCM</span>
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        Construye y optimiza tu presupuesto de hardware de forma visual.
      </p>
    </div>
    <button className="px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm active:scale-95">
      Guardar Configuración
    </button>
  </header>
);

export default Header;

// Dentro de src/main.tsx
import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import BudgetCalculator from './components/BudgetCalculator' // Verifica esta ruta

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BudgetCalculator />
  </React.StrictMode>,
)

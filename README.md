<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/pc-case.svg" width="80" height="80" alt="PC Master Logo" />

  # PC Master Optimizer 🖥️

  **Transformando la construcción de hardware en una experiencia visual y eficiente.**

  [![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
  [![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker&logoColor=white&style=for-the-badge)](https://www.docker.com/)
</div>

---

## 📖 Descripción

**PC Master Optimizer** es una aplicación de alto rendimiento diseñada para entusiastas del hardware. Permite calcular presupuestos de componentes de PC en tiempo real, garantizando una interfaz fluida, interactiva y profesional. El proyecto ha sido desarrollado bajo estrictos principios de **Clean Code** y arquitectura **SOLID**, priorizando la escalabilidad y el mantenimiento a largo plazo.

> [!IMPORTANT]
> **Enfoque Senior:** Este proyecto implementa optimizaciones de renderizado mediante `useMemo` y `useCallback`, reduciendo el impacto en el Virtual DOM y garantizando 60 FPS en la interacción del usuario.

---

## ✨ Características Principales

- 🎯 **Filtrado Inteligente:** Navegación por categorías (CPU, GPU, RAM, etc.) con transiciones suaves.
- ⚡ **Cálculo de Alto Rendimiento:** Lógica de negocio centralizada y optimizada para evitar cálculos redundantes.
- 📱 **Diseño Ultra-Responsivo:** Construido con Tailwind CSS para una visualización perfecta en cualquier dispositivo.
- 🏗️ **Arquitectura Atómica:** Componentes desacoplados y reutilizables siguiendo principios SOLID.
- 🐳 **ContainerReady:** Configuración de Docker lista para despliegue inmediato.

---

## 🛠️ Stack Tecnológico

| Área | Tecnología |
| :--- | :--- |
| **Librería Core** | React 18 (Hooks, Context) |
| **Lenguaje** | TypeScript (Tipado Estricto) |
| **Estilos** | Tailwind CSS (Animaciones personalizadas) |
| **Herramientas** | Vite, ESLint, Prettier |
| **Despliegue** | Docker, Nginx (Alpine) |

---

## 📂 Estructura del Proyecto

src/
 ├── components/       # Componentes atómicos (Header, Card, Summary)
 ├── data/             # Mocks y constantes de negocio
 ├── types/            # Definiciones de interfaces e tipos de TypeScript
 ├── App.tsx           # Punto de entrada de la aplicación
 └── main.tsx          # Configuración de React DOM y estilos globales

## ⚙️ Instalación y Configuración

Requisitos previos

Node.js (v18+)
Docker (Opcional para despliegue)

## Desarrollo Local

Clonar el repositorio:

git clone [https://github.com/angel-cm-dev/pc-build-optimizer.git](https://github.com/angel-cm-dev/pc-build-optimizer.git) cd pc-build-optimizer

## Instalar dependencias:

npm install

## Lanzar entorno de desarrollo:

npm run dev

## Despliegue con Docker 🐳

docker-compose up --build -d
La aplicación estará disponible en http://localhost:8080

## 🛡️ Seguridad y Buenas Prácticas

Validación de Tipos: Uso extensivo de Interfaces para prevenir errores en tiempo de compilación.
Inmutabilidad: Manejo de estados de React siguiendo patrones funcionales.
Advertencia: Los precios se calculan en el cliente para fines visuales. En un entorno de producción, el total debe ser re-validado en el backend (Laravel/Python) para prevenir manipulaciones de DOM.

## 👨‍💻 Autor
Angel Castañeda
Website: angelcm.com
LinkedIn: linkedin.com/in/angel-cm
GitHub: @angel-cm-dev

<div align="center">
<sub>Construido con ❤️ para la comunidad de Hardware.</sub>
</div>

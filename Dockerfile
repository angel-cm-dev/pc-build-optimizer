# --- ETAPA 1: BUILD ---
FROM node:18-alpine AS build_stage

# Definimos el directorio de trabajo
WORKDIR /app

# Copiamos solo archivos de dependencias para aprovechar el caché de capas de Docker
COPY package*.json ./
RUN npm install

# Copiamos el resto del código y construimos el proyecto
COPY . .
RUN npm run build

# --- ETAPA 2: PRODUCCIÓN ---
FROM nginx:stable-alpine AS production_stage

# Copiamos la carpeta 'dist' generada en la etapa anterior a la ruta de Nginx
COPY --from=build_stage /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 (estándar de Nginx)
EXPOSE 80

# Nginx corre en primer plano por defecto en este contenedor
CMD ["nginx", "-g", "daemon off;"]

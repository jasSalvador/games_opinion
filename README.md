# 🎮 Games Opinion (versión simplificada)

Este proyecto a sido una mejora personal, basado en un ejercicio previo de un bootcamp, pero completamente rediseñado para mejorar la experiencia de usuario y la estructura general. Fue desarrollado con **Vue.js** y permite a los usuarios dar "like" y dejar opiniones sobre distintos videojuegos obtenidos desde una API externa. 

## 📎 Proyecto original

👉 [Repositorio original en GitHub](https://github.com/jasSalvador/games_opinion_API_VUE)  


## ✨ Cambios respecto al proyecto original

- Eliminadas las vistas de "Opiniones" y "Administración".
- Ahora las opiniones se muestran y se escriben directamente en la **card del juego**, sin redirecciones.
- Al dar "like", simplemente se registra el like sin redirigir a otra vista.
- Todo el flujo ocurre en una sola vista más clara y coherente.

## 🚀 Funcionalidades

### 🏠 Home
- Muestra una lista dinámica de juegos usando una API externa.
- Por cada juego:
  - Se puede ver su nombre, imagen, fecha de lanzamiento y puntuación.
  - Se puede dejar una opinión o ver opiniones anteriores.
  - Se puede dar "like".

### 💬 Opiniones
- Las opiniones se muestran y se agregan directamente desde cada tarjeta de juego.
- Se almacenan en `localStorage` para que no se pierdan al recargar la página.

### ❤️ Likes
- Se puede dar "like" a los juegos.
- El estado del corazón cambia dinámicamente según si el juego ha sido marcado.

## 🧩 Tecnologías y herramientas
- Vue.js
- BootstrapVue
- Vue Router (solo para ruta 404 en esta versión)
- LocalStorage para persistencia local de opiniones
- Componentes reutilizables (`CardComponent`)

## ⚙️ Instalación

### Clona el repositorio

   ```bash
   git clone git@github.com:jasSalvador/games_opinion.git

### Instalar dependencias:
npm install

### Ejecutar el servidor:
npm run serve

### Abrir en el navegador:
La aplicación estará disponible en http://localhost:8080.


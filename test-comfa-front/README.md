# Proyecto Frontend: Aplicación de Personajes (Angular)

Este repositorio contiene la aplicación frontend desarrollada con Angular, diseñada para interactuar con la API de Personajes construida en Laravel. Permite visualizar, buscar y gestionar la información de los personajes.

## 🚀 Cómo Empezar

Sigue estos pasos para configurar y ejecutar el proyecto frontend en tu máquina local.

## 📋 Prerequisitos

Asegúrate de tener instalado lo siguiente:

- **Node.js**: Versión 17 o superior.
- **npm**: Generalmente viene con Node.js.
- **Angular CLI**: Se puede instalar globalmente con `npm install -g @angular/cli`.
- **Git**: Para clonar el repositorio.

## ⚙️ Instalación

### Navega a la carpeta del frontend:

Asumiendo que tu proyecto Angular está en la carpeta `frontend` dentro de la raíz de tu monorepo:

```bash
cd test-comfa-frontend
```

### Instala las dependencias de Node.js:

```bash
npm install
```

### Configura la URL de la API:

La aplicación Angular necesita saber dónde encontrar tu API de Laravel.

Abre el archivo `src/environments/environment.ts` (y `src/environments/environment.development.ts` si lo usas) y asegúrate de que `apiUrl` apunte a la dirección de tu backend Laravel.

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost/api' // Ajusta esto si tu API usa un prefijo diferente
};
```

> Asegúrate de que tu backend Laravel esté corriendo y accesible desde esta URL.

## ▶️ Arrancar el Servidor de Desarrollo

Una vez instaladas las dependencias y configurada la API, puedes iniciar la aplicación Angular.

```bash
ng serve
```

Esto compilará la aplicación y la iniciará en un servidor de desarrollo. Podrás acceder a ella en tu navegador, generalmente en [http://localhost:4200](http://localhost:4200). La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## 📦 Estructura del Proyecto

El proyecto sigue la estructura estándar de Angular CLI:

```
src/app/
├── core/                # Módulos o servicios globales (interceptores, auth, etc.)
├── shared/              # Componentes, directivas o pipes reutilizables
├── features/
│   └── personaje/
│       ├── components/  # Componentes reutilizables específicos de personaje
│       ├── pages/       # Páginas completas (listar, detalle, etc.)
│       ├── models/      # Interfaces de datos (personaje.model.ts)
│       └── services/    # Servicios (personaje.service.ts)
├── environments/        # Configuración por entorno
```

## 🗂️ Características Principales

- **Listado de Personajes**: Muestra una lista de personajes obtenida de la API de Laravel, con visualización tipo tarjeta.
- **Componentes Standalone**: Utiliza las últimas características de Angular 17 para mayor modularidad.
- **Inputs de Señal**: Usa `@Input()` con el nuevo sistema de reactividad de Angular.
- **Comunicación con API**: Interactúa con el backend para obtener los datos.
- **Diseño Responsivo**: Las tarjetas se adaptan a distintos tamaños de pantalla (1, 2 o 3 columnas).

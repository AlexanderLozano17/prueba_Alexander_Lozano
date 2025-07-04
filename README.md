# 🚀 Monorepo: Proyecto Test-Comfa

Bienvenido al monorepo **Test-Comfa**. Este repositorio centraliza el desarrollo de una aplicación web completa, dividida en dos componentes principales: un backend API desarrollado con Laravel y un frontend interactivo construido con Angular.

El objetivo de este monorepo es simplificar la gestión de código y el flujo de trabajo para proyectos interconectados, asegurando que ambos componentes puedan evolucionar de manera coordinada.

## 📂 Estructura del Proyecto

La estructura del repositorio es clara y modular:

```
test-comfa/
├── test-comfa-backend/   # Contiene el proyecto de la API RESTful (Laravel)
├── test-comfa-front/     # Contiene el proyecto del frontend (Angular)
├── .git/                 # Directorio de Git para el control de versiones del monorepo
└── .gitignore            # Reglas de ignorado de Git para todo el monorepo
```

## 🎯 Proyectos Incluidos

Este monorepo alberga dos proyectos principales, cada uno con su propósito y tecnología específica:

### 1. 🌐 Test-Comfa Backend (Laravel)

Este directorio contiene la aplicación API RESTful desarrollada con el framework PHP Laravel. Es el cerebro de la aplicación, encargado de:

- Gestionar la base de datos y la persistencia de datos.
- Exponer endpoints API para operaciones CRUD (personajes, usuarios, etc.).
- Manejar la lógica de negocio y la seguridad de los datos.

**Tecnologías Clave**:

- PHP
- Laravel
- MySQL/PostgreSQL

Para más detalles sobre cómo configurar, desarrollar y desplegar el backend, consulta:

`./test-comfa-backend/README.md`

---

### 2. 💻 Test-Comfa Frontend (Angular)

Este directorio alberga la interfaz de usuario de la aplicación, construida con Angular. Es responsable de:

- Proporcionar una experiencia de usuario interactiva.
- Consumir los datos expuestos por la API Laravel.
- Gestionar la lógica de presentación y el estado del cliente.

**Tecnologías Clave**:

- TypeScript
- Angular
- HTML/CSS (SCSS)

Para más detalles sobre configuración y uso del frontend, consulta:

`./test-comfa-front/README.md`

---

## 🚀 Cómo Poner en Marcha el Proyecto Completo

Para levantar la aplicación completa (backend y frontend), necesitas ejecutar ambos proyectos de forma independiente.

### Configurar y levantar el Backend:

```bash
cd test-comfa/test-comfa-backend
# Sigue las instrucciones del README.md en esta carpeta:
# - composer install
# - cp .env.example .env
# - php artisan migrate
# - php artisan serve
```

### Configurar y levantar el Frontend:

```bash
# En otra terminal
cd test-comfa/test-comfa-front
# Sigue las instrucciones del README.md en esta carpeta:
# - npm install
# - ng serve
```

¡Listo! Una vez ambos servidores estén en marcha, podrás utilizar tu aplicación full-stack localmente.

# Proyecto Backend: API de Personajes (Laravel con Sail)

Este repositorio contiene el backend de la API de Personajes, desarrollado con Laravel y ejecutado con Sail (Docker). Proporciona los endpoints necesarios para gestionar información sobre personajes, incluyendo sus orígenes y ubicaciones.

## 🚀 Cómo Empezar

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local usando Docker y Laravel Sail.

## 📋 Prerequisitos

Asegúrate de tener instalado lo siguiente:

- **Docker Desktop**: Incluye Docker Engine y Docker Compose, necesarios para ejecutar Sail.
- **Git**: Para clonar el repositorio.
- **Un editor de código**: Como VS Code.

## ⚙️ Instalación

### Clona el repositorio:

```bash
git clone  https://lex1102@bitbucket.org/lex1102/prueba_alexander_lozano.git 
cd test-comfa-backend
```

### Copia el archivo de entorno:

```bash
cp .env.example .env
```

### Configura Sail y Dependencias:

Ejecuta el script sail para construir las imágenes de Docker e instalar las dependencias de Composer. Esto puede tardar un poco la primera vez.

```bash
./vendor/bin/sail up -d # Inicia los contenedores en segundo plano
./vendor/bin/sail composer install # Instala las dependencias de PHP
```

> Si el comando sail no se encuentra, asegúrate de que estás en la carpeta backend y que el archivo `vendor/bin/sail` existe.

### Genera la clave de aplicación:

```bash
./vendor/bin/sail artisan key:generate
```

### Configura tu base de datos en `.env`:

Sail configura automáticamente la conexión a la base de datos MySQL dentro de Docker. Por defecto, las credenciales suelen ser:

```env
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=prueba
DB_USERNAME=sail
DB_PASSWORD=password
```

> Normalmente, no necesitarás crear la base de datos manualmente fuera de Docker, Sail se encarga de eso.

## 📊 Migraciones y Seeders

Con los contenedores de Sail levantados, puedes ejecutar las migraciones para crear las tablas y los seeders para poblar con datos de prueba.

### Ejecuta las migraciones:

```bash
./vendor/bin/sail artisan migrate
```

### Ejecuta los seeders:

```bash
./vendor/bin/sail artisan db:seed
```

### Refrescar la base de datos:

```bash
./vendor/bin/sail artisan migrate:fresh --seed
```

## ▶️ Arrancar el Servidor

Asegúrate de que los contenedores de Sail estén corriendo:

```bash
./vendor/bin/sail up -d
```

El servidor estará disponible en [http://localhost:8000](http://localhost:8000).

Para detener los contenedores:

```bash
./vendor/bin/sail down
```

## 🗄️ Estructura de la Base de Datos

### personajes

- id
- nombre
- estado
- especie
- tipo
- genero
- origen_id
- ubicacion_id
- imagen_url
- url
- created_at, updated_at

### origenes

- id
- nombre
- tipo
- dimension
- url
- created_at, updated_at

### ubicaciones

- id
- nombre
- tipo
- dimension
- url
- created_at, updated_at

### otras tablas

- users
- password_reset_tokens
- failed_jobs
- personal_access_tokens

## 🧪 Datos de Prueba (Seeders)

- **OrigenSeeder**: Crea orígenes ficticios.
- **UbicacionSeeder**: Crea ubicaciones ficticias.
- **PersonajeSeeder**: Crea personajes de prueba con relaciones a origenes y ubicaciones.

> Estos datos de prueba son útiles para para probar los endpoints de la API sin depender de datos reales.


# Red social 2.0 

En el proyecto de backend se combinará los conocimientos adquiridos en las tecnologías node + express, además de MongoDB/mongoose.

* El proyecto consistirá en una red social. 

## Descripción

Analizar los Requisitos del proyecto y generar una API REST que sea capaz de lo siguiente:

● Registro de usuarios usando Bcrypt.

● Login de usuarios + token + middleware.

● Que sea capaz de crear un CRUD.

● Dar/quitar Like a post.

● Backend disponible en producción.


# *Requisitos imprescindibles del proyecto:**

● Uso de ramas con git, cuando se termine el proyecto deberán quedar dos ramas la master o main y la develop.

● Presentación de README excelente.

#* Extras a cumplir:

## *1.2. Extras

*Importante, si te dispones a hacer los extras de los comentarios se recomienda (si aún no lo has hecho) que crees una colección para los comentarios.

**Middleware para:**

    Comprobar la autoría del comentario a la hora de editar/eliminar el mismo.
    Usar multer para poder adjuntar imágenes al crear o actualizar posts.
    Usar multer para poder adjuntar imágenes al crear o actualizar comentarios.
    Implementa multer para poder adjuntar imágenes al crear o actualizar un usuario.

**Implementación de followers:**

    Que puedas seguir a otros usuarios
    Que puedas dejar de seguir a otros usuarios
    Con el Endpoint de traer información del usuario conectado, además que nos traiga los posts y el número de seguidores que tiene
    Implementar el correo de confirmación para el registro

**Validación en el login:**

    Si no has confirmado tu correo no puedes conectarte
    Endpoint que nos trae la información del usuario conectado junto a sus post y número de followers, también que nos muestre el nombre de los followers que siguen al usuario conectado
    El endpoint que trae todos los posts junto a los usuarios que hicieron ese post y junto a los comentarios del post que también traiga los usuarios que hicieron los comentarios
    Endpoint para buscar usuario por nombre
    Endpoint para buscar usuario por id

Crea una documentación de los endpoints de tu proyecto

**Comments**

    **CRUD comments**

**Likes:**
    Dar un like a un comentario
    Quitar like a un comentario

## Documentation

[Documentation](https://linktodocumentation)

## API Reference

### Posts

#### Crear un post

```http
  POST /api/posts
```

| Parameter       | Type     | Description                           |
| :-------------- | :------- | :------------------------------------ |
| `Authorization` | `string` | **Required**. Bearer token            |
| `title`         | `string` | **Required**. Título del post         |
| `content`       | `string` | **Required**. Contenido del post      |
| `image`         | `string` | URL de la imagen (opcional)           |

#### Actualizar un post

```http
  PUT /api/posts/${id}
```

| Parameter       | Type     | Description                           |
| :-------------- | :------- | :------------------------------------ |
| `Authorization` | `string` | **Required**. Bearer token            |
| `id`            | `string` | **Required**. Id del post a actualizar|
| `title`         | `string` | **Required**. Título del post         |
| `content`       | `string` | **Required**. Contenido del post      |
| `image`         | `string` | URL de la imagen (opcional)           |

#### Eliminar un post

```http
  DELETE /api/posts/${id}
```

| Parameter       | Type     | Description                           |
| :-------------- | :------- | :------------------------------------ |
| `Authorization` | `string` | **Required**. Bearer token            |
| `id`            | `string` | **Required**. Id del post a eliminar  |

#### Listar todos los posts

```http
  GET /api/posts
```

| Parameter       | Type     | Description                           |
| :-------------- | :------- | :------------------------------------ |
| `Authorization` | `string` | **Required**. Bearer token            |
| `page`          | `number` | Número de página (opcional, default: 1)|

#### Buscar post por nombre

```http
  GET /api/posts/search
```

| Parameter       | Type     | Description                           |
| :-------------- | :------- | :------------------------------------ |
| `Authorization` | `string` | **Required**. Bearer token            |
| `name`          | `string` | **Required**. Nombre del post a buscar|

#### Buscar post por ID

```http
  GET /api/posts/${id}
```

| Parameter       | Type     | Description                           |
| :-------------- | :------- | :------------------------------------ |
| `Authorization` | `string` | **Required**. Bearer token            |
| `id`            | `string` | **Required**. Id del post a buscar    |

### Likes

#### Dar like a un post

```http
  POST /api/posts/${id}/like
```

| Parameter       | Type     | Description                           |
| :-------------- | :------- | :------------------------------------ |
| `Authorization` | `string` | **Required**. Bearer token            |
| `id`            | `string` | **Required**. Id del post a likear    |

#### Quitar like a un post

```http
  DELETE /api/posts/${id}/like
```

| Parameter       | Type     | Description                           |
| :-------------- | :------- | :------------------------------------ |
| `Authorization` | `string` | **Required**. Bearer token            |
| `id`            | `string` | **Required**. Id del post a quitar like|

### Comments

#### Crear un comentario en un post

```http
  POST /api/posts/${id}/comments
```

| Parameter       | Type     | Description                           |
| :-------------- | :------- | :------------------------------------ |
| `Authorization` | `string` | **Required**. Bearer token            |
| `id`            | `string` | **Required**. Id del post a comentar  |
| `content`       | `string` | **Required**. Contenido del comentario|

### Usuarios

#### Registrar un usuario

```http
  POST /api/users/register
```

| Parameter       | Type     | Description                           |
| :-------------- | :------- | :------------------------------------ |
| `name`          | `string` | **Required**. Nombre del usuario      |
| `email`         | `string` | **Required**. Email del usuario       |
| `password`      | `string` | **Required**. Contraseña del usuario  |

#### Login de usuario

```http
  POST /api/users/login
```

| Parameter       | Type     | Description                           |
| :-------------- | :------- | :------------------------------------ |
| `email`         | `string` | **Required**. Email del usuario       |
| `password`      | `string` | **Required**. Contraseña del usuario  |

#### Obtener información del usuario conectado

```http
  GET /api/users/me
```

| Parameter       | Type     | Description                           |
| :-------------- | :------- | :------------------------------------ |
| `Authorization` | `string` | **Required**. Bearer token            |

#### Logout de usuario

```http
  POST /api/users/logout
```

| Parameter       | Type     | Description                           |
| :-------------- | :------- | :------------------------------------ |
| `Authorization` | `string` | **Required**. Bearer token            |
## Installation

Instalar con npm

```bash
  npm install backend2
  cd backend2
```
    
## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Authors

- [@denisc911](https://www.github.com/denisc911)


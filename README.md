# Training-v2

## Como correr el proyecto:

```
git clone https://github.com/Krowdy/training-v2.git
cd training-v2

npm install
node index.js ó nodemon index.js
```

## Tecnologias que usaremos:

- Express
- MongoDB
- Passport
- Hapi 

## Docs 

### Primera clase:

- ¿Qué es exactamente un API? :

https://medium.com/@perrysetgo/what-exactly-is-an-api-69f36968a41f

- Verbos(GET, POST, PUT, etc), HTTP, URLS, API REST explicado con ejemplos:

https://code.tutsplus.com/tutorials/a-beginners-guide-to-http-and-rest--net-16340


- Por que es importante validar nuestros datos:

https://www.quora.com/Why-is-data-validation-important



### Segunda clase:
- https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec 
- https://www.syslog-ng.com/community/b/blog/posts/why-logging-is-important
- https://www.youtube.com/watch?v=o9hT7v0OLJc


## Tareas:

### Semana 1:

Hacer las routas CRUD para el resource 'users'. El usuario debe tener los campos `name`, `id`, `nickname`. 
Tener en cuenta que ahora los productos deberan tener un campo `owner`. 
Hacer la lógica correspondiente para validar que los productos tengan un owner al crearlos, que solo el mismo owner pueda modificar el producto y que solo el mismo owner pueda eliminar su producto.

### Semana 2:
- Colocar los logger en todos los endpoints, para todas las situaciones.

## Reto:
Implementar todo lo avanzado en otro lenguaje con otro framework. (No vale PHP)


## Semana 3:
Implementar validacion de registro de usuarios con un servicio de mensajeria de texto, al momento de registrarse se debe enviar un codigo por SMS que validara al usuario registrado.
Implementar URL firmadas(AWS) para subir archivos estaticos(imagenes, videos, etc).
## Reto:
Seguir implementando todo esto en su otra app con otro lenguaje.





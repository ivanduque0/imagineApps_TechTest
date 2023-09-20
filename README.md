# imagineApps_TechTest

para inciar el proyecto con docker se debe tener instalado docker y docker compose. Se debe ingresar el comando "docker-compose up" para correr el frontend, backend y la base de datos de mongodb.

el frontend estara en el puerto 4200 mientras que el backend en el puerto 3000

el archivo "rest_api_postman.json" contiene las apis del backend.

breve explicacion de las apis:

create post: se usa para crear un nuevo post

user posts: se usa para filtrar los posts de un usuario por la fecha

all user posts: se usa para ver todas las publicaciones del usuario logueado

register: se usa para crear un nuevo usuario

posts: se usa para filtrar todos los posts por fecha y por palabras que contengan

all posts: se usa para obtener todos los posts

login: se usa para obtener el json web token
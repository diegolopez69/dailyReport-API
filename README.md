
## Project setup
```
npm install
```

### Run
```
nodemon server.js
```


### Reports
-> Lo que hace falta es que se hagan las peticiones cada cierto tiempo, esto se resuelve con los cron jobs, que tienen que utilizarse cuando se despliega la aplicación, de momento como la aplicación no está desplegada no se puede ejecutar pero pongo unos datos quemados de mientras para que se puedan ver las gráficas.


### TODO'S
- Cuando se hace el report de chromebook's, tengo que hacer alguna manera de asociar los chromebook's a las clases porque sino cuando en el endpoint de reports-chromebooks no tengo manera de saber cuales son los chromebooks que están en que clase a que momento.

- Delete de Aulas no funciona

- La manera en que se hace el conteo de los chromebooks funcionales y no funcionales esta mal porque no tiene en cuenta que pasa si se crea un nuevo chromebook, asi que tiene que poderse hacer de otra manera.

- En la respuesta de chromebooks tengo que eliminar los campos extras que ya no se utilizan que son:       No_chr_funcionales, No_chr_no_funcionales, No_chr_totales.

- Delete de Chromebooks no funciona

- Cambiar las rutas del inventario de ordenador_aula a aho

- Update, get y delete de inventario no funcionan, pero seguro que es porque la funcion no es async await

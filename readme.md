# NodeJS && Uso de Stream

## Requerimientos

```
NodeJS v16.15.0
```
Nota*:  npm install nodemon --global (Para trabajar en modo desarrollo)

## Ejecucion
```
npm run dev
```

## Explicacion breve

Usaremos el método createReadStream() del objeto fs nos devuelve un stream a cambio de la ruta del archivo que pretendemos leer, posteriomente recibiremos un stream de lectura. Con él podremos hacer todas las cosas que se encuentran disponibles en el API de NodeJS para los streams

```
var streamLectura = fs.createReadStream('./archivo-texto.txt');
```
En la siguiente linea de codigo el evento 'data' (Evento de Stream de tipo Lectura) ocurre cada vez que se reciben desde un stream, lo que ocurre al invocar diversos metodos del objeto stream. Ademas, al crearse un manejador de evento para el evento 'data', comienza tambien la lectura del stream. Cuando el dato se haya leido y se encuentre disponible se ejecutara el propio manejador de evento asociado, recibiendo como parametro un buffer de datos.
```
streamLectura.on('data', (chunk) => {
  console.log('He recibido ' + chunk.length + ' bytes de datos.');
  console.log(chunk.toString());
});
```

Mediante el metodo write que es un Stream de tipo escritura, para ello tenemos que enviarle un buffer y otra serie de parametros opcionales como el tipo de codificacion y una funcion callback a ejecutar cuando termine la operacion de escritura.
```
process.stdout.write(objetoBuffer);

streamLectura.on('data', (chunk) => {
  process.stdout.write(chunk)
})
```
Posteriomente conectaremos el stream de lectura con la de escritura produciendo una tuberia que enviarra los datos del origen para el destino. Para ello se usa el metodo pipe(). Para crear esta tuberia tenemos que invocar el metodo pipe sobre un stream de lectura. y ahora , ademas del stream de lectura del archivo de texto de antes, vamos a crear un stream de escritura sobre otro archivo.
```
var streamLectura = fs.createReadStream('./archivo-texto.txt');
var streamEscritura = fs.createWriteStream('./otro-archivo.txt');
streamLectura.pipe(streamEscritura);
```
Si ejecutamos ese método produciremos la copia del contenido del archivo "archivo-texto.txt" hacia el fichero "otro-archivo.txt"
```
streamLectura.on('end', function() {
  console.log('La lectura del fichero se ha completado');
});
```
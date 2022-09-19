var fs = require('fs');

var streamLectura = fs.createReadStream('./archivo-texto.txt');
streamLectura.on('data', (chunk) => {
	//chunk es un buffer de datos
	console.log(chunk instanceof Buffer); 
	//escribe "true" por pantalla
});

streamLectura.on('data', (chunk) => {
	console.log('He recibido ' + chunk.length + ' bytes de datos.');
	console.log(chunk.toString());
});

process.stdout.write(objetoBuffer);
streamLectura.on('data', (chunk) => {
	process.stdout.write(chunk)
});

process.stdin.setEncoding('utf8');
process.stdout.write('¿Qué sugerencias puedes dar? ');


process.stdout.write('¿Qué sugerencias puedes dar? ');
process.stdout.write('Has respondido: ');
process.stdout.write(res);
process.stdin.pause();

var streamLectura = fs.createReadStream('./archivo-texto.txt');
var streamEscritura = fs.createWriteStream('./otro-archivo.txt');
streamLectura.pipe(streamEscritura);
streamLectura.on('end', function () {
	console.log('La lectura del fichero se ha completado');
});

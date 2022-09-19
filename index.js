var fs = require('fs');

process.stdin.setEncoding('utf8');
process.stdout.write('------ LECTURA DEL ARCHIVO-TEXTO ------');

var streamLectura = fs.createReadStream('./public/archivo-texto.txt');

streamLectura.on('data', (chunk) => {
	console.log('He recibido ' + chunk.length + ' bytes de datos.');
	console.log(chunk.toString());
});

var streamEscritura = fs.createWriteStream('./public/otro-archivo.txt');
streamLectura.pipe(streamEscritura);
streamLectura.on('end', function () {
	console.log('\n----------La lectura del fichero se ha completado----------');
	console.log('------¿Qué sugerencias puedes dar?-------- ');
	
});

process.stdin.once('data', function(res) {
	process.stdout.write('Has respondido: ');
	process.stdout.write(res);
	//process.stdin.pause();
});
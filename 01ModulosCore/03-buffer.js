/*  BUFFERS 
  Una tira de bytes (datos binarios)
  Similar a un array de enteros
  Tamanio fijo
    Sockets
    Streams
    Implementar protocolos complecos
    Manipulacion de ficheros/imagenes
    Criptografia
*/
"use strick";

var buf = new Buffer(100),
  buf2 = new Buffer(26),
  str = "\u00bd + \u00bc + \u00be";

buf.write("abcd", 0, 4, "ascii");

console.log(
  buf,
  buf.toString(),
  str,
  str.length + " caracteres",
  Buffer.byteLength(str, "utf-8") + " bytes gastados",
  buf2.length
);

for (let i = 0; i < buf2.length; i++) {
  buf2[i] = i + 97;
}

console.log(buf2.toString("ascii"));

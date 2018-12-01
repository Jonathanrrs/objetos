import Pelicula from "./pelicula.js";

var titulo = document.querySelector('·titulo');
var año = document.querySelector('#año');
var duracion = document.querySelector('#duracion');

document.querySelector('#btnAgregar')
.addEventListener('click', onAgregar);

function onAgregar () {
    let m1 = new Pelicula(titulo.value, Number(año.value), Number(duracion.value));
    m1.imprimir();
}


var m1 = new Pelicula('Scary Movie', 2000, 126);
var m2 = new Pelicula('Toy Story', 2014, 200);
m1.imprimir();
m2.imprimir();
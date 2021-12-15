window.onload = inicio;

var areaCanvas;
var d;
var lienzo;
var i = 0;
// var lineas = 30;
var lineas;
var yi;
var xf;
var texto;

function inicio() {
  area();

  texto = document.getElementById("entrada");
  boton = document.getElementById("botoncito");
  boton.addEventListener("click", dibujoPorClick);

  d = document.getElementById("dibujito");
  lienzo = d.getContext("2d");
  ciclo();
}

//: Manera 1: Usando un ciclo while
// function ciclo() {
//   while (i < lineas) {
//     yi = 10 * i;
//     xf = 10 * (i + 1);
//     console.log("Lineas " + i);
//     dibujarLinea("greenyellow", 0, yi, xf, 300);
//     i++;
//   }
// }

//: Manera 2: Usando un ciclo for
function ciclo() {
  for (i = 0; i < lineas; i++) {
    yi = 10 * i;
    xf = 10 * (i + 1);
    dibujarLinea("greenyellow", 0, yi, xf, 300);

    // Gráfico invertido!
    // xf = 300 - 10 * (i + 1);
    // dibujarLinea("greenyellow", 300, yi, xf, 300);
  }
}

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function area() {
  areaCanvas = document.getElementById("dibujito");
  areaCanvas.setAttribute("width", "300px");
  areaCanvas.setAttribute("height", "300px");
}

function dibujoPorClick() {
  lineas = parseInt(texto.value);
  console.log(lineas);
}

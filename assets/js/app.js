area();

var texto = document.getElementById("entrada");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  lineas = parseInt(texto.value);
  var i = 0;
  var yi, xf;
  var colorcito = "greenyellow";
  var espacio = ancho / lineas;

  for (i = 0; i < lineas; i++) {
    yi = espacio * i;
    xf = espacio * (i + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
  }

  dibujarLinea(colorcito, 1, 1, 1, ancho - 1);
  dibujarLinea(colorcito, 1, 1, 1, ancho - 1);
  dibujarLinea(colorcito, 1, ancho - 1, ancho - 1, ancho - 1);
}

function area() {
  areaCanvas = document.getElementById("dibujito");
  areaCanvas.setAttribute("width", "300px");
  areaCanvas.setAttribute("height", "300px");
}

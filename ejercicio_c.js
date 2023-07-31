// Variables con los valores numéricos libres
var cantidadDeGatos = 10;
var cantidadDePasos = 4;

// Bucle for para imprimir los gatos con sus pasos alternadamente
var gatosContainer3 = document.getElementById("gatos-container3");

for (var i = 1; i <= cantidadDeGatos; i++) {
  var pasosGato = i % 2 === 0 ? "🐈‍⬛" : "🐈";

  for (var j = 1; j <= cantidadDePasos; j++) {
    pasosGato += " 🐾";
  }

  var gatoElement = document.createElement("div");
  gatoElement.textContent = "Gato #" + i + ": " + pasosGato;
  gatosContainer3.appendChild(gatoElement);
}
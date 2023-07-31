// Variables con los valores numéricos libres
var cantidadDeGatos = 5;
var cantidadDePasos = 3;

// Bucle for para imprimir los gatos con sus pasos
var gatosContainer2 = document.getElementById("gatos-container2");
for (var i = 1; i <= cantidadDeGatos; i++) {
  var pasosGato = "🐈";
  for (var j = 1; j <= cantidadDePasos; j++) {
    pasosGato += " 🐾";
  }
  var gatoElement = document.createElement("div");
  gatoElement.textContent = "Gato #" + i + ": " + pasosGato;
  gatosContainer2.appendChild(gatoElement);
}
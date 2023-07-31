// Función para obtener el emoji correspondiente según el valor de i
function obtenerEmoji(i) {
  const emojis = ["😺", "😸", "😹"];
  return emojis[(i - 1) % emojis.length];
}

// Variable con la cantidad de gatos
var cantidadDeGatos = 10;

// Obtener el elemento del contenedor
const gatosContainer = document.getElementById("gatos-container");

// Bucle para crear los gatos con los emojis correspondientes y agregarlos al contenedor
for (let i = 1; i <= cantidadDeGatos; i++) {
  const gatoDiv = document.createElement("div");
  gatoDiv.textContent = `Gato #${i}: ${obtenerEmoji(i)}`;
  gatosContainer.appendChild(gatoDiv);
}
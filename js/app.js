const poema = [
  'Te pienso incluso cuando intento no hacerlo, cuando el día pasa sin pronunciar tu nombre, pero en cada pausa del viento, tu ausencia me lo recuerda.',
  'No me basta el tiempo contigo, ni las palabras que intercambiamos, ni las veces que miraste como si supieras que estaba a punto de caer.',
  'Siempre quiero más, y ese "más" me asusta, porque sé que no puedo retenerte, que no hay amor suficiente cuando alguien no se siente en casa.',
  'Y aun así, si tú quisieras, yo sería abrigo. Sería tierra firme para tus pasos que dudan. Sería refugio en tus días más grises.',
  'Pero no puedo suplicar que te quedes si tu alma ya está de viaje. Te miro sin que lo notes y, en silencio, te nombro cuando todo me duele.',
  'Sé que a veces el mundo te pesa, que hay rincones de ti a los que ni yo he llegado.',
  'Pero si alguna vez, aunque no estés, necesitas un lugar donde volver, aquí estaré.',
  'No para detenerte ni para pedirte que me ames, solo para recordarte que fuiste y eres esa parte de mí que ni el tiempo ni el adiós pudieron borrar.'
];

const contenedorPoema = document.getElementById("poema");
const botonAbrir = document.getElementById("botonAbrir");
const musicaFondo = document.getElementById("musicaFondo");

let indiceParrafo = 0;
let indiceLetra = 0;
let cursor;

function crearCursor(parrafo) {
  cursor = document.createElement("span");
  cursor.classList.add("cursor");
  cursor.textContent = "|";
  parrafo.appendChild(cursor);
}

function escribirPoema() {
  if (indiceParrafo < poema.length) {
    let parrafoActual = document.getElementById(`parrafo-${indiceParrafo}`);

    if (!parrafoActual) {
      parrafoActual = document.createElement("p");
      parrafoActual.id = `parrafo-${indiceParrafo}`;
      contenedorPoema.appendChild(parrafoActual);
      crearCursor(parrafoActual);
    }

    if (indiceLetra < poema[indiceParrafo].length) {
      if (cursor) {
        cursor.remove();
      }

      parrafoActual.textContent += poema[indiceParrafo].charAt(indiceLetra);
      indiceLetra++;
      crearCursor(parrafoActual);

      setTimeout(escribirPoema, 35);
    } else {
      if (cursor) {
        cursor.remove();
      }

      indiceParrafo++;
      indiceLetra = 0;

      if (indiceParrafo < poema.length) {
        setTimeout(escribirPoema, 700);
      }
    }
  }
}

botonAbrir.addEventListener("click", () => {
  botonAbrir.style.display = "none";
  contenedorPoema.innerHTML = "";
  indiceParrafo = 0;
  indiceLetra = 0;

  musicaFondo.play().catch(error => {
    console.log("No se pudo reproducir la música automáticamente:", error);
  });

  escribirPoema();
});

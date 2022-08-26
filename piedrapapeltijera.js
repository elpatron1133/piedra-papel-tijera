const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";
const piedraBnt = document.getElementById("piedra");
const papelBnt = document.getElementById("papel");
const tijeraBnt = document.getElementById("tijera");

piedraBnt.addEventListener("click", () => {
  let opcionJugador = "piedra";
  let resultado = jugar(opcionJugador);
  let mResultado = document.getElementById("resultado");
  mResultado.innerHTML = resultado;
});

papelBnt.addEventListener("click", () => {
  let opcionJugador = papel;
  let resultado = jugar(opcionJugador);
  let mResultado = document.getElementById("resultado");
  mResultado.innerHTML = resultado;
});

tijeraBnt.addEventListener("click", () => {
  let opcionJugador = "tijera";
  let resultado = jugar(opcionJugador);
  let mResultado = document.getElementById("resultado");
  mResultado.innerHTML = resultado;
});

let opcionJugador;

function jugar(opcionJugador) {
  var opcionMaquina = Math.floor(Math.random() * 3) + 1;
  if (opcionMaquina === 1) {
    opcionMaquina = "piedra";
  } else if (opcionMaquina === 2) {
    opcionMaquina = "papel";
  } else {
    opcionMaquina = "tijera";
  }

  let ganador =
    opcionJugador === opcionMaquina
      ? "Empate"
      : opcionJugador === piedra && opcionMaquina === papel
      ? "Pierdes!!! Gano la Maquina"
      : opcionJugador === piedra && opcionMaquina === tijera
      ? "Ganaste"
      : opcionJugador === papel && opcionMaquina === piedra
      ? "Ganaste"
      : opcionJugador === papel && opcionMaquina === tijera
      ? "Pierdes!!! Gano la Maquina"
      : opcionJugador === tijera && opcionMaquina === piedra
      ? "Pierdes!!! Gano la Maquina"
      : opcionJugador === tijera && opcionMaquina === papel
      ? "ganaste"
      : null;

  return `Elegiste: <img  class="img-play" src="img/${opcionJugador}.png" alt="">
         La maquina Eligio: <img  class="img-play" src="img/${opcionMaquina}.png" alt="">
          ${ganador}`;
}

// return `la maquina eligio ${opcionMaquina} y tu elegiste ${opcionJugador} y  ${ganador}</p`;

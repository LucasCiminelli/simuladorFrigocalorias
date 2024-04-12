console.log("Hola lucas");

let puntuacionFrigocalorias = 0;
let total = 0;

function mostrarMensaje(mensaje) {
  document.getElementById("mensaje").innerText = mensaje;
}

function mostrarTotal() {
  document.getElementById("total").innerText =
    "Total de frigocalorías: " + total.toFixed(2);
}

function seleccionarZona() {
  let zona = parseInt(document.getElementById("zona").value);

  switch (zona) {
    case 1:
      puntuacionFrigocalorias = 100;
      break;
    case 2:
      puntuacionFrigocalorias = 200;
      break;
    case 3:
      puntuacionFrigocalorias = 350;
      break;
    default:
      mostrarMensaje("Ingrese una opción válida");
      return;
  }

  total += puntuacionFrigocalorias;
  mostrarTotal();

}

function elegirTipoZona() {
  let tipoEdificio = parseInt(document.getElementById("tipoEdificio").value);

  switch (tipoEdificio) {
    case 1:
      puntuacionFrigocalorias = 100;
      break;
    case 2:
      puntuacionFrigocalorias = 250;
      break;
    case 3:
      puntuacionFrigocalorias = 400;
      break;

    default:
      mostrarMensaje("Ingrese una opción válida");
      return;
  }

  total += puntuacionFrigocalorias;
  mostrarTotal();
}

function elegirTipoHabitacion() {
  let tipoHabitacion = parseInt(
    document.getElementById("tipoHabitacion").value
  );

  switch (tipoHabitacion) {
    case 1:
      puntuacionFrigocalorias = 100;
      break;
    case 2:
      puntuacionFrigocalorias = 200;
      break;
    case 3:
      puntuacionFrigocalorias = 350;
      break;
    case 4:
      puntuacionFrigocalorias = 450;
      break;

    default:
      mostrarMensaje("Ingrese una opción válida");
      return;
  }

  total += puntuacionFrigocalorias;
  mostrarTotal();
}

function elegirDimensiones() {
  let ancho = parseFloat(document.getElementById("ancho").value);
  let largo = parseFloat(document.getElementById("largo").value);
  let alto = parseFloat(document.getElementById("alto").value);

  if (
    isNaN(ancho) ||
    isNaN(largo) ||
    isNaN(alto) ||
    ancho <= 0 ||
    largo <= 0 ||
    alto <= 0
  ) {
    mostrarMensaje("Ingrese dimensiones válidas.");
    return;
  }

  const areaBase = ancho * largo;
  const areaLateral = 2 * (ancho * alto + largo * alto);
  const superficieTotal = 2 * areaBase + areaLateral;

  if (superficieTotal < 50) {
    puntuacionFrigocalorias = 250;
  } else if (superficieTotal < 75) {
    puntuacionFrigocalorias = 280;
  } else if (superficieTotal < 100) {
    puntuacionFrigocalorias = 300;
  } else if (superficieTotal < 125) {
    puntuacionFrigocalorias = 350;
  } else {
    puntuacionFrigocalorias = 450;
  }

  total += puntuacionFrigocalorias;
  mostrarTotal();
}

function elegirDebajoDe() {
  let debajoDe = parseInt(document.getElementById("debajoDe").value);

  switch (debajoDe) {
    case 1:
      puntuacionFrigocalorias = 100;
      break;
    case 2:
      puntuacionFrigocalorias = 200;
      break;
    case 3:
      puntuacionFrigocalorias = 300;
      break;
  }
  total += puntuacionFrigocalorias;
  mostrarTotal();
}

function elegirEncimaDe() {
  let encimaDe = parseInt(document.getElementById("debajoDe").value);

  switch (encimaDe) {
    case 1:
      puntuacionFrigocalorias = 125;
      break;
    case 2:
      puntuacionFrigocalorias = 175;
      break;
    case 3:
      puntuacionFrigocalorias = 225;
      break;
  }
  total += puntuacionFrigocalorias;
  mostrarTotal();
}

function elegirOrientacionPared() {
  let orientacionPared = parseInt(
    document.getElementById("orientacionPared").value
  );

  switch (orientacionPared) {
    case 1:
      puntuacionFrigocalorias = 100;
      break;
    case 2:
      puntuacionFrigocalorias = 150;
      break;
    case 3:
      puntuacionFrigocalorias = 350;
      break;
    case 4:
      puntuacionFrigocalorias = 150;
      break;
  }
  total += puntuacionFrigocalorias;
  mostrarTotal();
}

function elegirCantidadPersonas() {
  let cantidadPersonas = parseInt(
    document.getElementById("cantidadPersonas").value
  );

  switch (cantidadPersonas) {
    case 1:
      puntuacionFrigocalorias = 100;
      break;
    case 2:
      puntuacionFrigocalorias = 125;
      break;
    case 3:
      puntuacionFrigocalorias = 145;
      break;
    case 4:
      puntuacionFrigocalorias = 150;
      break;
    case 5:
      puntuacionFrigocalorias = 175;
      break;
    case 6:
      puntuacionFrigocalorias = 195;
      break;
    case 7:
      puntuacionFrigocalorias = 200;
      break;
    case 8:
      puntuacionFrigocalorias = 225;
      break;
    case 9:
      puntuacionFrigocalorias = 250;
      break;
  }
  total += puntuacionFrigocalorias;
  mostrarTotal();
}

function elegirIntensidadIluminacion() {
  let intensidadIluminacion = parseInt(
    document.getElementById("intensidadIluminacion").value
  );

  switch (intensidadIluminacion) {
    case 1:
      puntuacionFrigocalorias = 70;
      break;
    case 2:
      puntuacionFrigocalorias = 100;
      break;
    case 3:
      puntuacionFrigocalorias = 125;
      break;
  }
  total += puntuacionFrigocalorias;
  mostrarTotal();
}

function elegirTipoIluminacion() {
  let tipoIluminacion = parseInt(
    document.getElementById("tipoIluminacion").value
  );

  switch (tipoIluminacion) {
    case 1:
      puntuacionFrigocalorias = 100;
      break;
    case 2:
      puntuacionFrigocalorias = 125;
      break;
    case 3:
      puntuacionFrigocalorias = 150;
      break;
    case 4:
      puntuacionFrigocalorias = 60;
      break;
  }
  total += puntuacionFrigocalorias;
  mostrarTotal();
}

function elegirWatts() {
  let cantidadPcs = parseInt(document.getElementById("cantidadPcs").value) || 0;
  let cantidadImpresoras =
    parseInt(document.getElementById("cantidadImpresoras").value) || 0;
  let cantidadTelevisores =
    parseInt(document.getElementById("cantidadTelevisores").value) || 0;
  let cantidadEquiposAudio =
    parseInt(document.getElementById("cantidadEquiposAudio").value) || 0;
  let cantidadDispositivosWatts =
    parseInt(document.getElementById("cantidadDispositivosWatts").value) || 0;

  const cantidadWattsPcs = parseInt(cantidadPcs * 50);
  const tiempoHorasPcs = 3;
  const cantidadFrigocaloriasPcs = cantidadWattsPcs * tiempoHorasPcs * 0.8598;

  const cantidadWattsImpresoras = parseInt(cantidadImpresoras * 500);
  const tiempoHorasImpresoras = 1;
  const cantidadFrigocaloriasImpresoras =
    cantidadWattsImpresoras * tiempoHorasImpresoras * 0.8598;

  const cantidadWattsTelevisores = parseInt(cantidadTelevisores * 10);
  const tiempoHorasTelevisores = 2;
  const cantidadFrigocaloriasTelevisores =
    cantidadWattsTelevisores * tiempoHorasTelevisores * 0.8598;

  const cantidadWattsEquiposAudio = parseInt(cantidadEquiposAudio * 10);
  const tiempoHorasEquiposAudio = 1;
  const cantidadFrigocaloriasEquiposAudio =
    cantidadWattsEquiposAudio * tiempoHorasEquiposAudio * 0.8598;

  const cantidadWattsDispositivosVarios = parseInt(cantidadDispositivosWatts);
  const tiempoHorasDispositivosVarios = 2;
  const cantidadFrigocaloriasDipositivosVarios =
    cantidadWattsDispositivosVarios * tiempoHorasDispositivosVarios * 0.8598;

  total +=
    cantidadFrigocaloriasPcs +
    cantidadFrigocaloriasImpresoras +
    cantidadFrigocaloriasTelevisores +
    cantidadFrigocaloriasEquiposAudio +
    cantidadFrigocaloriasDipositivosVarios;

  mostrarTotal();
  mostrarModelo();
}

function mostrarModelo() {
  let modelo;

  if (total < 8000) {
    modelo = "Split";
  } else if (total < 12000) {
    modelo = "Split o Ventana";
  } else if (total < 15000) {
    modelo = "Ventana";
  } else if (total < 20000) {
    modelo = "Rooftop";
  } else {
    modelo = "VRF";
  }

  document.getElementById("modelo").innerText = "Modelo recomendado: " + modelo;
}

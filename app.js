console.log("Hola lucas");

const ejecutarAlgoritmo = () => {
  let puntuacionFrigocalorias = 0;
  let total = 0;

  console.log("El total de frigocalorias es: ", total);

  alert(
    "Ingrese la zona donde se encuentra el edificio: (1- templada, 2- calida o 3-Muy Calida): "
  );
  let seleccion1 = parseInt(prompt());

  switch (seleccion1) {
    case 1:
      puntuacionFrigocalorias = 100;
      break;
    case 2:
      puntuacionFrigocalorias = 200;
      break;
    case 3:
      puntuacionFrigocalorias = 300;
      break;
    default:
      alert("Ingrese una opción válida");
  }

  total += puntuacionFrigocalorias;
  console.log("El total de frigocalorias es: ", total);

  alert(
    "Ingrese tipo de edificio: 1-Edificio nuevo < 10 años, 2-Construcción reciente: > 9 && < 50 años, 3-Edifico antiguo: >50 años: "
  );
  let seleccion2 = parseInt(prompt());

  switch (seleccion2) {
    case 1:
      puntuacionFrigocalorias = 100;
      break;
    case 2:
      puntuacionFrigocalorias = 200;
      break;
    case 3:
      puntuacionFrigocalorias = 300;
      break;
    default:
      alert("Ingrese una opción válida");
  }
  console.log("El total de frigocalorias es: ", total);
  total += puntuacionFrigocalorias;

  alert(
    "Ingrese tipo de habitación: 1-Living, 2-Dormitorio, 3-Oficina, 4-Comercio: "
  );
  let seleccion3 = parseInt(prompt());

  switch (seleccion3) {
    case 1:
      puntuacionFrigocalorias = 100;
      break;
    case 2:
      puntuacionFrigocalorias = 200;
      break;
    case 3:
      puntuacionFrigocalorias = 300;
      break;
    case 4:
      puntuacionFrigocalorias = 400;
      break;
    default:
      alert("Ingrese una opción válida");
  }

  console.log("El total de frigocalorias es: ", total);
  total += puntuacionFrigocalorias;

  alert("Ingrese dimensiones de la habitación (Largo y ancho):");
  let largo = parseFloat(prompt("Ingrese el Largo: "));
  let ancho = parseFloat(prompt("Ingrese el ancho: "));

  let area = largo * ancho;

  if (area < 16) {
    puntuacionFrigocalorias = 100;
  } else if (area < 25) {
    puntuacionFrigocalorias = 200;
  } else if (area < 35) {
    puntuacionFrigocalorias = 300;
  } else if (area < 50) {
    puntuacionFrigocalorias = 400;
  } else {
    puntuacionFrigocalorias = 500;
  }

  console.log("El total de frigocalorias es: ", total);
  total += puntuacionFrigocalorias;

  alert(
    "La habitación está debajo de: 1-Un espacio habitado, 2- Un tejado, 3- Una terraza: "
  );
  let seleccion4 = parseInt(prompt());

  switch (seleccion4) {
    case 1:
      puntuacionFrigocalorias = 100;
      break;
    case 2:
      puntuacionFrigocalorias = 200;
      break;
    case 3:
      puntuacionFrigocalorias = 300;
      break;
    default:
      alert("Ingrese una opción válida");
  }

  console.log("El total de frigocalorias es: ", total);
  total += puntuacionFrigocalorias;

  alert(
    "La habitación está encima de: 1-Un espacio habitado, 2- Tierra, bajos o sotano, 3- Aire libre: "
  );
  let seleccion5 = parseInt(prompt());

  switch (seleccion5) {
    case 1:
      puntuacionFrigocalorias = 100;
      break;
    case 2:
      puntuacionFrigocalorias = 200;
      break;
    case 3:
      puntuacionFrigocalorias = 500;
      break;
    default:
      alert("Ingrese una opción válida");
  }

  console.log("El total de frigocalorias es: ", total);
  total += puntuacionFrigocalorias;

  alert(
    "Indique la orientación de la habitación: 1-Norte sobre pared 1, 2-Norte sobre pared 2, 3-Norte sobre pared 3, 4-Norte sobre pared 4: "
  );
  let seleccion6 = parseInt(prompt());

  switch (seleccion6) {
    case 1:
      puntuacionFrigocalorias = 300;
      break;
    case 2:
      puntuacionFrigocalorias = 150;
      break;
    case 3:
      puntuacionFrigocalorias = 400;
      break;
    case 4:
      puntuacionFrigocalorias = 150;
      break;
    default:
      alert("Ingrese una opción válida");
  }

  console.log("El total de frigocalorias es: ", total);
  total += puntuacionFrigocalorias;

  alert("Indique la cantidad de personas que habitan el ambiente: ");
  let seleccion7 = parseInt(prompt());

  switch (seleccion7) {
    case 1:
      puntuacionFrigocalorias = 50;
      break;
    case 2:
      puntuacionFrigocalorias = 100;
      break;
    case 3:
      puntuacionFrigocalorias = 150;
      break;
    case 4:
      puntuacionFrigocalorias = 200;
      break;
    case 5:
      puntuacionFrigocalorias = 250;
      break;
    case 6:
      puntuacionFrigocalorias = 300;
      break;
    case 7:
      puntuacionFrigocalorias = 350;
      break;
    case 8:
      puntuacionFrigocalorias = 400;
      break;
    case 9:
      puntuacionFrigocalorias = 500;
      break;
    default:
      alert("Ingrese una opción válida");
  }

  console.log("El total de frigocalorias es: ", total);
  total += puntuacionFrigocalorias;

  alert(
    "Ingrese el tipo de iluminación de la habitación: 1-Standard, 2-Fluorescente, 3-Halogena, 4-Led: "
  );
  let seleccion8 = parseInt(prompt());

  switch (seleccion8) {
    case 1:
      puntuacionFrigocalorias = 200;
      break;
    case 2:
      puntuacionFrigocalorias = 300;
      break;
    case 3:
      puntuacionFrigocalorias = 350;
      break;
    case 4:
      puntuacionFrigocalorias = 100;
      break;
    default:
      alert("Ingrese una opción válida");
  }

  total += puntuacionFrigocalorias;

  alert(
    "Ingrese la intensidad de la iluminación de la habitación: 1-Baja, 2-Media, 3-Alta: "
  );
  let seleccion9 = parseInt(prompt());

  switch (seleccion9) {
    case 1:
      puntuacionFrigocalorias = 200;
      break;
    case 2:
      puntuacionFrigocalorias = 300;
      break;
    case 3:
      puntuacionFrigocalorias = 400;
      break;
    default:
      alert("Ingrese una opción válida");
  }

  console.log("El total de frigocalorias es: ", total);
  total += puntuacionFrigocalorias;

  alert("Equipamiento del living:");
  alert("Ingrese cantidad Pcs: ");
  let cantidadPcs = parseInt(prompt());
  puntuacionFrigocalorias += cantidadPcs * 2;

  alert("Ingrese cantidad cantidad impresoras: ");
  let cantidadImpresoras = parseInt(prompt());
  puntuacionFrigocalorias += cantidadImpresoras * 1.5;

  alert("Ingrese cantidad de Televisiones: ");
  let cantidadTelevisiones = parseInt(prompt());
  puntuacionFrigocalorias += cantidadTelevisiones * 3;

  alert("Ingrese cantidad de equipos de audio: ");
  let cantidadAudio = parseInt(prompt());
  puntuacionFrigocalorias += cantidadAudio * 1.2;

  alert("Ingrese otros dispositivos por watts: ");
  let cantidadWatts = parseInt(prompt());
  puntuacionFrigocalorias += cantidadWatts * 0.8;

  console.log("El total de frigocalorias es: ", total);
  total += puntuacionFrigocalorias;

  alert("Puntuación total: " + total);

  let modeloRecomendado;

  if (total < 5000) {
    modeloRecomendado = "Split";
  } else if (total >= 5000 && total < 10000) {
    modeloRecomendado = "Ventana";
  } else if (total >= 10000 && total < 20000) {
    modeloRecomendado = "Rooftop";
  } else {
    modeloRecomendado = "VRF";
  }

  console.log("El total de frigocalorias es: ", total);
  alert("Modelo recomendado: " + modeloRecomendado);
};

let puntuacionFrigocalorias = 0;
let total = 0;

function mostrarMensaje(mensaje) {
  document.getElementById("mensaje").innerText = mensaje;
}

function mostrarTotal() {
  document.getElementById("total").innerText =
    "Total de frigocalorías: " + total;
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
      puntuacionFrigocalorias = 300;
      break;
    default:
      mostrarMensaje("Ingrese una opción válida");
      return;
  }

  total += puntuacionFrigocalorias;
  mostrarTotal();

  // Continuar con los siguientes pasos...
}

function elegirTipoZona() {
  let tipoEdificio = parseInt(document.getElementById("tipoEdificio").value);

  switch (tipoEdificio) {
    case 1:
      puntuacionFrigocalorias = 100;
      break;
    case 2:
      puntuacionFrigocalorias = 200;
      break;
    case 3:
      puntuacionFrigocalorias = 300;
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
      puntuacionFrigocalorias = 300;
      break;
    case 4:
      puntuacionFrigocalorias = 400;
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

  if (isNaN(ancho) || isNaN(largo) || ancho <= 0 || largo <= 0) {
    mostrarMensaje("Ingrese dimensiones válidas.");
    return;
  }

  const area = ancho * largo;

  if (area < 16) {
    puntuacionFrigocalorias = 100;
  } else if (area < 25) {
    puntuacionFrigocalorias = 200;
  } else if (area < 35) {
    puntuacionFrigocalorias = 300;
  } else if (area < 50) {
    puntuacionFrigocalorias = 400;
  } else {
    puntuacionFrigocalorias = 500;
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

function elegirOrientacionPared() {
  let orientacionPared = parseInt(
    document.getElementById("orientacionPared").value
  );

  switch (orientacionPared) {
    case 1:
      puntuacionFrigocalorias = 100;
      break;
    case 2:
      puntuacionFrigocalorias = 200;
      break;
    case 3:
      puntuacionFrigocalorias = 300;
      break;
    case 4:
      puntuacionFrigocalorias = 300;
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
      puntuacionFrigocalorias = 200;
      break;
    case 3:
      puntuacionFrigocalorias = 300;
      break;
    case 4:
      puntuacionFrigocalorias = 400;
      break;
    case 5:
      puntuacionFrigocalorias = 500;
      break;
    case 6:
      puntuacionFrigocalorias = 600;
      break;
    case 7:
      puntuacionFrigocalorias = 700;
      break;
    case 8:
      puntuacionFrigocalorias = 800;
      break;
    case 9:
      puntuacionFrigocalorias = 900;
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

function elegirTipoIluminacion() {
  let tipoIluminacion = parseInt(
    document.getElementById("tipoIluminacion").value
  );

  switch (tipoIluminacion) {
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
  const cantidadWattsPcs = parseInt(cantidadPcs * 10);
  const cantidadWattsImpresoras = parseInt(cantidadImpresoras * 10);
  const cantidadWattsTelevisores = parseInt(cantidadTelevisores * 10);
  const cantidadWattsEquiposAudio = parseInt(cantidadEquiposAudio * 10);
  const cantidadWattsDispositivosVarios = parseInt(cantidadDispositivosWatts);

  total +=
    cantidadWattsPcs +
    cantidadWattsImpresoras +
    cantidadWattsTelevisores +
    cantidadWattsEquiposAudio +
    cantidadWattsDispositivosVarios;
  mostrarTotal();
  mostrarModelo();
}

function mostrarModelo(modelo) {
  if (total < 5000) {
    modelo = "Split";
    document.getElementById("modelo").innerText =
      "Modelo recomendado: " + modelo;
  } else if (total >= 5000 && total < 10000) {
    modelo = "Ventana";
    document.getElementById("modelo").innerText =
      "Modelo recomendado: " + modelo;
  } else if (total >= 10000 && total < 20000) {
    modelo = "Rooftop";
    document.getElementById("modelo").innerText =
      "Modelo recomendado: " + modelo;
  } else {
    modelo = "VRF";
    document.getElementById("modelo").innerText =
      "Modelo recomendado: " + modelo;
  }
  document.getElementById("modelo").innerText = "Modelo recomendado: " + modelo;
}

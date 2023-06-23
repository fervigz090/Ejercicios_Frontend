
const cantidad = (document.getElementById("cantidad"));
const monIn = document.getElementById("monIn");
const monOut = document.getElementById("monOut");
const resultado = document.getElementById("resultado");

// Tasas divisas actuales. Utilizamos base el euro
const dolar = 1.0992333;
const euro = 1;
const libra = 0.86095701;
const rupia = 16432.526;
const yen = 156.08483;

// Funciones de evento
// Comprobamos que los datos de entrada son correctos
function compForm(event){
    let cant = parseInt(cantidad.value);
    if(parseInt(cantidad.value) <= 0){
        console.log("Cantidad introducida incorrecta");
        cantidad.focus();
        event.preventDefault();
        return false;
    }else if(monIn.value == "0"){
        console.log("Selecciona moneda inicial");
        monIn.focus();
        event.preventDefault();
        return false;
    }else if(monOut.value == "0"){
        console.log("Selecciona moneda final");
        monOut.focus();
        event.preventDefault();
        return false;
    }else{  // Todo correcto. Realizamos la conversion
        resultado.innerHTML = convertirMoneda(cant, monIn, monOut);
        event.preventDefault();
    }
}

// Funcion para realizar la conversion
function convertirMoneda(cantidad, monIn, monOut) {
    let result = 0;

  // Convertir la cantidad a euros
  switch (monIn.value) {
    case "1":
      result = cantidad;
      break;
    case "2":
      result = cantidad / dolar;
      break;
    case "3":
      result = cantidad / libra;
      break;
    case "4":
      result = cantidad / rupia;
      break;
    case "5":
      result = cantidad / yen;
      break;
    default:
      console.log("Moneda de origen inválida");
      return;
  }

  // Convertir de euros a la moneda destino
  switch (monOut.value) {
    case "1":
      result = result;
      break;
    case "2":
      result = result * dolar;
      break;
    case "3":
      result = result * libra;
      break;
    case "4":
      result = result * rupia;
      break;
    case "5":
      result = result * yen;
      break;
    default:
      console.log("Moneda de destino inválida");
      return;
  }

  return result;
}

//Inicio de carga de eventos
formEntrada.addEventListener('submit', compForm);
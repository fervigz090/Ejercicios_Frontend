/**
 * JS para dar funcionalidad a la cesta de compra
 * 
 * @author Iván Fernández Rodríguez <ivanfdez@live.com>
 * @link https://github.com/fervigz090/Ejercicios_Frontend.git
 * @date 2023-06-29
 */

var itemImg;
var productItems;
var cestaCont;
var precioTotal = 0;
var precioHD = 200;
var precioRAM = 340;
var precioProc = 540;
var precioMon = 260;
var precioTar = 130;
var precioKey = 200;
var precioMouse = 120;
var precioAlt = 170;
var resultado;

/**
 * Controlador de eventos que se inicia cuando se arratra un producto.
 * @date 2023-06-29
 * @param { * } event evento arrastrar imagen producto.
 */
function moviendoImg(event) {
    itemImg = event.target;
}

/**
 * Actualiza el precio total sumando el del nuevo producto añadido/
 * @date 2023-06-29
 * @param { * } event soltar producto en cesta
 */
function anadirProducto(event) {
    event.preventDefault(); // Evita que el evento 'drop' realice la acción por defecto
    var coste = 0;
    
    switch (itemImg.alt) {
        case "hard disk":
            coste = precioHD;
            break;
        case "RAM":
            coste = precioRAM;
            break;
        case "procesador":
            coste = precioProc;
            break;
        case "pantalla":
            coste = precioMon;
            break;
        case "tarjeta red":
            coste = precioTar;
            break;
        case "teclado":
            coste = precioKey;
            break;
        case "raton":
            coste = precioMouse;
            break;
        case "altavoces":
            coste = precioAlt;
            break;
        default:
            break;
    }
    
    precioTotal += coste; // Suma el costo del producto al precio total
    resultado.textContent = "Total: " + precioTotal + "€"; // Actualiza el contenido de 'resultado' con el precio total acumulado
}

/**
 * Carga de objetos
 * @date 2023-06-29
 */
function domCargado() {
    productItems = document.getElementsByClassName('imgproducto');
    resultado = document.getElementById('preciototal');
    for (let item of productItems) {
        item.addEventListener('dragstart', moviendoImg);
    }
    cestaCont = document.getElementById('cestaItem');
    cestaCont.addEventListener('dragover', event => { event.preventDefault(); });
    cestaCont.addEventListener('drop', anadirProducto);
}

document.addEventListener('DOMContentLoaded', domCargado);



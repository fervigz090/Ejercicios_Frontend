

var itemImg;
var productItems;
var cestaCont;
var precioTotal = 0;
var precioHD = 0;
var precioRAM = 0;
var precioProc = 0;
var precioMon = 0;
var precioTar = 0;
var precioKey = 0;
var precioMouse = 0;
var precioAlt = 0;

function moviendoImg(event){
    itemImg = event.target;
    console.log(itemImg.src);
}

function anadirProducto(event){
    precioTotal = precioTotal + precioHD;
    console.log(event.src);
    return precioTotal;
}

function domCargado(){
    precioHD = document.getElementById('precioHD');
    precioRAM = document.getElementById('precioRAM');
    precioProc = document.getElementById('precioProc');
    precioMon = document.getElementById('precioMon');
    precioTar = document.getElementById('precioTar');
    precioKey = document.getElementById('precioKey');
    precioMouse = document.getElementById('precioMouse');
    precioAlt = document.getElementById('precioAlt');
    productItems = document.getElementsByClassName('imgproducto');
    for (let item of productItems){
        item.addEventListener('dragstart', moviendoImg);
    }
    cestaCont = document.getElementById('cestaItem');
    cestaCont.addEventListener('dragover', e=>{e.preventDefault()});
    cestaCont.addEventListener('drop', anadirProducto);

}

document.addEventListener('DOMContentLoaded', domCargado);

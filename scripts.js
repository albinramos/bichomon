console.log(document.title);

document.getElementById("gen-1").innerHTML="Generasión 1 Pokimon";
   

document.querySelector('.infocard-list.infocard-list-pkmn-lg').style.backgroundColor = '#CCCCCC';


let URLactual = window.location;
console.log(URLactual);

let URLdominio = window.location.href;
console.log(URLdominio);
console.log(location.hostname);
//te devuelve un nodelist
let imagenes = document.querySelectorAll("img");
console.log(imagenes);
//te devuelve un HTML collection
let imgs = document.getElementsByTagName("img");
console.log(imgs);

let todasLasImagenes = document.getElementsByTagName('img');
for (let i = 0; i < todasLasImagenes.length; i++) {
    todasLasImagenes[i].src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
}

let infocard = document.querySelectorAll('.infocard-lg-data.text-muted');
for(let i = 0; i < infocard.length; i++){
    if(infocard[i].innerHTML.includes("itype fying")) {
        infocard[i].style.backgroundColor="blue";
    };

}
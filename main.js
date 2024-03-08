import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";


/*1. feladat:  galéria kisképeinek elhelyezése */

/* fogd meg a .galeria elemet */
const galeriaELEM = document.getElementsByClassName("galeria");

/* írd bele az összeálíltott html képsorozatot */
galeriaELEM[0].innerHTML = htmlOsszeAllit(KEPEK);


/*2. feladat  A .nagykep divben lévő img elem megfogása */

/* A .nagykep div megfogása */
const nagykepELEM = document.querySelector(".nagykep img");


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */

/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const kiskepELEMEK = document.querySelectorAll(".kep img");

/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for (let index = 0; index < kiskepELEMEK.length; index++) {
    kiskepELEMEK[index].addEventListener("click", function (event) {nagykepELEM.src=event.target.src;});
}

/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */



/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
let aktIndex = 0;

const balGOMB = document.querySelector(".bal");
balGOMB.addEventListener("click", function () {
    aktIndex--;
    aktIndex = aktIndex % KEPEK.length;
    nagykepELEM.src = KEPEK[aktIndex].kep;
});

const jobbGOMB = document.querySelector(".jobb");
jobbGOMB.addEventListener("click", function () {
    aktIndex++;
    aktIndex = aktIndex % KEPEK.length;
    nagykepELEM.src = KEPEK[aktIndex].kep;
});
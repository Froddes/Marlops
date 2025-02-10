"use strict";

function main(){
    const viajes = document.getElementById("viajesmarlops");
    document.getElementById("viajes-img").addEventListener("click", function () {
        viajes.classList.toggle("open");
    });
}

document.addEventListener("DOMContentLoaded", main);
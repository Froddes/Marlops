"use strict";

function main(){
    const viajes = document.getElementById("viajesmarlops");
    document.getElementById("viajes-img").addEventListener("click", function () {
        viajes.classList.toggle("open");
        console.log("Open")
    });
}

document.addEventListener("DOMContentLoaded", main);
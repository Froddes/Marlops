"use strict";

function main() {
    const viajes = document.getElementById("viajesmarlops");
    const viajesImg = document.getElementById("viajes-img");
    const contents = document.querySelectorAll(".content");
    const times = document.querySelector(".fa-times");

    function toggleBlur() {
        const blurValue = viajes.classList.contains("open") ? "3.5px" : "0";
        contents.forEach(content => content.style.filter = `blur(${blurValue})`);
    }

    viajesImg.addEventListener("click", () => {
        viajes.classList.toggle("open");
        toggleBlur();
    });

    times.addEventListener("click", () => {
        viajes.classList.toggle("open");
        toggleBlur();
    });
}


document.addEventListener("DOMContentLoaded", main);
"use strict";

import { menuRenderer } from '../renders/menu.js';
import { experienceRenderer } from '../renders/experience.js';
import menu from '../../json/trasquilaMenu.json';
import exp from '../../json/experienceTrasquila.json';

function trasquila(){
    loadMenu();
    loadExperience();
}

function loadMenu(){
    const container = document.getElementById("menu-trasquila");
    try{
        container.appendChild(menuRenderer.asMenu(menu));
    }catch(error){
        console.error("Error al cargar el menu", error);
    }
}

function loadExperience(){
    const container = document.getElementById("experience");
    try{
        container.appendChild(experienceRenderer.asGallery(exp));
    }catch(error){
        console.error("Error al cargar la seccion de experiencia completa", error);
    }
}

document.addEventListener("DOMContentLoaded", trasquila);
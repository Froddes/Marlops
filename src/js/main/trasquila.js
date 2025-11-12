"use strict";

import {galleryRenderer} from '../renders/gallery.js';
import { menuRenderer } from '../renders/menu.js';
import { experienceRenderer } from '../renders/experience.js';
import menu from '../../json/trasquilaMenu.json';
import exp from '../../json/experienceTrasquila.json';
import imgs from '../../json/trasquilaGallery.json';


function trasquila(){
    loadMenu();
    loadExperience();
    loadGallery();
    handleImages();
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

function loadGallery(){
    const container = document.getElementById("trasquila-gallery");
    try{
        container.appendChild(galleryRenderer.asGallery(imgs));
    }catch(error){
        console.error("Error al cargar la galeria", error);
    }
}

function handleImages(){
    const images = document.querySelectorAll(".masonry-item");
    const viewImgContainer = document.getElementById("view-img-container");
    const viewImg = document.getElementById("view-img");
    images.forEach(img => img.onclick = () =>  {
        document.body.style.overflow = 'hidden';
        const src = img.querySelector("img").getAttribute("src");
        viewImgContainer.classList = "view";
        viewImg.setAttribute("src", src);
    });
    viewImgContainer.onclick = () => {
        viewImgContainer.classList = "";
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener("DOMContentLoaded", trasquila);
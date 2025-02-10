"use strict";

import {galleryRenderer} from '../renders/gallery.js';
import { menuRenderer } from '../renders/menu.js';
import menu from '../../json/marlopsMenu.json';
import imgs from '../../json/marlopsGallery.json';
import videos from '../../json/marlopsVideos.json';

function marlops(){
    loadGallery();
    loadMenu();
    handleImgs();
    handleVideos();
}

function loadGallery(){
    const container = document.getElementById("marlops-gallery");
    try{
        container.appendChild(galleryRenderer.asGallery(imgs, videos));
    }catch(error){
        console.error("Error al cargar la galeria", error);
    }
}

function loadMenu(){
    const container = document.getElementById("menu-marlops");
    try{
        container.appendChild(menuRenderer.asMenu(menu));
    }catch(error){
        console.error("Error al cargar el menu", error);
    }
}

function handleImgs(){
    const imgs = document.querySelectorAll(".gallery-img");
    const viewImgContainer = document.getElementById("view-img-container");
    const viewImg = document.getElementById("view-img");
    imgs.forEach(img => img.onclick = () =>  {
        document.body.style.overflow = 'hidden';
        const src = img.querySelector("img").getAttribute("src");
        viewImgContainer.classList = "view";
        viewImg.setAttribute("src", src);
    })
    viewImgContainer.onclick = () => {
        viewImgContainer.classList = "";
        document.body.style.overflow = 'auto';
    }
}

function handleVideos(){
    const videos = document.querySelectorAll(".gallery-video");
    videos.forEach(video => {
        const span = video.querySelector("span");
        const vid = video.querySelector("video");
        vid.volume = 0;
        // vid.playbackRate = 0.75;
        span.onclick = () => {
            if(span.classList == "icon solid fa-play"){
                vid.loop = true;
                vid.play();
                span.classList = "icon solid fa-pause";
            }else if(span.classList == "icon solid fa-pause"){
                vid.loop = false;
                vid.pause();
                span.classList = "icon solid fa-play";
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", marlops);
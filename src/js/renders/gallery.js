"use strict";

import {parseHTML} from '../utils/parseHTML.js';

const galleryRenderer = {
    asGallery: function(gallery, videos){
        const galleryContainer = parseHTML('<div class="gallery-container"><h3>Tablón de recuerdos</h3><br><br></div>');
        for(let i = 0; i < gallery.length; i += 3){
            const row = gallery.slice(i, i + 3);
            galleryContainer.appendChild(galleryRenderer.asRow(row, "img"));
        }
        const viewImg = parseHTML('<div id="view-img-container"><img id="view-img" src="/images/marlops/marlops7.jpg" alt="marlops imagen 7"></div>');
        galleryContainer.appendChild(viewImg);

        const paraf = parseHTML('<div class="postit"><p class="postit">Ahora, déjate llevar por nuestras creaciones en <strong>M</strong>ovimiento. Estos videos c<strong>A</strong>pturan la esencia de Ma<strong>R</strong>lops en acción, mostrando cómo cada deta<strong>L</strong>le c<strong>O</strong>bra vida <strong>P</strong>ara hacer de tu evento una experiencia única y delicio<strong>S</strong>a.</p><div class="cinta"></div></div>');

        galleryContainer.appendChild(paraf);

        for(let i = 0; i < videos.length; i += 3){
            const row = videos.slice(i, i + 3);
            galleryContainer.appendChild(galleryRenderer.asRow(row, "video"));
        }
        return galleryContainer;
    },

    asRow: function(row, type){
        const rowContainer = parseHTML('<div class="gallery-row"></div>');
        for(let content of row){
            type == "img" ?rowContainer.appendChild(galleryRenderer.asImg(content)) : rowContainer.appendChild(galleryRenderer.asVideo(content));
        }
        return rowContainer;
    },

    asImg: function(img){
        const src = img.src;
        const alt = img.alt;
        const html = `
        <span class="gallery-img">
            <div class="cinta"></div>
            <img src="${src}" alt="${alt}">
        </span>
        `;
        return parseHTML(html);
    },

    asVideo: function(video){
        const src = video.src;
        const html = `
        <span class="gallery-video">
            <div class="cinta"></div>
            <span class="icon solid fa-play"></span>
            <video>
                <source src="${src}" type="video/mp4">
            </video>
        </span>
        `;
        return parseHTML(html);
    }
}

export {galleryRenderer}
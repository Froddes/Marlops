"use strict";

import {parseHTML} from '../utils/parseHTML.js';

const galleryRenderer = {
    asGallery: function(gallery){
        const galleryContainer = parseHTML('<div class="masonry"></div>');
        const viewImg = parseHTML('<div id="view-img-container"><img id="view-img" src="/images/marlops/marlops7.jpg" alt="marlops imagen 7"></div>');
        galleryContainer.appendChild(viewImg);
        for(let i of gallery){
            galleryContainer.appendChild(galleryRenderer.asImg(i));
        }
        return galleryContainer;
    },

    asImg: function(img){
        const src = img.src;
        const alt = img.alt;
        const html = `
        <figure class="masonry-item">
            <img src="${src}" alt="${alt}" loading="lazy">
        </figure>
        `;
        return parseHTML(html);
    }
}

export {galleryRenderer}
"use strict";

import {parseHTML} from '../utils/parseHTML.js';

const menuRenderer = {
    asMenu: function(menu){
        const menuContainer = parseHTML('<div class="menu-container"></div>');
        for(let p of menu){
            menuContainer.appendChild(menuRenderer.asRow(p));
        }
        return menuContainer;
    },

    asRow: function(product){
        const name = product.name;
        const description = product.description;
        const src = product.src;
        const alt = product.alt;

         const html =`
         <div class="menu-row">
            <img src="${src}" alt="${alt}">
            <div>
                <strong>${name}</strong>
                <p>${description}</p>
            </div>
         </div>`
        return parseHTML(html);
    }
}

export {menuRenderer}
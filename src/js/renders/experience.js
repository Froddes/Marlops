"use strict";

import {parseHTML} from '../utils/parseHTML.js';

const experienceRenderer = {
    asCard: function(card){
        const title = card.title;
        const description = card.description;
        const img = card.img;
        const alt = card.alt;

        return parseHTML(`
        <div class="col-6 col-12-narrower">

            <section>
                <span class="image featured"><img src=${img} alt="${alt}" /></span>
                <header>
                    <h3>${title}</h3>
                </header>
                <p>${description}</p>
            </section>
        </div>
        `);
    },

    asGallery: function(gallery){
        const container = parseHTML('<div class=experience-container></div>');
        let row = parseHTML('<div class="row"></div>');
        let acum = 0;
        for(let i of gallery){
            if (acum === 2) {
                container.appendChild(row);
                row = parseHTML('<div class="row"></div>');
                acum = 0;
            }
            row.appendChild(experienceRenderer.asCard(i));
            acum++;
        }
        if (acum > 0) {
            container.appendChild(row);
        }
        return container;
    }
}

export {experienceRenderer};
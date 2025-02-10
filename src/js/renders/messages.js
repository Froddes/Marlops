"use strict";

import {parseHTML} from '../utils/parseHTML.js';

const messageRenderer = {
    showErrorMessage: (message) => {
        let html = `
            <span class="alert">
                <i class="icon solid fa-exclamation-triangle i-alert"></i>
                <p>${message}</p>
                <i class="icon solid fa-times close-alert"></i>
            </span>
        `;
        return parseHTML(html);
    }
}

export {messageRenderer};
"use strict";

import {formValidator} from '../validator/form.js';
import {messageRenderer} from '../renders/messages.js';

function contact(){
    let form = document.getElementById("form-contact");
    form.onsubmit = handleSubmit; 
}

function handleSubmit(event){
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let errors = formValidator.validateForm(formData);
    if(errors.length > 0){
        console.log("Loading errors")
       let errorDiv = document.getElementById("errors");
       errorDiv.innerHTML = "";
       for (let error of errors) {
           errorDiv.appendChild(messageRenderer.showErrorMessage(error));
       }
       let closeAlert = document.querySelector(".close-alert");
        closeAlert.onclick = handleClose; 
    }else{
        handleSend(form);
    }
}

function handleClose(){
    let errorDiv = document.getElementById("errors");
    errorDiv.innerHTML = "";
}

function handleSend(form) {
    const btn = document.getElementById("submit");
    const responseEl = document.getElementById("form-response");

    btn.value = "Enviando...";
    responseEl.style.display = "none"; // Oculta mensaje anterior si existía

    const serviceID = 'default_service';
    const templateID = 'template_f6hdcju';

    emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
            btn.value = 'Enviar Mensaje';
            responseEl.textContent = '¡Gracias por tu mensaje! Te responderemos pronto.';
            responseEl.style.color = '#fff';
            responseEl.style.display = 'block';
            responseEl.className = "";
            form.reset();
        }, (err) => {
            btn.value = 'Enviar Mensaje';
            responseEl.textContent = 'Ha ocurrido un error. Intenta de nuevo más tarde.';
            responseEl.style.color = '#fff';
            responseEl.style.display = 'block';
            responseEl.className = "error"
            console.error('Error al enviar con EmailJS:', err);
        });
}


document.addEventListener("DOMContentLoaded", contact);
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

function handleSend(form){
    const btn = document.getElementById("submit");
    btn.value = "Enviando...";

    const serviceID = 'default_service';
    const templateID = 'template_f6hdcju';

    emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Mensaje enviado!');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
}

document.addEventListener("DOMContentLoaded", contact);
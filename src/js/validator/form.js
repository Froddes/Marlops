"use strict";

const formValidator = {
    validateForm: function(formData){
        let errors = [];
        let date = new Date(formData.get("date"));
        let actualDate = new Date();
        if(date < actualDate){
            errors.push("Por favor, selecciona una fecha que sea mayor a la fecha actual.");
        }
        return errors;
    }
}

export {formValidator};
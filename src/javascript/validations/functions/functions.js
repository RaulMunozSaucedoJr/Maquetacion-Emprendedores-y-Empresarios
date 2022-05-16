import {
    contact_form_inputs,
    allowedExtensions,
    sizeLimit
} from '../selectors/selectors.js';

/**
 * @param {function} (verify_Inputs_Lenght)
 * @param {cicle/loop} (for)
 * @param {Initial Expression}(var i = 0, input__actual)
 * @param {Condicional Expression && IncrementalExpression && Variable} (input__actual =  variable === inputsUsuarios[i++];)
 * @param {Condicional Cicle} (if)
 * @param {Variable} (input__actual.value.length >=50 () => We obtain the value of different input´s and check if those input´s wont be gretaer or equal than 30)
 * @param {Function} (swal)
 */
export const verify_Inputs_Lenght = () => {
    for (var i = 0, input__actual; input__actual = contact_form_inputs[i++];) {
        if (input__actual.value.length >= 30) {
            /*
            THIS CONTAINS A SWAL ALERT FROM SWEET-ALERT V.1,
            PLEASE IMPORT THE CSS AND JS FILES INTO OUR HTML WITH CDN.
            */
            swal({
                icon: "warning",
                title: "¡Atención!",
                text: "Ningún campo debe de tener más de 30 letras/carácteres/números",
                timer: 3000,
                closeOnClickOutside: false,
                button: false,
                closeOnEsc: false,
            });
        }
    }
};

export const validateFile = () => {

    const {
        name: fileName,
        size: fileSize
    } = this.files[0];
    const fileExtension = fileName.split(".").pop();
    if (!allowedExtensions.includes(fileExtension)) {
        swal({
            icon: "warning",
            title: "¡Atención!",
            text: "Por favor, unicamente suba los archivos con extensiones permitidas",
            timer: 3000,
            closeOnClickOutside: false,
            button: false,
            closeOnEsc: false,
        });
        this.value = null;
    } else if (fileSize > sizeLimit) {
        swal({
            icon: "warning",
            title: "¡Atención!",
            text: "Por favor, el tamaño maximo del archivo es de 1 megabyte",
            timer: 3000,
            closeOnClickOutside: false,
            button: false,
            closeOnEsc: false,
        });
        this.value = null;
    }
};
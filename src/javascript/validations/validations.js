/*
    We import our selectors from selector.js
*/
import {
    contact_form_inputs,
    regex_inputs,
    empty_inputs
} from "./selectors/selectors.js";

/*
We import our different functions from functions.js
*/

import {
    verify_Inputs_Lenght,
    validateFile
} from "./functions/functions.js";


export const Listeners = () => {

    /**
     * @param {Default Validation Bootstrap 4.3}
     **/

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    /**
     @param {function} (validate_Inputs_Regexs),
     @param {parameters} (field, regex),
    **/

    const validate_Inputs_Regexs = (field, regex) => {
        regex.test(field.value.trim()) ? field.className = 'valido' : field.className = 'invalido';
    }
    /*
        For every empty input we loop trough everyone, 
        then we add a 'keyup' who calls a function(validate_Inputs_Regexs) 
        and for each element selected by name atrribute add a trim function.
    */
    empty_inputs.forEach(item => item.addEventListener(
        'keyup', e => {
            validate_Inputs_Regexs(e.target, regex_inputs[e.target.attributes.name.value.trim()])
        }
    ));

    /**
     *@param {constant} (contact_form_inputs)
     *@param {method} (forEach)
     *@param {element} (input)
     *@param {method} (addEventListener)
     *@param {function} (verify_Inputs_Lenght) 
     **/

    contact_form_inputs.forEach((input) => {
        input.addEventListener('keyup', verify_Inputs_Lenght);
    });

    //Validate extension files
    document.getElementById("file").addEventListener("change", validateFile)

}

/**
 * @param {function} (Listeners)
 */
Listeners();
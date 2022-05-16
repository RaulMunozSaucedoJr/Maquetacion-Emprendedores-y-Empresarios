/**
 * @param {constant´s} (ID FROM DIFFERENT FORM)
 */
export const id_name_form = document.querySelector('#id_name_form');

/**
 * @param {constant´s} (contact_form_inputs)
 * @param {input´s} (We recover the different type´s of inputs we have at the different form´s).
 */

export const contact_form_inputs = document.querySelectorAll("#id_name_form input[type=text]");
export let empty_inputs = document.querySelectorAll('input');

/**
 * @param {object} (regex_inputs)
 * @param {properties} (properties name from different inputs and forms)
 * @param {value´s} (/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{8,24}$/ from /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/)
 **/

/* In this object we set our properties and values from different inputs from different forms */
export let regex_inputs = {
    //Only acept letters with/without tildes, from 3 to 24 characters lenght
    Names_Contact_Form: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{3,24}$/,
    //Only acept emails
    Email_Contact_Form: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/,
    //Only acept digits and number from 10 to 20 digits lenght
    Tels_Contact_Form: /^\d{10,20}$/,
};

export const allowedExtensions = ['jpg', 'jpeg', 'png'],
    sizeLimit = 1000000;
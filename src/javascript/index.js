import {
    toggleShow
} from "./functions/functions.js";

! function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {

        const Listeners = () => {

            console.clear();
            toggleShow();
        };

        Listeners();
    })
}();
! function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {

        console.clear();

        var hoverDistort = new hoverEffect({
            parent: document.querySelector('.header_right'),
            intensity: .2,
            speedIn: 2,
            speedOut: 2,
            angle: Math.PI / 2,
            image1: '/source/images/header/header_image.jpg',
            image2: '/source/images/header/header_image_2.jpg',
            displacementImage: '/source/images/Hover_Image.png'
        });

    })

}();
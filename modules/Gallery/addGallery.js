import Gallery from "./gallery.js";

// Reference to the gallery section in the DOM to add photos
const gallery = document.querySelector('.gallery');







// Render the image to the DOM
gallery.innerHTML = `
${Gallery()}
<a href="#" class="item">
    <img src="" alt="">
</a>
`
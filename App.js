import Nav from "./modules/Nav/nav.js";
import Bio from "./modules/Bio/bio.js";
import addBioEventListeners from "./modules/Bio/events.js";
import Gallery from "./modules/Gallery/gallery.js";
import { addGalleryEventListeners, addImagesToGallery } from "./modules/Gallery/events.js";
import { request } from "./database.js";

// note: try removing the get entry from db and see what happens

// We create a function to later render to the dom
const App = async() => {
    return `
        ${Nav()}
        <div class="container">
            ${await Bio()}
            ${Gallery()}
        </div>
    `
}


// REFERENCES TO THE DOM
// Reference to the root Div
const rootDiv = document.querySelector('#root');


// using the IDB in the application now
request.onsuccess = async () => {
    // Rendering the root Div to the Dom...order is important here...
    rootDiv.innerHTML = await App();
    addBioEventListeners();
    addGalleryEventListeners();
    await addImagesToGallery();
}



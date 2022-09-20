import Nav from "./modules/Nav/nav.js";
import Bio from "./modules/Bio/bio.js";
import addBioEventListeners from "./modules/Bio/events.js";
import Gallery from "./modules/Gallery/gallery.js";
import { request } from "./database.js";

// We create a function to later render to the dom
const App = () => {
    return `
        ${Nav()}
        <div class="container">
            ${Bio()}
            ${Gallery()}
        </div>
    `
}


// REFERENCES TO THE DOM

// Reference to the root Div
const rootDiv = document.querySelector('#root');
// Rendering the root Div to the Dom. This is very important before any other manipulation is done. We do this by Calling the App function and place it in the Div with id of "root"
// 
rootDiv.innerHTML = App();

// using the IDB in the application now
request.onsuccess = () => {
    addBioEventListeners();
}






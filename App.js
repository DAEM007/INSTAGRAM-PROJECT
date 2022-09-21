import Nav from "./modules/Nav/nav.js";
import Bio from "./modules/Bio/bio.js";
import addBioEventListeners from "./modules/Bio/events.js";
import Gallery from "./modules/Gallery/gallery.js";
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
    // Rendering the root Div to the Dom. This is very important before any other manipulation is done. We do this by Calling the App function and place it in the Div with id of "root"...notice we already have a reference to the root from above.
    rootDiv.innerHTML = await App();
    addBioEventListeners();
}


// let objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];

// let result = objArray[1].bar;

// console.log(result);
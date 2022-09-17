import Nav from "./modules/Nav/nav.js";
import Bio from "./modules/Bio/bio.js";
import Gallery from "./modules/Gallery/gallery.js";
import { request } from "./database.js";


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
// Rendering the root Div to the Dom. This is very important before any other manipulation is done.
// Call the App function and place it in the Div with id of "root"
rootDiv.innerHTML = App();

// Reference to the form in the Bio function/session
const editBioForm = document.querySelector('.edit-bio-form');

//OTHER DOM MANIPULATION AND RENDERING

// Event listener to form for changes in the Bio name
editBioForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name').value;
    const nameOutput = document.querySelector('.name');
    nameOutput.innerText = nameInput;
})



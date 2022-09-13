import Nav from "./modules/nav.js";
import Bio from "./modules/bio.js";
import Gallery from "./modules/gallery.js";


const App = () => {
    return `
        ${Nav()}
        <div class="container">
        ${Bio()}
        ${Gallery()}
        </div>
    `
}


// using query selector to query the dom
// const root = document.querySelector('#root');
// root.innerHTML = App();

document.getElementById('root').innerHTML = App();
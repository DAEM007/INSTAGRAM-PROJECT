import Nav from "./modules/nav";
import Bio from "./modules/bio";
import Gallery from "./modules/gallery";


const App = () => {
    return `
        ${Nav()}
        ${Bio()}
        ${Gallery()}
    `
}

// const root = document.querySelector('#root');
// root.innerHTML = App();

document.getElementById('root').innerHTML = App();
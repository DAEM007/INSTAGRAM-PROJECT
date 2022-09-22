import { addEntryToDb } from "../../database.js";

const addGalleryEventListeners = () => {
    // Get a reference to the photo input
    const photoInput = document.querySelector('#add-photo-input');
    const gallery = document.querySelector('.gallery');
    // Add an event listener to the photo input to display the photos...note it is a change event
    photoInput.addEventListener('change', () => {
        console.log(photoInput.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(photoInput.files[0]);

        // Event for the file url
        reader.addEventListener('load', () => {
            addEntryToDb('gallery', reader.result);
        })
        // gallery.innerHTML = `
        //     ${Gallery()}
        //     <a href="#" class="item">
        //         <img src="${photoInput.files[0]}" alt="">
        //     </a>
        // `
    })
}

export default addGalleryEventListeners;




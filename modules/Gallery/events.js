import { addEntryToDb, getEntryFromDb } from "../../database.js";

const addGalleryEventListeners = () => {
    // Get a reference to the photo input
    const photoInput = document.querySelector('#add-photo-input');
    // Add an event listener to the photo input to display the photos...note it is a change event
    photoInput.addEventListener('change', () => {
        console.log(photoInput.files[0]);
        // We would have to use a file reader to read the url of the file from the local disk...hence we use File reader object in js
        const reader = new FileReader();
        reader.readAsDataURL(photoInput.files[0]);

        // clear entries from gallery thread before adding another entry to the database
        // clearAllEntries('gallery');

        // Event for the file url
        reader.addEventListener('load', () => {
            // Adding entry to the gallery store in the database
            addEntryToDb('gallery', reader.result);
        })

    })

}

const addImagesToGallery = async () => {
    // Wait to get the entries from the gallery store using async/await
    const galleryData = await getEntryFromDb('gallery');
    // Reference to the gallery section
    const gallerySection = document.querySelector('.gallery');
    // References to the items from the gallery store to be rendered to the DOM 
    const galleryItems = galleryData.map(singlePhoto => {
        return `
        <a href="#" class="item">
            <img src= "${singlePhoto ? singlePhoto : ''}" alt="">
        </a>
        `
    })
    // Render the images/photos to the DOM
    gallerySection.innerHTML = galleryItems.join('');
}



export { addGalleryEventListeners, addImagesToGallery };




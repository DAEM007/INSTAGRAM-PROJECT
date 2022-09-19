import { addEntryToDb } from "../../database.js";

// Create function that would fire for the events in the bio form
const addBioEventListeners = () => {
    // Reference to the dom
    const editBioForm = document.querySelector('.edit-bio-form');

    // Event listener to form for changes in the Bio name
    editBioForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const bioName = document.querySelector('#bioName').value;
        const bioDescription = document.querySelector('#bioDescription').value;
        const nameOutput = document.querySelector('.name');
        const descriptionOutput = document.querySelector('.decription');
        // name and description output to the DOM
        nameOutput.innerText = bioName;
        descriptionOutput.innerText = bioDescription;

        // add entry function for the database
        addEntryToDb('bio', {bioName, bioDescription});
    })
}

export default addBioEventListeners;
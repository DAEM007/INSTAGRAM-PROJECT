import { addEntryToDb } from "../../database.js";

// Create function that would fire for the events in the bio form
const addBioEventListeners = () => {
    // Reference to the dom for the edit bio form
    const editBioForm = document.querySelector('.edit-bio-form');
    const editBioButton = document.querySelector('#editBioButton');

    // Event listener for the edit bio button before the edit bio form...recall order matters in your code
    editBioButton.addEventListener('click', (e) => {
        e.preventDefault();
        editBioForm.style.display = 'block';
    })

    // Event listener to form for changes in the Bio name
    editBioForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Reference to the dom for the bio for the bio form element
        const bioName = document.querySelector('#bioName').value;
        const bioDescription = document.querySelector('#bioDescription').value;
        const nameOutput = document.querySelector('.name');
        const descriptionOutput = document.querySelector('.decription');
        // Dom manipulation
        nameOutput.innerText = bioName;
        descriptionOutput.innerText = bioDescription;

        // add entry function for the database
        addEntryToDb('bio', {bioName, bioDescription});
    })

}

export default addBioEventListeners;
import { addEntryToDb, clearAllEntries } from "../../database.js";

// Create function that would fire for the events in the bio form
const addBioEventListeners = () => {
    // Reference to the dom for the edit bio form
    const editBioForm = document.querySelector('.edit-bio-form');
    const editBioButton = document.querySelector('#editBioButton');
    const cancelBioButton = document.querySelector('#cancel');

    // Event listener for the edit bio button before the edit bio form...recall order matters in your code
    editBioButton.addEventListener('click', (e) => {
        e.preventDefault();
        editBioForm.style.display = 'block';
    })

    // Event listener to form for changes in the Bio name and description
    editBioForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Reference to the dom for the bio for the bio form element
        const bioName = document.querySelector('#bioName').value;
        const bioDescription = document.querySelector('#bioDescription').value;
        const nameOutput = document.querySelector('.name');
        const descriptionOutput = document.querySelector('.decription');
        
        // Clear all entries from bio thread before adding another entry to the database
        clearAllEntries('bio');

        // Add entry function for the database
        addEntryToDb('bio', {bioName, bioDescription});

        // Rendering for the bio name and description 
        nameOutput.innerText = bioName;
        descriptionOutput.innerText = bioDescription;

        // Hide the form after it has been filled
        editBioForm.style.display = 'none';
    })

    // Event listener to the cancel button to change the display of the edit bio form
    cancelBioButton.addEventListener('click', (e) => {
        e.preventDefault();
        editBioForm.style.display = 'none';
    })

}

export default addBioEventListeners;
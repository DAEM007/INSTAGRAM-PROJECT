
const editBioForm = () => {
    return `
    <form class="edit-bio-form">
        <input type="text" id="bioName" placeholder="Name" required>
        <input type="text" id="bioDescription" placeholder="Description" required>
        </br>
        <button id="submit" type="submit">submit</button>
        <button id="cancel" type="submit">Cancel</button>
    </form>
    `
}



export default editBioForm;
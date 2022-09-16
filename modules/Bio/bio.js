
// Note from the above we would want the class of name in the profile-info to be dynamic and not static...to solve this we made Bio a function so  we can then call that function later.

const Bio = () => {
    return  `
        <section class="bio">
            <div class="profile-photo">
                <img src="https://media.istockphoto.com/photos/attractive-multiethnic-latin-woman-in-headphones-using-computer-in-picture-id1408841682?k=20&m=1408841682&s=612x612&w=0&h=MKNH6XimB_B2NsjoxrveDzm5YLijOkA1Sur5YqDKt3I=" alt="profile-photo">
            </div>
            <div class="profile-info">
                <p class="name">diana gal gadot</p>
                <p class="about">Hey there, I am Diana Gal Gadot and I am from the Amazonian race.</p>
                <button>edit bio</button>
            </div>
            <form class="edit-bio-form">
                <input type="text" id="name" placeholder="name">
                <button type="submit">submit</button>
            </form>
        </section>
    `
}

export default Bio;

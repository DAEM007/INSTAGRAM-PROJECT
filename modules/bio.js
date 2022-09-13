
// Note from the above we would want the class of name in the profile-info to be dynamic and not static...to solve this we made Bio a function so  we can then call that function later.

const Bio = () =>`
    <section class="bio">
        <div class="profile-photo">
            <img src="https://media.istockphoto.com/photos/attractive-multiethnic-latin-woman-in-headphones-using-computer-in-picture-id1408841682?k=20&m=1408841682&s=612x612&w=0&h=MKNH6XimB_B2NsjoxrveDzm5YLijOkA1Sur5YqDKt3I=" alt="profile-photo">
        </div>
        <div class="profile-info">
            <p class="name">diana gal gadot</p>
            <button>follow</button>
        </div>
    </section>
`

export default Bio;

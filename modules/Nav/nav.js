
// Recall that we had to use the backticks because single and double quotes for this context in js works for a single line...and returns an error when you move to another line...You get the gist.

const Nav = () => `
    <nav>
        <a href="#" class="logo">
            <img src="./Images/Instagram-logo.png">
        </a>
        <input type="text" placeholder="search" class="search">
        <span class="nav-links">
            <a href="#"><i class="fa-solid fa-house fa-xl"></i></a>
            <a href="#"><i class="fa-regular fa-message fa-xl"></i></a>
            <label for="add-photo-input">
                <a href="#"><i class="fa-regular fa-square-plus fa-xl"></i></a>
            </label>
            <a href="#"><i class="fa-regular fa-compass fa-xl"></i></a>
            <a href="#"><i class="fa-regular fa-heart fa-xl"></i></a>
        </span>
    </nav>
`

export default Nav;

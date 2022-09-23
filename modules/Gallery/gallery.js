import { getEntryFromDb } from "../../database.js";


const Gallery = async () => {
    const galleryData = await getEntryFromDb('gallery');
    console.log(galleryData);
    const galleryItems = galleryData.map(singlePhoto => {
        return `
        <a href="#" class="item">
            <img src="${singlePhoto}" alt="">
        </a>
        `
    })


    return `
        <input type="file" name="photo" id="add-photo-input">
        <div class="gallery-nav"></div>
        <section class="gallery">
          ${galleryItems}
        </section>
    `

} 

export default Gallery;
const galleri = {
    imageHolder: null,
    modal: null,
    current: {
        title: null,
        description: null,
        img: null
    },
    setup(){
        this.imageHolder = document.getElementById("image-holder");
        this.modal = document.getElementById("gallery-modal");
        this.modal.style.display = "none";
        this.current = {
            title: this.modal.querySelector("h3"),
            description:  this.modal.querySelector("p"),
            img: this.modal.querySelector("img")
        };
    },
    openImage(img){
        this.modal.style.display = "flex";
        const info = img.previousElementSibling;
        this.current.title.innerHTML = info.querySelector("h3").innerHTML;
        this.current.description.innerHTML = info.querySelector("p").innerHTML;
        this.current.img.setAttribute("src", img.getAttribute("src"));
    },
    close(){
        this.modal.style.display = "none";
        this.current.title.innerHTML = "";
        this.current.description.innerHTML = "";
        this.current.img.setAttribute("src", null);
    }
};


const navBar = {
    container: null,
    pages: [{
        "name": "Hjem",
        "path":"index.html"
    },
    {
        "name": "Bestilling",
        "path":"ordering.html"
    },
    {
        "name": "Galleri",
        "path":"gallery.html"
    },
    {
        "name": "Tilbakemelding",
        "path":"feedback.html"
    }],
    setup(){
        this.container = document.getElementById("nav-bar");
        for (let i = 0; i < this.pages.length; i++) {
            let element = document.createElement("a");
            element.innerHTML = capitalizeFirstLetter(this.pages[i].name);
            element.setAttribute("href", this.pages[i].path);
            this.container.appendChild(element);
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    navBar.setup();
});



function capitalizeFirstLetter(str) {
    if (!str) {
      return ""; // Handles empty strings safely
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const app = {};

const galleri = {
    imageHolder: null,
    modal: null,
    title: null,
    description:null,
    img: null,
    setup(){
        this.imageHolder = document.getElementById("image-holder");
        this.modal = document.getElementById("image-popout");
        this.modal.style.display = "none";
        this.title = this.modal.querySelector("h3");
        this.description = this.modal.querySelector("p");
        this.img = this.modal.querySelector("img");
    },
    openImage(img){
        console.log(img);
        this.modal.style.display = "flex";
        const info = img.previousElementSibling;
        this.title.innerHTML = info.querySelector("h3").innerHTML;
        this.description.innerHTML = info.querySelector("p").innerHTML;
        this.img.setAttribute("src", img.getAttribute("src"));
    },
    closeModal(obj){
        this.modal.style.display = "none";
        this.title.innerHTML = "";
        this.description.innerHTML = "";
        this.img.setAttribute("src", null);
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

const benefitsText = [
    "Ingen tidligere erfaring nødvendig",
    "Alt materiale inkludert",
    "For alle aldre",
    "Slapp av og lad opp batteriene"
];

document.addEventListener("", () => {

    const textHolder = document.getElementById("text-slide");
    const p = textHolder.querySelector("p");
    p.innerText = benefitsText[0];
    let index = 1;


    handleText();

    function handleText(){
        const timeout = 2000;
        setTimeout(() => {
            p.classList.remove("text-animation-out");
            p.classList.add("text-animation");
            p.innerText = benefitsText[index % benefitsText.length];
            index++;
            setTimeout(() => {
                p.classList.remove("text-animation");
                p.classList.add("text-animation-out");
                handleText();
            }, timeout);
        }, timeout);
    }
    // setInterval(() => {
    //     p.innerText = benefitsText[index % benefitsText.length];
    //     index++;
    // }, 3000);
});

function capitalizeFirstLetter(str) {
    if (!str) {
      return ""; // Handles empty strings safely
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
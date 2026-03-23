const app = {};



let pages = [
    {
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
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.getElementById("nav-bar");
    for (let i = 0; i < pages.length; i++) {
        let element = document.createElement("a");
        element.innerHTML = capitalizeFirstLetter(pages[i].name);
        element.setAttribute("href", pages[i].path);
        navBar.appendChild(element);
    }
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
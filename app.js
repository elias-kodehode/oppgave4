const app = {};

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


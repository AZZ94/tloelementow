const setBackground = () => {
    let firstParagraph = document.querySelector(".first");
    let secondParagraph = document.querySelector(".second");

    firstParagraph.classList.add("bgred");
    secondParagraph.classList.add("bgyellow");
}
//     firstParagraph.style.backgroundColor = "red";
//     secondParagraph.style.backgroundColor = "yellow";
// }

let button = document.getElementById("btn");
button.addEventListener("click", setBackground);

const wrapper = document.querySelector(".wrapper" );
const question = document.querySelector(".question" );
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Aaaaa, Aku Sayang Audi Jugaa";
    gif.src =
"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBt.addEventListener( "mouseover", () => {
    const noBtRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtRect.height;

    const randomX = Math.floor (Math.random () * maxX);
    const randomY = Math.floor (Math.random () * maxY);

    noBtn.style.left =randomX + "px";
    noBtn.style.top = randomY + "px";

});
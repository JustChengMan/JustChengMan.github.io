const homeBurger = document.querySelector("#burgerHome");
const homeBurgerMenu = document.querySelector("#burgerMenuHome");
const workBurger = document.querySelector("#burgerWork");
const workBurgerMenu = document.querySelector("#burgerMenuWork");
const contactBurger = document.querySelector("#burgerContact");
const contactBurgerMenu = document.querySelector("#burgerMenuContact");
const burgerLinks = document.querySelectorAll("#burgerLink");

homeBurger.addEventListener("click", () => {
    homeBurgerMenu.classList.toggle("is-active");
    homeBurger.classList.toggle("is-active");
});

workBurger.addEventListener("click", () => {
    workBurgerMenu.classList.toggle("is-active");
    workBurger.classList.toggle("is-active");
});

contactBurger.addEventListener("click", () => {
    contactBurgerMenu.classList.toggle("is-active");
    contactBurger.classList.toggle("is-active");
});

for(let l of burgerLinks){
    l.addEventListener("click", () => {
        closeAllBurgers();
    });
};

const closeAllBurgers = () =>{
    homeBurger.classList.remove("is-active");
    homeBurgerMenu.classList.remove("is-active");
    workBurger.classList.remove("is-active");
    workBurgerMenu.classList.remove("is-active");
    contactBurger.classList.remove("is-active");
    contactBurgerMenu.classList.remove("is-active");
};
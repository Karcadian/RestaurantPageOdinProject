import initialLoad from "./initialLoad";
import menu from "./menu";

document.addEventListener('DOMContentLoaded', () => {
    initialLoad();
});

document.getElementById("home").addEventListener("click", () => {
    initialLoad();
});

document.getElementById("menu").addEventListener("click", () => {
    menu();
})


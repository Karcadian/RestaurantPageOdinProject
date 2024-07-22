import initialLoad from "./initialLoad";
import menu from "./menu";
import contact from "./contact";
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    initialLoad();
});

document.getElementById("home").addEventListener("click", () => {
    initialLoad();
});

document.getElementById("menu").addEventListener("click", () => {
    menu();
});

document.getElementById("contact").addEventListener("click", () => {
    contact();
});
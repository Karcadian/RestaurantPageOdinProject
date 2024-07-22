function menu() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    const matchaLatte = document.createElement('div');
    matchaLatte.textContent = "Iced or hot, it is sure to be delicious!";

    const matchaLatteImg = document.createElement('img');
    matchaLatteImg.src = "../images/iced-matcha-latte.jpg";

    matchaLatte.appendChild(matchaLatteImg);
    content.appendChild(matchaLatte);
}

export default menu;
function initialLoad() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = 'Welcome to Matcha Haven!';

    const description = document.createElement('p');
    description.textContent = 'Enjoy the finest matcha teas and treats in town.';

    const img = document.createElement('img');
    img.src = '../images/iced-matcha-latte.jpg';
    img.alt = 'A beautiful cup of matcha tea';

    content.appendChild(welcomeMessage);
    content.appendChild(description);
    content.appendChild(img);
}

export default initialLoad;

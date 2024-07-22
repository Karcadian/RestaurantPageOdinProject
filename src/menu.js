function menu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const menuItems = [
        {
            name: 'Iced Matcha Latte',
            description: 'Iced or hot, it is sure to be delicious!',
            price: '$4.50',
            imgSrc: '../images/iced-matcha-latte.jpg',
        },
        {
            name: 'Matcha Cheesecake',
            description: 'Creamy and rich matcha-flavored cheesecake.',
            price: '$5.00',
            imgSrc: '../images/matcha-cheesecake.jpeg',
        },
        {
            name: 'Hot Matcha Tea',
            description: 'Traditional hot matcha tea for a soothing experience.',
            price: '$3.75',
            imgSrc: '../images/hot-matcha-tea.jpeg',
        },
    ];

    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item'; // Add class for styling

        const itemTitle = document.createElement('h2');
        itemTitle.textContent = item.name;
        itemDiv.appendChild(itemTitle);

        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.description;
        itemDiv.appendChild(itemDesc);

        const itemPrice = document.createElement('p');
        itemPrice.className = 'price'; 
        itemPrice.textContent = item.price;
        itemDiv.appendChild(itemPrice);

        const itemImg = document.createElement('img');
        itemImg.src = item.imgSrc;
        itemImg.alt = item.name;
        itemImg.style.width = '300px'; // Resize image
        itemImg.style.height = 'auto'; // Maintain aspect ratio
        itemDiv.appendChild(itemImg);

        content.appendChild(itemDiv);
    });
}

export default menu;

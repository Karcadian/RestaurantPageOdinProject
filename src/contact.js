function contact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactDiv = document.createElement('div');
    contactDiv.innerHTML = `
        <h2>Contact Us</h2>
        <p>Email: contact@matchahaven.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Matcha Lane, Tea Town, TT 45678</p>
    `;

    content.appendChild(contactDiv);
}

export default contact;

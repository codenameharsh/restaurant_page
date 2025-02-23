import createHomepage from './home.js';

document.addEventListener('DOMContentLoaded', () => {
  createHomepage();

  const homeBtn = document.getElementById('home-btn');
  const menuBtn = document.getElementById('menu-btn');
  const contactBtn = document.getElementById('contact-btn');

  homeBtn.addEventListener('click', () => {
    // Clear the content div
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    // Create the homepage content
    createHomepage();
  });

  menuBtn.addEventListener('click', () => {
    // Clear the content div
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    // Create the menu content
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `
      <h1>Menu</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    `;
    contentDiv.appendChild(menuDiv);
  });

  contactBtn.addEventListener('click', () => {
    // Clear the content div
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    // Create the contact content
    const contactDiv = document.createElement('div');
    contactDiv.innerHTML = `
      <h1>Contact</h1>
      <p>Email: example@example.com</p>
      <p>Phone: 123-456-7890</p>
    `;
    contentDiv.appendChild(contactDiv);
  });
});
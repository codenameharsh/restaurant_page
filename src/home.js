function createHomepage() {
    const contentDiv = document.getElementById('content');
    const homepageDiv = document.createElement('div');
    homepageDiv.innerHTML = `
      <h1>Welcome to our restaurant!</h1>
      <p>We serve the best food in town.</p>
      <img src="https://via.placeholder.com/300" alt="Restaurant image">
    `;
    contentDiv.appendChild(homepageDiv);
  }
  
  export default createHomepage;
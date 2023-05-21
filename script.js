// Header
function getCurrentUsername() {
    // Replace this with your logic to fetch the current username
    return "Username";
  }
  
  // Example JavaScript code to handle logout action
  function logout() {
    // Replace this with your logout logic
    alert("Logged out!");
  }
  
  // Example JavaScript code to dynamically generate navigation elements
  function generateNavigation() {
    const username = getCurrentUsername();
    const navElement = document.getElementById("nav");
    navElement.innerHTML = `
      <ul>
        <li>${username}</li>
        <li><a href="#" onclick="logout()">Logout</a></li>
      </ul>
    `;
  }
  
  // Call the function to generate the navigation when the page loads
  window.onload = generateNavigation;

 
  
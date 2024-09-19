document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('user')); // Fetch user from localStorage
  
  if (user) {
    document.getElementById('user-name').textContent = user.name; // Show user's name
  } else {
    // If no user is logged in, redirect to login page
    window.location.href = 'login.html';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Clear user data from localStorage (or any other session storage)
  localStorage.removeItem('user');

  // Optionally, display a message and then redirect after a short delay
  setTimeout(() => {
    window.location.href = 'login.html'; // Redirect to login page
  }, 2000); // 2-second delay for user feedback
});

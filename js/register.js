document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      const data = await response.json();
      
      if (response.ok) {
        // Save the user session (could be a token or just user data)
        localStorage.setItem('user', JSON.stringify(data.user)); 
        alert(data.message);
        window.location.href = 'dashboard.html'; // Redirect to dashboard on successful registration
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
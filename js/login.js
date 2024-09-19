function handleLogin(e) {

  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);

      if (data.message === 'User not found') {
        alert('User not found');
        return;
      } else if (data.message === 'Invalid credentials') {
        alert('Invalid credentials');
        return;
      }
      console.log('Token:', data.token);
      localStorage.setItem('token', data.token);
      window.location.href = 'dashboard.html'; // Redirect to dashboard
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

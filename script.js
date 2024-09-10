// Array of background images
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

// Function to change the background image on page load and refresh
function changeBackground() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = `url(${randomImage})`;
}

// Run the function when the page loads
window.onload = changeBackground;

// Signup function to save user data in local storage
function signup() {
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Check if all fields are filled
  if (!name || !email || !password) {
    alert('Please fill out all fields.');
    return;
  }

  // Save user data to localStorage
  const user = { name, email, password };
  localStorage.setItem('user_' + email, JSON.stringify(user));
  alert('Sign up successful! You can now log in.');
  
  // Clear fields
  document.getElementById('signup-name').value = '';
  document.getElementById('signup-email').value = '';
  document.getElementById('signup-password').value = '';
}

// Login function to authenticate the user
function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Retrieve user data from localStorage
  const storedUser = localStorage.getItem('user_' + email);
  
  if (storedUser) {
    const user = JSON.parse(storedUser);
    
    // Check if the password matches
    if (user.password === password) {
      alert('Login successful! Redirecting to checkout...');
      // Redirect to checkout.html after successful login
      window.location.href = 'checkout.html';
    } else {
      alert('Incorrect password. Please try again.');
    }
  } else {
    alert('No account found with this email. Please sign up first.');
  }

  // Clear fields
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
}

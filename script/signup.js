// Form submission event
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Signup successful!');
  signupForm.reset();
});

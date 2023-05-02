// JavaScript для модального вікна реєстрації
const registrationModalLink = document.querySelector('#registrationModalLink');
const registrationModal = document.querySelector('#registrationModal');
const registrationCloseModalBtn = document.querySelector('.close-modal5');

// Show registration modal on registration link click
registrationModalLink.addEventListener('click', () => {
  registrationModal.style.display = 'block';
});

// Close registration modal on close button click
registrationCloseModalBtn.addEventListener('click', () => {
  registrationModal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (event) => {
  if (event.target === registrationModal) {
    registrationModal.style.display = 'none';
  }
});

// Handle registration form submit
const registrationForm = document.querySelector('#registrationModal form');
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#registrationModal #email').value;
  const password = document.querySelector('#registrationModal #password').value;
  const confirmPassword = document.querySelector('#registrationModal #confirm-password').value;
  // Perform registration logic here
  console.log(`Registration submitted with email: ${email} and password: ${password}`);
  registrationForm.reset();
  registrationModal.style.display = 'none';
});

// JavaScript для модального вікна реєстрації
const loginModalLink = document.querySelector('#loginModalLink');
const loginModal = document.querySelector('#loginModal');
const loginCloseModalBtn = document.querySelector('.close-modal6');

// Show registration modal on registration link click
loginModalLink.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Close registration modal on close button click
loginCloseModalBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

// Handle registration form submit
const loginForm = document.querySelector('#registrationModal form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const login = document.querySelector('#registrationModal #login').value;
  const password = document.querySelector('#registrationModal #password').value;
  // Perform registration logic here
  console.log(`Logged in with: ${login} and password: ${password}`);
  loginForm.reset();
  loginModal.style.display = 'none';
});

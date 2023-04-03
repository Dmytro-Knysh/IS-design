import './scss/main.scss'
const openModalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
});



const openModalBtn1 = document.querySelector('.modal-btn1');
const modal1 = document.querySelector('.modal1');
const closeModalBtn1 = document.querySelector('.close-modal1');

openModalBtn1.addEventListener('click', () => {
  modal1.classList.add('show');
});

closeModalBtn1.addEventListener('click', () => {
  modal1.classList.remove('show');
});

window.addEventListener('click', (event1) => {
  if (event1.target === modal1) {
    modal1.classList.remove('show');
  }
});



const customTourBtn = document.getElementById('custom-tour-btn');
const customTourWindow = document.querySelector('.custom-tour-window');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const destinationInput = document.getElementById('destination');
const activitiesInput = document.getElementById('activities');
const budgetInput = document.getElementById('budget');
const durationInput = document.getElementById('duration');

customTourBtn.addEventListener('click', () => {
  customTourWindow.classList.remove('hidden');
});

submitBtn.addEventListener('click', () => {
  // Validate form inputs and submit form data to server
});

cancelBtn.addEventListener('click', () => {
  customTourWindow.classList.add('hidden');
});

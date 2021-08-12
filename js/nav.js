const listButton = document.querySelector('.list-button');
const contactsButton = document.querySelector('.add-contacts');
const addNewButton = document.querySelector('.add-new');
const homeButton = document.querySelector('.home');

const contact = document.querySelector('.contact');
const list = document.querySelector('.list');
const form = document.querySelector('.book-form');

listButton.addEventListener('click', (e) => {
  e.preventDefault();
  contact.classList.add('d-none');
  form.classList.add('d-none');
  list.classList.remove('d-none');
});

contactsButton.addEventListener('click', (e) => {
  e.preventDefault();
  list.classList.add('d-none');
  form.classList.add('d-none');
  contact.classList.remove('d-none');
});

addNewButton.addEventListener('click', (e) => {
  e.preventDefault();
  contact.classList.add('d-none');
  list.classList.add('d-none');
  form.classList.remove('d-none');
});

homeButton.addEventListener('click', (e) => {
  e.preventDefault();
  contact.classList.remove('d-none');
  list.classList.remove('d-none');
  form.classList.remove('d-none');
});

// Date
/* eslint-disable no-undef */
const dateField = document.querySelector('.date');
const getTime = () => {
  const { DateTime } = luxon;
  const time = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  dateField.innerHTML = time;
};

getTime();

// Add a book collection
let books = [
  {
    id: 1,
    title: 'The River Between',
    author: 'Ngugi Wa Thiongo',
  },
  {
    id: 2,
    title: 'Half of a yellow sun ',
    author: 'Chimamanda Ngozi Adichie ',
  },
];

// Method to addBook

const addBook = (book) => {
  books.push(book);
};

const book = {
  id: 3,
  title: 'Things fall apart',
  author: 'Chinua Achebe',
};

addBook(book);


// // REmove a book
const removeBook = (id) => {
  books = books.filter((book) => {
    return book.id !== id;
  });
};

// displaying books
books.forEach((book) => {
  const parentDiv = document.querySelector('.books');
  const div = document.createElement('div');
  div.classList.add('book');
  div.innerHTML = `
    <h5>${book.title}</h5>  
    <p>${book.author}</p>  
    <button>remove</button>
    <hr>
  `;

  parentDiv.appendChild(div);
});


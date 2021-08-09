// Add a book collection
const books = [
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
  id:3,
  title: 'Things fall apart',
  author: 'Chinua Achebe',
};

addBook(book)


// REmove a book

const removeBook = (id) => {
  return books.filter((book) => {
    book.id !== id;
  });
};


console.log(books);
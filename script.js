const btn = document.getElementById('add-book');
const library_grid_div = document.getElementById('grid-library');
const myLibrary = [];

function Book(title, author, genre, read){
  this.title = title,
  this.author = author,
  this.genre = genre,
  this.read = read;
}

Book.prototype.bookReport = function(){
  this.read = (this.read.toLowerCase() === 'yes') ? 'Have read.' : 'Not read yet!';
  return `${this.title} by ${this.author}, a ${this.genre} book. ${this.read}`;
}

  // // Creates a new book-tile after form submission
function buildBookTile(newBook){
  let book = document.createElement('div');
  library_grid_div.appendChild(book).classList = 'book-tile';
  // ** I think I have to create the ability to create objects first, THEN try to plug in the information into HTML
  

}

 // // Adds new Book object to myLibrary array
function addBookToLibrary(newBook){
  myLibrary.push(newBook);
  return
}

 // // Removes Book object from myLibrary array
function removeBookFromLibrary(bookInfo){
  myLibrary.pop(bookInfo);
  return
};

 // // Loops through myLibrary array and displays book-tiles
function displayBooks(){
  for(let i = 0; i < myLibrary.length; i++){
    myLibrary[i].bookReport();
  };
  
};

let book1 = new Book('yep', 'that guy', 'spooky-scary', 'nopers');
let book2 = new Book('yep', 'this guy', 'spooky-scary', 'nopers');
let book3 = new Book('yep', 'that guy', 'spooky-history', 'nopers');
let book4 = new Book('yep', 'that guy', 'spooky-scary', 'yes');

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)
console.log(displayBooks());
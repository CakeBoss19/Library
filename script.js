let myLibrary = [];

function Book(title, author, genre, read){
  this.title = title,
  this.author = author,
  this.genre = genre,
  this.read = read;
}

Book.prototype.bookReport = function(){
  this.read = (this.read.toLowerCase() === 'yes') ? 'Have read.' : 'Not read yet!';
  return `${this.title} by ${this.author}, a ${this.genre} book. ${this.read}`
}

function addBookToLibrary(newBook){
  myLibrary.push(newBook);
  return
}

function removeBookFromLibrary(bookInfo){
  myLibrary.pop(bookInfo);
  return
};

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
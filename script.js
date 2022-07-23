let myLibrary = [];

function Book(title, author, genre, read){
  this.title = title,
  this.author = author,
  this.genre = genre,
  this.read = read;
}

function addBookToLibrary(book){
  myLibrary.push(book);
  return
}

const book1 = new Book('name', 'person', 'history', 'yes');

Book.prototype.bookReport = function(){
  this.read = (this.read.toLowerCase() === 'yes') ? 'Have read.' : ' Not read yet!';
  return `${this.title} by ${this.author}, a ${this.genre} book. ${this.read}`
}
// / Creates a book tile using objects' properties and values.
function buildBookTile(data){
  // variables must be INSIDE function to avoid book tiles overwriting eachother.
  let grid = document.getElementById('grid-library')
  let book = document.createElement('div');
  let title = document.createElement('h2')
  let author = document.createElement('p');
  let pages = document.createElement('p');
  let read = document.createElement('p');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  let span3 = document.createElement('span');
  let span4 = document.createElement('span')
  let label = document.createElement('label');
  let input = document.createElement('input');

  grid.appendChild(book).classList = 'book-tile';
  book.appendChild(title).classList = 'title';
    title.textContent = data[1].value;
  book.appendChild(author); 
    author.textContent = 'By: ';
  book.appendChild(pages);  
    pages.textContent = 'Pages: ';
  book.appendChild(read);
    author.appendChild(span1).classList = 'author-span info-span';
      span1.textContent = data[2].value;
    pages.appendChild(span2).classList = 'pages-span info-span';
      span2.textContent = data[3].value;
    read.appendChild(span3);     
      span3.textContent = 'Read? ';
    read.appendChild(label).classList = 'switch';
      label.appendChild(input).type = 'checkbox'; 
      label.appendChild(span4).classList = 'slider';
};

const form = document.getElementById('form')
const data = document.querySelector('#form').elements;
const btn = document.querySelector('#add-book');
const myLibrary = [];

function Book(title, author, pages){
  this.title = title,
  this.author = author,
  this.pages = pages;
}

 // // Adds new Book object to myLibrary array
 function addBookToLibrary(data){
  myLibrary.push(new Book(data[1].value, data[2].value, data[3].value));
  buildBookTile(data);
  return;
}

 // // Removes Book object from myLibrary array
function removeBookFromLibrary(){
  myLibrary.pop(bookInfo);
  return
};

function displayBooks(){
  myLibrary.forEach(buildBookTile);
  return;
};
  
btn.addEventListener('click', () =>{
  addBookToLibrary(data);
});
 // // Loops through myLibrary array and displays book-tiles
myLibrary.forEach(() => console.log('hey'));
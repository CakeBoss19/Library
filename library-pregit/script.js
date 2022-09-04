 // Creates a book tile using objects' properties and values.
function buildBookTile(book){
 // // variables must be INSIDE function to avoid book tiles overwriting eachother.
  let grid = document.getElementById('grid-library')
  let book_div = document.createElement('div');
  let title = document.createElement('h2')
  let author = document.createElement('p');
  let pages = document.createElement('p');
  let read = document.createElement('p');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  let span3 = document.createElement('span');
  let span4 = document.createElement('span')
  let label1 = document.createElement('label');
  let label2 = document.createElement('label');
  let input1 = document.createElement('input');
  let input2 = document.createElement('input');
  let radio = document.createElement('div');

  grid.appendChild(book_div).classList = 'book-tile';
  book_div.appendChild(title).classList = 'title';
    title.textContent = book.title.value;
  book_div.appendChild(author); 
    author.textContent = 'By: ';
  book_div.appendChild(pages);  
    pages.textContent = 'Pages: ';
  book_div.appendChild(read);
    author.appendChild(span1).classList = 'author-span info-span';
      span1.textContent = book.author.value;
    pages.appendChild(span2).classList = 'pages-span info-span';
      span2.textContent = book.pages.value;
    read.appendChild(span3);     
      span3.textContent = 'Read? ';
    read.appendChild(radio).classList = 'radio';
      radio.appendChild(label1).for = 'read'; 
      radio.appendChild(span4).classList = 'slider';
};

/*
<div id="radio" class="form-grid">
  <label for="read">Read?</label>
  <div class="radio">
    <label for="read">Yes</label>
    <input type="radio" value="yes" name="read" id="read-yes" checked>
    <label for="read">No</label>
    <input type="radio" value="no" name="read" id="read-no">
  </div>
</div>
*/

 // Set Global Variables
const form_container = document.querySelector('.form_container');
const form = document.getElementById('form');
const form_btn = document.querySelector('#form-btn');
const submit_btn = document.querySelector('#submit');
const cancel_btn = document.querySelector('#cancel-form');
const input_focus = document.querySelector('input[id="title"]');
const buttons = document.querySelectorAll('button');
const myLibrary = [];
console.log(buttons);

buttons.forEach((button) => {
  button.prototy;
})


 // Book Object Contructor
function Book(title, author, pages){
  this.title = title,
  this.author = author,
  this.pages = pages;
};

 // Adds new Book object to myLibrary array
function addBookToLibrary(arr){
  let book = new Book(arr[1], arr[2], arr[3]);
  myLibrary.forEach((obj) => {
    if(book === obj){
      return
    } else {}
  })
  myLibrary.push(book);
  return;
};

 // Removes Book object from myLibrary array
function removeBookFromLibrary(){
  myLibrary.pop(book);
  return;
};

 // Switches form's visibility between 'hidden' and 'visibile'
function toggleForm(){
  form.reset();
  form_container.classList.toggle('hidden');
  return;
};

 // Runs through myLibrary array and displays information
function displayLibrary(){
  myLibrary.forEach(book => buildBookTile(book));
  return;
};

 // Converts object[property: values;] into an array of just values
function getInfo(obj){
  let array = [];
  for(let i = 0; i < 6; i++){
    array.push(obj[i].value);
  } return array;
};

 // Actions to be taken if the book Title input is left empty
 //  input red warning text, etc.
function inputTitleErr(){
  let label = document.querySelector('label[for="title"]')
  if(label.lastElementChild){return};
  let p = document.createElement('p');
  label.appendChild(p).classList.add = 'inputTitleErr_p';
  p.textContent = '*title is empty';
};

 // checks to see if warning label exists or not
function checkWarning(){
  let label = document.querySelector('label[for="title"]')
  if(label.lastElementChild){
    label.lastElementChild.remove();
  } return;
}

submit_btn.addEventListener('click', () => {
  let data = getInfo(form.elements);
  if((data[1] === '' || data[1] === undefined)){ // checks if title was left empty
    inputTitleErr();
    return false; // ensures the form  will not be submitted 
  } else {
    addBookToLibrary(data);
  };
  toggleForm();
  return;
});
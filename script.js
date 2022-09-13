// Set Global Variables
const form_container = document.querySelector('.form_container');
const form = document.getElementById('form');
const form_btn = document.querySelector('#form-btn');
const submit_btn = document.querySelector('#submit');
const cancel_btn = document.querySelector('#cancel-form');
const input_focus = document.querySelector('input[id="title"]');
const buttons = document.querySelectorAll('button');
const library_grid = document.getElementById('library-grid');
const myLibrary = [];

// Creates p elements within a div to display information
function buildTile(obj){
 let book_div = document.createElement('div');
 let title = document.createElement('p');
 let author = document.createElement('p');
 let pageNum = document.createElement('p');
 let read = document.createElement('p');
 let omit = document.createElement('p');
 book_div.append(title, author, pageNum, read, omit);
 let nodes = book_div.childNodes; // creates a nodeList of each p element created and appended
 giveValues(obj, nodes);
 library_grid.appendChild(book_div).classList = 'book-div';
};

// Attaches the information from the book object onto it's DOM element
function giveValues(obj, arr){
  for(i = 0; i < arr.length; i++){
   let key = Object.keys(obj)[i];
   let keyValue = Object.values(obj)[i];
   if(keyValue === 'yes' || keyValue === 'no'){keyValue = capitalize(keyValue)};
   (key === 'remove') ? createButton(arr[i], key) : arr[i].textContent = keyValue;
   arr[i].classList = `flex flex-${key}`;
  }; return
};  

// Capitalizes the first  letter of a word.
function capitalize(str){
  arr = str.split('');
  firstLet = arr[0].toUpperCase();
  arr.splice(0, 1, firstLet);
  newString = arr.join('');
  return newString;
}

// Assigns datakeys and the event listeners corresponding to those keys
function assignDatakeys(){
  let remove_btns = document.querySelectorAll('.remove-btn');
  for(let i = 0; i < remove_btns.length; i++){
    remove_btns[i].dataset.key = `${i}`;
    remove_btns[i].addEventListener('click', () => {
      removeBook(remove_btns[i].dataset.key);
    });
  };
};

 // Removes a book from the library array
function removeBook(index){
  myLibrary.splice(index, 1);
  displayLibrary();
};


function createButton(tag, key){
  let button = document.createElement('button');
  if(key === 'read'){
    tag.appendChild(button).classList = 'read-btn';
    button.textContent = 'Read?';
  } else if(key === 'remove'){
    tag.appendChild(button).classList = 'remove-btn';
    button.textContent = 'Del';
  };
};

 // Book Object Contructor
function Book(title, author, page, read){
  this.title = title,
  this.author = author,
  this.number = page,
  this.read = read;
  this.remove = '';
};

Book.prototype.readToggle = function(){
  (this.read === 'yes') ? this.read = 'no' : this.read = 'yes';
  displayLibrary();
  return;
};

 // Adds new Book object to myLibrary array
function addBookToLibrary(obj){
  deleteDupes(obj);
  myLibrary.push(obj);
};

 // If multiple books sharing the same Title are entered, delete old book
function deleteDupes(obj){
  for(let i = 0; i < myLibrary.length; i++){
    if(obj.title === myLibrary[i].title){
      myLibrary.splice(i, 1);
    };
  }; 
};
 // Switches form's visibility between 'hidden' and 'visibile'
function toggleForm(){
  form.reset();
  form_container.classList.toggle('hidden');
  return;
};

 // Clears the existing grid of all elements
function clearGrid(){
  let book_divs = document.querySelectorAll('.book-div');
  book_divs.forEach((element)=>{
    if(element !== book_divs[0]){
      element.remove();
    };
  }); 
}; 

 // Runs through myLibrary array and displays information
function displayLibrary(){
  clearGrid();
  myLibrary.forEach((book) => {
    buildTile(book);
  });
  assignDatakeys();
};

// Returns the value of the checked radio box
function radioCheck(){
  let radios = document.getElementsByName('read');
  for(let i = 0; i < radios.length; i++){
    if(radios[i].checked){
      return radios[i].value;
    };
  }; 
};

 // Creates a book object from form inputs
function getInfo(obj){
  let array = [];
  for(let i = 1; i < obj.length; i++){
    array.push(obj[i].value);
  };
  let book = new Book(array[0], array[1], array[2], radioCheck()) // inputs checked radio input's value
  return book;
};

 // Appends an empty title input warning
function inputTitleErr(){
  let label = document.querySelector('label[for="title"]')
  if(label.lastElementChild){return};
  let p = document.createElement('p');
  label.appendChild(p).classList.add = 'inputTitleErr_p';
  p.textContent = '*title is empty';
};

 // removes the warning label as you type into the input
function checkWarning(){
  let label = document.querySelector('label[for="title"]')
  if(label.lastElementChild){
    label.lastElementChild.remove();
  } return;
}

submit_btn.addEventListener('click', ()=>{
  let book = getInfo(form.elements);
  if((book.title === '' || book.title === undefined)){ // checks if title was left empty
    inputTitleErr();
    return false; // ensures the form  will not be submitted 
  } else {
    addBookToLibrary(book);
  };
  toggleForm();
  displayLibrary();
  return;
});


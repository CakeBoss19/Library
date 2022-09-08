// Set Global Variables
const form_container = document.querySelector('.form_container');
const form = document.getElementById('form');
const form_btn = document.querySelector('#form-btn');
const submit_btn = document.querySelector('#submit');
const cancel_btn = document.querySelector('#cancel-form');
const input_focus = document.querySelector('input[id="title"]');
const buttons = document.querySelectorAll('button');
const table_grid = document.getElementById('table-grid');
const myLibrary = [];

// Creates p elements within a div to display information
function buildTile(obj){
 let table_div = document.createElement('div');
 let title = document.createElement('p');
 let author = document.createElement('p');
 let pageNum = document.createElement('p');
 let read = document.createElement('p');
 let omit = document.createElement('p');
 table_div.append(title, author, pageNum, read, omit);
 let nodes = table_div.childNodes; // creates a nodeList of each p element created and appended
 console.log(nodes);
 giveValues(obj, nodes);
 console.log()
 table_grid.appendChild(table_div).classList = 'table-div';
};

// Attaches the information from the book object onto it's DOM element
function giveValues(obj, arr){
  for(i = 0; i < arr.length; i++){
   let key = Object.keys(obj)[i];
   let keyValue = Object.values(obj)[i];
   key === 'remove' ? createDeleteButton(arr[i]) : arr[i].textContent = keyValue; // each p tag displays as textContent the properties: values
   arr[i].classList = `table table-${key}`; // Each created p tag gets a class referencing Object.property being displayed
  }; return 
};

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

 // Appends 'Del' button for each book to DOM
function createDeleteButton(tag){
  let button = document.createElement('button');
  let p = document.createElement('p');
  tag.appendChild(button).classList = 'remove-btn';
  button.textContent = 'Del';
};

 // Book Object Contructor
function Book(title, author, page, read){
  this.title = title,
  this.author = author,
  this.number = page,
  this.read = read;
  this.remove = '';
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
  let table_divs = document.querySelectorAll('.table-div');
  table_divs.forEach((element)=>{
    if(element !== table_divs[0]){
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


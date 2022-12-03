import { book } from './book';
import { getFormValues } from './formActions'

const libraryActions = () => {

  const library = [];

  // Receives an array of values and creates book objects 
  function createBookObject(array) {
    const newBookObject = book(array[0], array[1], array[2]);
    return newBookObject;
  }

  // Adds an object to the library;
  function addBookToLibrary(array) {
    const newBook = createBookObject(array);
    library.push(newBook);
  }

  // Removes an object from the library
  function removeBookFromLibrary(obj_id) {
    library.splice(obj_id, 1);
  }

  // Assign an id number to each object within an array equal to it's corresponding place within
  function objectIdAssignment(array) {
    for(let i = 0; i < array.length; i++) {
      array[i].setId(i);
    }
  }

  function getLibrary() {
    objectIdAssignment(library);
    return library;
  }

};

submitButton.addEventListener('click', () => {
  let values = getFormValues();
  addBookToLibrary(values);
  displayLibrary()
})
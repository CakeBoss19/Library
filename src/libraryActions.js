import { book } from './book';

export const Library = (() => {

  // Collection of object to be referenced
  const myLibrary = [];

  // Collection of objects removed.
  const deletedLibrary = [];

  // Assign an id number to each object indicating its place within the array
  function assignIds(array) {
    for(let i = 0; i < array.length; i++) {
      assignedArray[i].setId(i);
    } return array;
  }

  function getValues() {
    if(!elements[0].value) {
      return false;
    }
    const array = [];
    for(let i = 0; i < elements.length; i++) {
      array.push(elements[i].value);
    }
    return array;
  }

  return {
    submitBook(elements) {
      if(!elements[0]) {
        return false;
      }
      const values = getValues(form_elements)
      const bookObj = book(values[0], values[1], values[2])
      myLibrary.push(bookObj);
    },

    removeBookFromLibrary(obj_id) {
      myLibrary.splice(obj_id, 1);
    },

    getLibrary() {
      const finishedLibrary = assignIds(myLibrary);
      return finishedLibrary;       
    } 
  }
})();

// import { book } from './book';
// import { getFormValues } from './formActions'

const libraryActions = (() => {

  const library = [];

  // Receives an array of values and creates book objects 
  function createBookObject(array) {
    const newBookObject = book(array[0], array[1], array[2]);
    return newBookObject;
  }

  // Assign an id number to each object indicating its place within the array
  function assignIds(array) {
    for(let i = 0; i < array.length; i++) {
      assignedArray[i].setId(i);
    } return array;
  }

  return {
    addBookToLibrary(array) {
      const newBook = createBookObject(array);
      library.push(newBook);
    },

    removeBookFromLibrary(obj_id) {
      library.splice(obj_id, 1);
    },

    getLibrary() {
      const finishedLibrary = assignIds(library);
      return finishedLibrary;       
    } 
  }
})();

// export { libraryActions };
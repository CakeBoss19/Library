



 // // Adds new Book object to myLibrary array
function addBookToLibrary(data){
  myLibrary.push(new Book(data[1].value, data[2].value, data[3].value));
  return;
}

 // // Removes Book object from myLibrary array
function removeBookFromLibrary(){
  myLibrary.pop(bookInfo);
  return
};






 // // Loops through myLibrary array and displays book-tiles
// function displayBooks(){
//   for(let i = 0; i < (myLibrary.length); i++){
//     buildBookTile(myLibrary[i]);
//   };
//   return;
// };
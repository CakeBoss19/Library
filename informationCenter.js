(() => {
  function Book(title, author, pageNum) {
    
    return {
      title: title,
      author: author,
      pageNum: pageNum,
    }
  }

  console.log(book1);
  function displayBook(someBook) {
    return book.title;
  }

  function addBook(obj) {
    myLibrary.push(obj);
  }
  return { displayBook }
})



function grabFormInfo(obj) {
	const array = [];
		for(let i = 1; i < obj.length; i++){
		array.push(obj[i].value);
	}; return array;
};



export default function makeBook(obj) {
 // Creates a book object from form inputs
  let array = [];
  for(let i = 1; i < obj.length; i++){
    array.push(obj[i].value);
  };
  let book = new Book(array[0], array[1], array[2]) // inputs checked radio input's value
  return book;
};

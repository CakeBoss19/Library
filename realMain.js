

window.addEventListener('load', () => {
	const library_div = document.getElementById('library-grid');
	const submit_btn = document.querySelector('#submit');

	 // Creates a book object from form inputs;
function getInfo(obj){
  let array = [];
  for(let i = 1; i < obj.length; i++){
    array.push(obj[i].value);
  };
  let book = new Book(array[0], array[1], array[2], radioCheck()) // inputs checked radio input's value
  return book;
};

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
})
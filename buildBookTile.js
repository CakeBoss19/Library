// // Creates a book tile using object properties and values.
function buildBookTile(newBook){
  let book = document.createElement('div');
  let title = document.createElement('h2')
  let author = document.createElement('p');
  let genre = document.createElement('p');
  let read = document.createElement('p');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  let span3 = document.createElement('span');
  let span4 = document.createElement('span')
  let label = document.createElement('label');
  let input = document.createElement('input');
  let grid = document.getElementById('grid-library');
  
  // // checks to see if the book has been 'read' or not;
  function check(){
    if(newBook.read == 'yes'.toLowerCase()){
      input.checked = true;
    };
    return
  }

  grid.appendChild(book).classList = 'book-tile';
  book.appendChild(title).classList = 'title';
    title.textContent = newBook.title;
  book.appendChild(author);
    author.textContent = 'By: '
    author.appendChild(span1).classList = 'author-span info-span';
      span1.textContent = newBook.author;
  book.appendChild(genre);
    genre.textContent = 'Genre: '
    genre.appendChild(span2).classList = 'genre-span info-span';
      span2.textContent = newBook.genre;
  book.appendChild(read);
    read.appendChild(span3)
    read.appendChild(label).classList = 'switch';
    label.appendChild(input).type = 'checkbox'; 
    label.appendChild(span4).classList = 'slider';
      check();
}
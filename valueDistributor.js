//  takes a dom element created by someone else,
//  and some object information created by someone else,
//  and joins the two items together to return:
//  a dom element will all the apopend information ready to to be added to the dom

// builds empty p elements within a book div. Info to be injected elsewhere.
function buildTile(){
  let book_div = document.createElement('div');
  let title = tagMaker('p');
  let author = tagMaker('p');
  let pageNum = tagMaker('p');
  let read = tagMaker('p');
  let omit = tagMaker('p');
  book.append(title, author, pageNum, read, omit);
  return book_div;
}

function assignValues(domElement, obj) {
  let nodes = domElement.childNodes;
  for(let i = 0; i < nodes.length; i++) {
    let keyValue = Object.values(obj)[i];
    nodes[i].textContent = keyValue;
  }
};

export default function produceBookTile(obj) {
  let book = buildTile();
  assignValues(book, obj);
  return book;
}

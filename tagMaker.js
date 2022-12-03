function tagMaker(htmlTag, className, ...objArray) {
  let tag 
  //= document.createElement(htmlTag);
  if(className) {
    tag.classList.add(className);
  }
  if (objArray) {
    for(const obj of objArray) {
      tag.setAt
    }
  }
  return tag;
};

console.log(tagMaker('div', false, 1, 2, 3, 4))

function tagMaker2(...arrayOfObjects) {
  for(const obj of arrayOfObjects) {
    console.log(obj);
  }
  console.log(arrayOfObjects[0].length)
}

console.log(tagMaker2({title: 2}, {author: 2}))
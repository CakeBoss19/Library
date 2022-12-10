function checkForErrors(form_elements) {
  form_elements
}


export function getValues() {
  
  const array = [];
  for(let i = 0; i < elements.length; i++) {
    array.push(elements[i].value);
  }
  if(!elements[0].value) {
      inputError();
      return false;
    }
  return array;
}

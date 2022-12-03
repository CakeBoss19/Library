import { formErrorDisplay } from './displayController'

// Module for getting and giving form information
export const Form = (() => {
  const elements = document.getElementById('form').elements;

  function getFormValues() {
    const array = [];
    for(let i = 0; i < elements.length; i++) {
      if(!elements[i].value){
        formErrorDisplay(elements[i]);
        return false;
      } array.push(elements[i].value);
    }
    return array;
  }

  return { getFormValues }
})();
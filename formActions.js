import { throwFormError } from './displayController'

// Module for getting and giving form information
export const Form = (() => {
  const elements = document.getElementById('form').elements;

  function hasTitle() {
    return (elements[0].value ? true : false);
  }

  return {
    getFormValues() {
      if(!hasTitle()) {
        return false;
      }
      const array = [];
      for(let i = 0; i < elements.length; i++) {
        array.push(elements[i].value);
      }
      return array;
    },

  }
})();
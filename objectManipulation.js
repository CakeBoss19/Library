// Attaches the information from the book object onto it's DOM element
function giveValues(obj, arr){
  for(i = 0; i < arr.length; i++){
   let key = Object.keys(obj)[i];
   let keyValue = Object.values(obj)[i];
   (key === 'remove') ? createButton(arr[i]) : arr[i].textContent = keyValue;
   arr[i].classList = `flex flex-${key}`;
   (key === 'read') ? createSpan(arr[i], keyValue) : false;
  }; return
};  

/* 
	takes an object and an array
	for each item in the array, create 
	a key variable: containing the item's value
*/


if(!elements[0].value) {
	return false;
}
const array = [];
for(let i = 0; i < elements.length; i++) {
	array.push(elements[i].value);
}
return array;

const getFormInfo = (form_elements) => {
	if(!form_elements[0]) {
		return false;
	}

	return 
}
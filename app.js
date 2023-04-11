function createAdder(numberToAdd) {
    return function () {
      return 8 + numberToAdd;
    };
  
  }
  const add5 = createAdder(5);
  console.log(add5(10));
  
  
  function searchArray(array, value) {
    if (array.length === 0) {
      return false;
    } else if (array[0] === value) {
      return true;
    } else {
      return searchArray(array.slice(1), value);
    }
  }
  
  const array = [1, 2, 3, 4, 5];
  console.log(searchArray(array, 3));
  console.log(searchArray(array, 6));
  
  
  function addParagraph(text) {
    const newParagraph = document.createElement('p');
    const newText = document.createTextNode(text);
    newParagraph.appendChild(newText);
    document.body.appendChild(newParagraph);
  }
  
  addParagraph(`1-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`);
  addParagraph(`2-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`);
  addParagraph(`3-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`);
  

  function addListItem(text) {
    const newList = document.querySelector('ul');
    const newListItem = document.createElement('li');
    const newText = document.createTextNode(text);
    newListItem.appendChild(newText);
    newList.appendChild(newListItem);
  }
  
  addListItem('1-This is a new list item!');
  addListItem('2-This is a new list item!');
  addListItem('3-This is a new list item!');
  

  function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
    element.style.width = "200px";
    element.style.height = "200px";
  }
  
  const myElement = document.getElementById('my-element');
  changeBackgroundColor(myElement, 'blue');
  
  
  function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  const personObj = { eyes: 2, feet: 2, hands: 2, eyeColor: "blue" };
  saveToLocalStorage('Obj', personObj);
  

  function retrievesObj(obj) {
    return obj;
  }
  
  const retrieves = retrievesObj(JSON.parse(localStorage.getItem('Obj')));
  console.log(retrieves);
  
  
  function saveObjectToLocalStorage(object) {
    Object.keys(object).forEach((key, value) => {
      localStorage.setItem(key, JSON.stringify(object[key]));
    });
  
  
    const savedObject = {};
    Object.keys(object).forEach((key) => {
      savedObject[key] = JSON.parse(localStorage.getItem(key));
    });
  
    return savedObject;
  }
  
  const myObject = { name: "Douglas Adams", email: "douglas@gmail.com", postcode: "pe22 22a", phoneNumber: "07428233312", city: "London", country: "England" };
  const savedObject = saveObjectToLocalStorage(myObject);
  console.log(savedObject); 
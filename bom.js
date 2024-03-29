const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', () => {
  
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  
  li.textContent = input.value;
  deletebutton.textContent = '❌';
  
  li.append(deletebutton);
  list.append(li);
  
  deletebutton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
  })

});

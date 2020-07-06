let arr = []

function idGen(arr){
  let id = Math.random() * 1000;
  if (! arr.includes(id) || arr.length){
    arr.push(id);
  }else{idGen(arr)}
  return id;
}

let toDoObj = [
  {id:idGen(arr), content:'Brush teeth', checked:false}
]

const todos = document.querySelector('.todos');
const toDoAdder = document.querySelector('button');
const todoval = document.querySelector('.addInput');

function addToDo(task){
  let id = idGen(arr)
  toDoObj.push({ id: id, content: task, checked: false })

  let innerDiv = document.createElement('div');
  innerDiv.classList.add('innerDiv');

  let todo = document.createElement('div'); // create the to do
  todo.classList.add('todo'); // give it a class
  todo.classList.add(`checkmark${id}`); // give it a class

  let input = document.createElement('input');// create the check box
  input.setAttribute('type', 'checkbox'); // give the input an attribute of checkbox
  input.setAttribute('id', `checkmark${id}`);

  let labell = document.createElement('label');
  labell.setAttribute('for', `checkmark${id}`);
  labell.innerText = task;

  let ptodo = document.createElement('p'); // create the p tag
  ptodo.classList.add('innerP'); // give the p tag a pTodo class

  ptodo.innerText = 'remove';
  ptodo.addEventListener('click', () => {
    ptodo.parentNode.parentNode.removeChild(ptodo.parentNode);
    console.log(toDoObj, arr)
    arr = arr.filter(i => i !== id)
    toDoObj = toDoObj.filter(j => j['id'] !== id)
    console.log(toDoObj, arr)
  })

  input.addEventListener('click', () => {
    labell.classList.toggle('done');
    if(input.checked == true){
      toDoObj.forEach(elem =>{
        elem['checked'] = true;
        console.log(elem)
      })
    }
  })

  innerDiv.appendChild(input);
  innerDiv.appendChild(labell);
  todo.appendChild(innerDiv)
  todo.appendChild(ptodo);
  todos.appendChild(todo);
}

toDoObj.forEach( elem => {
  addToDo(elem.content);
})

toDoAdder.addEventListener('click', ()=> {
  addToDo(todoval.value);
  todoval.value = "";
});

document.querySelector('.clear').addEventListener('click', ()=>{
  let arrr = Array.from(document.body.children[0].children[2].children);
  arrr.forEach( elem => {
    toDoObj.forEach( element =>{
      if (element['id'] == Number(elem.classList[1].slice(9,)) && (element['checked'] == true) )
      document.body.children[0].children[2].removeChild(elem)
    })
  })
})
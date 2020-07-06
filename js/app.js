let arr = []

function idGen(arr){
  let id = Math.random() * 1000;
  if(! arr.includes(id)){
    arr.push(id);
      
  }else{idGen()}
}

let toDoObj = [
  {id:(Math.random()*10000), content:'Brush teeth', checked:false}
]

const todos = document.querySelector('.todos');
const toDoAdder = document.querySelector('button');
const todoval = document.querySelector('.addInput');


function update(task){
  toDoObj.push({ id: toDoObj.length, content:task, checked:false})
}

function removed(id){

}

function addToDo(task){
  update(task)

  let innerDiv = document.createElement('div');

  let todo = document.createElement('div'); // create the to do
  todo.classList.add('todo'); // give it a class
  todo.classList.add(`checkmark${toDoObj.length}`); // give it a class

  let input = document.createElement('input');// create the check box
  input.setAttribute('type', 'checkbox'); // give the input an attribute of checkbox
  input.setAttribute('id', `checkmark${toDoObj.length}`);

  let labell = document.createElement('label');
  labell.setAttribute('for', `checkmark${toDoObj.length}`);
  labell.innerText = task;

  let ptodo = document.createElement('p'); // create the p tag
  ptodo.classList.add('innerP'); // give the p tag a pTodo class

  ptodo.innerText = 'remove';
  ptodo.addEventListener('click', () => {
    console.log(ptodo.parentNode)
    ptodo.parentNode.parentNode.removeChild(ptodo.parentNode)
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
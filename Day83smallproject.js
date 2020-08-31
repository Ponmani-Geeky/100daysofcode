//selectors
const todoinput=document.querySelector('.todo-input');
const todobutton=document.querySelector('.todo-button');
const todolist=document.querySelector('.todo-list');


//eventlistners
todobutton.addEventListener('click',addTodo);
todolist.addEventListener('click',deletecheck);


//function
function addTodo(event){
  event.preventDefault();

  //todo div
  const todo= document.createElement('div');
  todo.classList.add('todo');

  //todo list
  const newtodo =document.createElement('li');
  newtodo.innerText=todoinput.value;
  newtodo.classList.add('todo-item');
  todo.appendChild(newtodo);

  //checked button
  const completedbutton=document.createElement('button');
  completedbutton.innerHTML='<li class="fas fa-check"> </li>';
  completedbutton.classList.add('completed-btn');
  todo.appendChild(completedbutton);

   //trash button
   const trashbutton=document.createElement('button');
   trashbutton.innerHTML='<li class="fas fa-trash"> </li>';
   trashbutton.classList.add('trash-btn');
   todo.appendChild(trashbutton);

   //adding to todolist
   todolist.appendChild(todo);

   //todoinput clear
   todoinput.value="";
}


function deletecheck(e){
   console.log(e.target.classList);
   const item=e.target;

   if(item.classList[0]=='trash-btn'){
     const todo=item.parentElement;
     todo.classList.add('fall');
     todo.addEventListener('transitionend',function(){
      todo.remove();
     })
     
   }


   if(item.classList[0]=='completed-btn'){
    const todo=item.parentElement;
    todo.classList.toggle('completed');
  }
   
}